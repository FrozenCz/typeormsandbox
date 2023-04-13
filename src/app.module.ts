import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { connectionOptions } from "./connectionOptions";
import { TestModule } from "./testModule/test.module";
import { CacheModule } from "./Cache/cache.module";
import { CacheModule as CacheModuleOriginal} from  '@nestjs/cache-manager';
import { HttpModule } from "@nestjs/axios";
import { SlowInterceptor } from "./slow.interceptor";
import { dataSource } from "./typeOrm.config";



// export const DataSourceReader = new DataSource({name: 'reader', ...connectionOptions})


@Module({
  imports: [
    HttpModule,
    CacheModuleOriginal.register(),
    TypeOrmModule.forRootAsync({useFactory: () => ({
        ...dataSource.options
      })}),
    TestModule,
    CacheModule.forRoot({url: '127.0.0.1:3003'})
  ],
  controllers: [AppController],
  providers: [AppService, SlowInterceptor,
    // {provide: APP_INTERCEPTOR, useExisting: SlowInterceptor}
  ]
})
export class AppModule {
}
