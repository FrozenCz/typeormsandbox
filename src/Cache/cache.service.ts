import { BadRequestException, Inject, Injectable, Logger, Optional } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { HttpService } from "@nestjs/axios";


@Injectable()
export class CacheService {
  private cacheServiceLogger = new Logger('CacheServiceLogger');
  private url: string | undefined = undefined;


  constructor(@Optional() @Inject('CONFIG_OPTIONS') config: any, private httpClient: HttpService) {
    if (!config.url) {
      this.cacheServiceLogger.error('You must provide URL');
    }
    this.url = config.url;
  }

  saveCache(param: { key: string, value: any }): void {
    this.checkIfUrlSpecified();
    this.httpClient.post(this.url, { key: param.key, url: param.value });
  }

  loadCache<T>(key: string): Promise<T | void> {
    this.checkIfUrlSpecified();
    const url = this.url + '/' + key;
    return this.httpClient.get<T>(url).pipe(map((axios) => axios.data)).toPromise()
      .catch(reason => this.cacheServiceLogger.error({url, reason}))
  }

  private checkIfUrlSpecified() {
    if (!this.url) {
      throw new BadRequestException('You must specify url in cache module');
    }
  }
}
