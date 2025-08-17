import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Extracts the target schema from the request headers. If the client
 * doesn't provide a `schema` header, it defaults to `public`.
 */
export const Schema = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return (request.headers['schema'] as string) || 'public';
  },
);
