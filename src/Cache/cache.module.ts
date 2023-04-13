import { DynamicModule, Module } from "@nestjs/common";
import { CacheService } from "./cache.service";
import { HttpModule } from "@nestjs/axios";



@Module({})
export class CacheModule {
  public static forRoot(param: { url: string }): DynamicModule {
    return {
      module: CacheModule,
      imports: [HttpModule],
      providers: [
        { provide: "CONFIG_OPTIONS", useValue: param },
        CacheService
      ],
      exports: [CacheService]
    };
  }
}
