import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, of, switchMap, take, timer } from "rxjs";
import { map } from "rxjs/operators";

export class SlowInterceptor implements NestInterceptor {
  private sec = 0;

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    this.sec++;
    return timer(1000 * this.sec).pipe(take(1), switchMap(() => next.handle()));
  }

}
