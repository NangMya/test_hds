
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model our_works
 * 
 */
export type our_works = $Result.DefaultSelection<Prisma.$our_worksPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model applicants
 * 
 */
export type applicants = $Result.DefaultSelection<Prisma.$applicantsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.roles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.our_works`: Exposes CRUD operations for the **our_works** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Our_works
    * const our_works = await prisma.our_works.findMany()
    * ```
    */
  get our_works(): Prisma.our_worksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicants`: Exposes CRUD operations for the **applicants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applicants
    * const applicants = await prisma.applicants.findMany()
    * ```
    */
  get applicants(): Prisma.applicantsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    roles: 'roles',
    users: 'users',
    messages: 'messages',
    our_works: 'our_works',
    jobs: 'jobs',
    applicants: 'applicants'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "roles" | "users" | "messages" | "our_works" | "jobs" | "applicants"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      our_works: {
        payload: Prisma.$our_worksPayload<ExtArgs>
        fields: Prisma.our_worksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.our_worksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.our_worksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload>
          }
          findFirst: {
            args: Prisma.our_worksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.our_worksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload>
          }
          findMany: {
            args: Prisma.our_worksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload>[]
          }
          create: {
            args: Prisma.our_worksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload>
          }
          createMany: {
            args: Prisma.our_worksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.our_worksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload>
          }
          update: {
            args: Prisma.our_worksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload>
          }
          deleteMany: {
            args: Prisma.our_worksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.our_worksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.our_worksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$our_worksPayload>
          }
          aggregate: {
            args: Prisma.Our_worksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOur_works>
          }
          groupBy: {
            args: Prisma.our_worksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Our_worksGroupByOutputType>[]
          }
          count: {
            args: Prisma.our_worksCountArgs<ExtArgs>
            result: $Utils.Optional<Our_worksCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      applicants: {
        payload: Prisma.$applicantsPayload<ExtArgs>
        fields: Prisma.applicantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.applicantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.applicantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          findFirst: {
            args: Prisma.applicantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.applicantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          findMany: {
            args: Prisma.applicantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>[]
          }
          create: {
            args: Prisma.applicantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          createMany: {
            args: Prisma.applicantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.applicantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          update: {
            args: Prisma.applicantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          deleteMany: {
            args: Prisma.applicantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.applicantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.applicantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$applicantsPayload>
          }
          aggregate: {
            args: Prisma.ApplicantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicants>
          }
          groupBy: {
            args: Prisma.applicantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.applicantsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    roles?: rolesOmit
    users?: usersOmit
    messages?: messagesOmit
    our_works?: our_worksOmit
    jobs?: jobsOmit
    applicants?: applicantsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    created_Work: number
    updated_Work: number
    created_Job: number
    updated_Job: number
    updated_Applicant: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_Work?: boolean | UsersCountOutputTypeCountCreated_WorkArgs
    updated_Work?: boolean | UsersCountOutputTypeCountUpdated_WorkArgs
    created_Job?: boolean | UsersCountOutputTypeCountCreated_JobArgs
    updated_Job?: boolean | UsersCountOutputTypeCountUpdated_JobArgs
    updated_Applicant?: boolean | UsersCountOutputTypeCountUpdated_ApplicantArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCreated_WorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: our_worksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUpdated_WorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: our_worksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCreated_JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUpdated_JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUpdated_ApplicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantsWhereInput
  }


  /**
   * Count Type JobsCountOutputType
   */

  export type JobsCountOutputType = {
    applicant: number
  }

  export type JobsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | JobsCountOutputTypeCountApplicantArgs
  }

  // Custom InputTypes
  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobsCountOutputType
     */
    select?: JobsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountApplicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    access: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    access?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    access: JsonValue
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    access?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    access?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "access", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      access: Prisma.JsonValue
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
    readonly access: FieldRef<"roles", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    two_factor_code: string | null
    two_factor_code_expiry: Date | null
    is_two_factor_enabled: boolean | null
    reset_token: string | null
    reset_token_expiry: Date | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    two_factor_code: string | null
    two_factor_code_expiry: Date | null
    is_two_factor_enabled: boolean | null
    reset_token: string | null
    reset_token_expiry: Date | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    two_factor_code: number
    two_factor_code_expiry: number
    is_two_factor_enabled: number
    reset_token: number
    reset_token_expiry: number
    role_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    two_factor_code?: true
    two_factor_code_expiry?: true
    is_two_factor_enabled?: true
    reset_token?: true
    reset_token_expiry?: true
    role_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    two_factor_code?: true
    two_factor_code_expiry?: true
    is_two_factor_enabled?: true
    reset_token?: true
    reset_token_expiry?: true
    role_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    two_factor_code?: true
    two_factor_code_expiry?: true
    is_two_factor_enabled?: true
    reset_token?: true
    reset_token_expiry?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    two_factor_code: string | null
    two_factor_code_expiry: Date | null
    is_two_factor_enabled: boolean
    reset_token: string | null
    reset_token_expiry: Date | null
    role_id: number | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    two_factor_code?: boolean
    two_factor_code_expiry?: boolean
    is_two_factor_enabled?: boolean
    reset_token?: boolean
    reset_token_expiry?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | users$roleArgs<ExtArgs>
    created_Work?: boolean | users$created_WorkArgs<ExtArgs>
    updated_Work?: boolean | users$updated_WorkArgs<ExtArgs>
    created_Job?: boolean | users$created_JobArgs<ExtArgs>
    updated_Job?: boolean | users$updated_JobArgs<ExtArgs>
    updated_Applicant?: boolean | users$updated_ApplicantArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    two_factor_code?: boolean
    two_factor_code_expiry?: boolean
    is_two_factor_enabled?: boolean
    reset_token?: boolean
    reset_token_expiry?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "two_factor_code" | "two_factor_code_expiry" | "is_two_factor_enabled" | "reset_token" | "reset_token_expiry" | "role_id" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | users$roleArgs<ExtArgs>
    created_Work?: boolean | users$created_WorkArgs<ExtArgs>
    updated_Work?: boolean | users$updated_WorkArgs<ExtArgs>
    created_Job?: boolean | users$created_JobArgs<ExtArgs>
    updated_Job?: boolean | users$updated_JobArgs<ExtArgs>
    updated_Applicant?: boolean | users$updated_ApplicantArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      role: Prisma.$rolesPayload<ExtArgs> | null
      created_Work: Prisma.$our_worksPayload<ExtArgs>[]
      updated_Work: Prisma.$our_worksPayload<ExtArgs>[]
      created_Job: Prisma.$jobsPayload<ExtArgs>[]
      updated_Job: Prisma.$jobsPayload<ExtArgs>[]
      updated_Applicant: Prisma.$applicantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      two_factor_code: string | null
      two_factor_code_expiry: Date | null
      is_two_factor_enabled: boolean
      reset_token: string | null
      reset_token_expiry: Date | null
      role_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends users$roleArgs<ExtArgs> = {}>(args?: Subset<T, users$roleArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    created_Work<T extends users$created_WorkArgs<ExtArgs> = {}>(args?: Subset<T, users$created_WorkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_Work<T extends users$updated_WorkArgs<ExtArgs> = {}>(args?: Subset<T, users$updated_WorkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_Job<T extends users$created_JobArgs<ExtArgs> = {}>(args?: Subset<T, users$created_JobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_Job<T extends users$updated_JobArgs<ExtArgs> = {}>(args?: Subset<T, users$updated_JobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_Applicant<T extends users$updated_ApplicantArgs<ExtArgs> = {}>(args?: Subset<T, users$updated_ApplicantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly two_factor_code: FieldRef<"users", 'String'>
    readonly two_factor_code_expiry: FieldRef<"users", 'DateTime'>
    readonly is_two_factor_enabled: FieldRef<"users", 'Boolean'>
    readonly reset_token: FieldRef<"users", 'String'>
    readonly reset_token_expiry: FieldRef<"users", 'DateTime'>
    readonly role_id: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.role
   */
  export type users$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
  }

  /**
   * users.created_Work
   */
  export type users$created_WorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    where?: our_worksWhereInput
    orderBy?: our_worksOrderByWithRelationInput | our_worksOrderByWithRelationInput[]
    cursor?: our_worksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Our_worksScalarFieldEnum | Our_worksScalarFieldEnum[]
  }

  /**
   * users.updated_Work
   */
  export type users$updated_WorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    where?: our_worksWhereInput
    orderBy?: our_worksOrderByWithRelationInput | our_worksOrderByWithRelationInput[]
    cursor?: our_worksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Our_worksScalarFieldEnum | Our_worksScalarFieldEnum[]
  }

  /**
   * users.created_Job
   */
  export type users$created_JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    cursor?: jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * users.updated_Job
   */
  export type users$updated_JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    cursor?: jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * users.updated_Applicant
   */
  export type users$updated_ApplicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    where?: applicantsWhereInput
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    cursor?: applicantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesAvgAggregateOutputType = {
    id: number | null
  }

  export type MessagesSumAggregateOutputType = {
    id: number | null
  }

  export type MessagesMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MessagesAvgAggregateInputType = {
    id?: true
  }

  export type MessagesSumAggregateInputType = {
    id?: true
  }

  export type MessagesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    created_at?: true
    updated_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    created_at?: true
    updated_at?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _avg?: MessagesAvgAggregateInputType
    _sum?: MessagesSumAggregateInputType
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    message: string
    created_at: Date
    updated_at: Date
    _count: MessagesCountAggregateOutputType | null
    _avg: MessagesAvgAggregateOutputType | null
    _sum: MessagesSumAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["messages"]>



  export type messagesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "created_at" | "updated_at", ExtArgs["result"]["messages"]>

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      message: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'Int'>
    readonly name: FieldRef<"messages", 'String'>
    readonly email: FieldRef<"messages", 'String'>
    readonly phone: FieldRef<"messages", 'String'>
    readonly message: FieldRef<"messages", 'String'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
    readonly updated_at: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
  }


  /**
   * Model our_works
   */

  export type AggregateOur_works = {
    _count: Our_worksCountAggregateOutputType | null
    _avg: Our_worksAvgAggregateOutputType | null
    _sum: Our_worksSumAggregateOutputType | null
    _min: Our_worksMinAggregateOutputType | null
    _max: Our_worksMaxAggregateOutputType | null
  }

  export type Our_worksAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Our_worksSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type Our_worksMinAggregateOutputType = {
    id: number | null
    date: Date | null
    title: string | null
    description: string | null
    challenges: string | null
    strategy: string | null
    takeaway: string | null
    image: string | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Our_worksMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    title: string | null
    description: string | null
    challenges: string | null
    strategy: string | null
    takeaway: string | null
    image: string | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Our_worksCountAggregateOutputType = {
    id: number
    date: number
    title: number
    description: number
    challenges: number
    strategy: number
    takeaway: number
    image: number
    created_by: number
    updated_by: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Our_worksAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type Our_worksSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type Our_worksMinAggregateInputType = {
    id?: true
    date?: true
    title?: true
    description?: true
    challenges?: true
    strategy?: true
    takeaway?: true
    image?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type Our_worksMaxAggregateInputType = {
    id?: true
    date?: true
    title?: true
    description?: true
    challenges?: true
    strategy?: true
    takeaway?: true
    image?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type Our_worksCountAggregateInputType = {
    id?: true
    date?: true
    title?: true
    description?: true
    challenges?: true
    strategy?: true
    takeaway?: true
    image?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Our_worksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which our_works to aggregate.
     */
    where?: our_worksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of our_works to fetch.
     */
    orderBy?: our_worksOrderByWithRelationInput | our_worksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: our_worksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` our_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` our_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned our_works
    **/
    _count?: true | Our_worksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Our_worksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Our_worksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Our_worksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Our_worksMaxAggregateInputType
  }

  export type GetOur_worksAggregateType<T extends Our_worksAggregateArgs> = {
        [P in keyof T & keyof AggregateOur_works]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOur_works[P]>
      : GetScalarType<T[P], AggregateOur_works[P]>
  }




  export type our_worksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: our_worksWhereInput
    orderBy?: our_worksOrderByWithAggregationInput | our_worksOrderByWithAggregationInput[]
    by: Our_worksScalarFieldEnum[] | Our_worksScalarFieldEnum
    having?: our_worksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Our_worksCountAggregateInputType | true
    _avg?: Our_worksAvgAggregateInputType
    _sum?: Our_worksSumAggregateInputType
    _min?: Our_worksMinAggregateInputType
    _max?: Our_worksMaxAggregateInputType
  }

  export type Our_worksGroupByOutputType = {
    id: number
    date: Date
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image: string | null
    created_by: number
    updated_by: number
    created_at: Date
    updated_at: Date
    _count: Our_worksCountAggregateOutputType | null
    _avg: Our_worksAvgAggregateOutputType | null
    _sum: Our_worksSumAggregateOutputType | null
    _min: Our_worksMinAggregateOutputType | null
    _max: Our_worksMaxAggregateOutputType | null
  }

  type GetOur_worksGroupByPayload<T extends our_worksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Our_worksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Our_worksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Our_worksGroupByOutputType[P]>
            : GetScalarType<T[P], Our_worksGroupByOutputType[P]>
        }
      >
    >


  export type our_worksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    challenges?: boolean
    strategy?: boolean
    takeaway?: boolean
    image?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    createdBy?: boolean | usersDefaultArgs<ExtArgs>
    updatedBy?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["our_works"]>



  export type our_worksSelectScalar = {
    id?: boolean
    date?: boolean
    title?: boolean
    description?: boolean
    challenges?: boolean
    strategy?: boolean
    takeaway?: boolean
    image?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type our_worksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "title" | "description" | "challenges" | "strategy" | "takeaway" | "image" | "created_by" | "updated_by" | "created_at" | "updated_at", ExtArgs["result"]["our_works"]>
  export type our_worksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | usersDefaultArgs<ExtArgs>
    updatedBy?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $our_worksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "our_works"
    objects: {
      createdBy: Prisma.$usersPayload<ExtArgs>
      updatedBy: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      title: string
      description: string
      challenges: string
      strategy: string
      takeaway: string
      image: string | null
      created_by: number
      updated_by: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["our_works"]>
    composites: {}
  }

  type our_worksGetPayload<S extends boolean | null | undefined | our_worksDefaultArgs> = $Result.GetResult<Prisma.$our_worksPayload, S>

  type our_worksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<our_worksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Our_worksCountAggregateInputType | true
    }

  export interface our_worksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['our_works'], meta: { name: 'our_works' } }
    /**
     * Find zero or one Our_works that matches the filter.
     * @param {our_worksFindUniqueArgs} args - Arguments to find a Our_works
     * @example
     * // Get one Our_works
     * const our_works = await prisma.our_works.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends our_worksFindUniqueArgs>(args: SelectSubset<T, our_worksFindUniqueArgs<ExtArgs>>): Prisma__our_worksClient<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Our_works that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {our_worksFindUniqueOrThrowArgs} args - Arguments to find a Our_works
     * @example
     * // Get one Our_works
     * const our_works = await prisma.our_works.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends our_worksFindUniqueOrThrowArgs>(args: SelectSubset<T, our_worksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__our_worksClient<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Our_works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {our_worksFindFirstArgs} args - Arguments to find a Our_works
     * @example
     * // Get one Our_works
     * const our_works = await prisma.our_works.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends our_worksFindFirstArgs>(args?: SelectSubset<T, our_worksFindFirstArgs<ExtArgs>>): Prisma__our_worksClient<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Our_works that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {our_worksFindFirstOrThrowArgs} args - Arguments to find a Our_works
     * @example
     * // Get one Our_works
     * const our_works = await prisma.our_works.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends our_worksFindFirstOrThrowArgs>(args?: SelectSubset<T, our_worksFindFirstOrThrowArgs<ExtArgs>>): Prisma__our_worksClient<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Our_works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {our_worksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Our_works
     * const our_works = await prisma.our_works.findMany()
     * 
     * // Get first 10 Our_works
     * const our_works = await prisma.our_works.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const our_worksWithIdOnly = await prisma.our_works.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends our_worksFindManyArgs>(args?: SelectSubset<T, our_worksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Our_works.
     * @param {our_worksCreateArgs} args - Arguments to create a Our_works.
     * @example
     * // Create one Our_works
     * const Our_works = await prisma.our_works.create({
     *   data: {
     *     // ... data to create a Our_works
     *   }
     * })
     * 
     */
    create<T extends our_worksCreateArgs>(args: SelectSubset<T, our_worksCreateArgs<ExtArgs>>): Prisma__our_worksClient<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Our_works.
     * @param {our_worksCreateManyArgs} args - Arguments to create many Our_works.
     * @example
     * // Create many Our_works
     * const our_works = await prisma.our_works.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends our_worksCreateManyArgs>(args?: SelectSubset<T, our_worksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Our_works.
     * @param {our_worksDeleteArgs} args - Arguments to delete one Our_works.
     * @example
     * // Delete one Our_works
     * const Our_works = await prisma.our_works.delete({
     *   where: {
     *     // ... filter to delete one Our_works
     *   }
     * })
     * 
     */
    delete<T extends our_worksDeleteArgs>(args: SelectSubset<T, our_worksDeleteArgs<ExtArgs>>): Prisma__our_worksClient<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Our_works.
     * @param {our_worksUpdateArgs} args - Arguments to update one Our_works.
     * @example
     * // Update one Our_works
     * const our_works = await prisma.our_works.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends our_worksUpdateArgs>(args: SelectSubset<T, our_worksUpdateArgs<ExtArgs>>): Prisma__our_worksClient<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Our_works.
     * @param {our_worksDeleteManyArgs} args - Arguments to filter Our_works to delete.
     * @example
     * // Delete a few Our_works
     * const { count } = await prisma.our_works.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends our_worksDeleteManyArgs>(args?: SelectSubset<T, our_worksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Our_works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {our_worksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Our_works
     * const our_works = await prisma.our_works.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends our_worksUpdateManyArgs>(args: SelectSubset<T, our_worksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Our_works.
     * @param {our_worksUpsertArgs} args - Arguments to update or create a Our_works.
     * @example
     * // Update or create a Our_works
     * const our_works = await prisma.our_works.upsert({
     *   create: {
     *     // ... data to create a Our_works
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Our_works we want to update
     *   }
     * })
     */
    upsert<T extends our_worksUpsertArgs>(args: SelectSubset<T, our_worksUpsertArgs<ExtArgs>>): Prisma__our_worksClient<$Result.GetResult<Prisma.$our_worksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Our_works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {our_worksCountArgs} args - Arguments to filter Our_works to count.
     * @example
     * // Count the number of Our_works
     * const count = await prisma.our_works.count({
     *   where: {
     *     // ... the filter for the Our_works we want to count
     *   }
     * })
    **/
    count<T extends our_worksCountArgs>(
      args?: Subset<T, our_worksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Our_worksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Our_works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Our_worksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Our_worksAggregateArgs>(args: Subset<T, Our_worksAggregateArgs>): Prisma.PrismaPromise<GetOur_worksAggregateType<T>>

    /**
     * Group by Our_works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {our_worksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends our_worksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: our_worksGroupByArgs['orderBy'] }
        : { orderBy?: our_worksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, our_worksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOur_worksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the our_works model
   */
  readonly fields: our_worksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for our_works.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__our_worksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the our_works model
   */
  interface our_worksFieldRefs {
    readonly id: FieldRef<"our_works", 'Int'>
    readonly date: FieldRef<"our_works", 'DateTime'>
    readonly title: FieldRef<"our_works", 'String'>
    readonly description: FieldRef<"our_works", 'String'>
    readonly challenges: FieldRef<"our_works", 'String'>
    readonly strategy: FieldRef<"our_works", 'String'>
    readonly takeaway: FieldRef<"our_works", 'String'>
    readonly image: FieldRef<"our_works", 'String'>
    readonly created_by: FieldRef<"our_works", 'Int'>
    readonly updated_by: FieldRef<"our_works", 'Int'>
    readonly created_at: FieldRef<"our_works", 'DateTime'>
    readonly updated_at: FieldRef<"our_works", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * our_works findUnique
   */
  export type our_worksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * Filter, which our_works to fetch.
     */
    where: our_worksWhereUniqueInput
  }

  /**
   * our_works findUniqueOrThrow
   */
  export type our_worksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * Filter, which our_works to fetch.
     */
    where: our_worksWhereUniqueInput
  }

  /**
   * our_works findFirst
   */
  export type our_worksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * Filter, which our_works to fetch.
     */
    where?: our_worksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of our_works to fetch.
     */
    orderBy?: our_worksOrderByWithRelationInput | our_worksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for our_works.
     */
    cursor?: our_worksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` our_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` our_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of our_works.
     */
    distinct?: Our_worksScalarFieldEnum | Our_worksScalarFieldEnum[]
  }

  /**
   * our_works findFirstOrThrow
   */
  export type our_worksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * Filter, which our_works to fetch.
     */
    where?: our_worksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of our_works to fetch.
     */
    orderBy?: our_worksOrderByWithRelationInput | our_worksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for our_works.
     */
    cursor?: our_worksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` our_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` our_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of our_works.
     */
    distinct?: Our_worksScalarFieldEnum | Our_worksScalarFieldEnum[]
  }

  /**
   * our_works findMany
   */
  export type our_worksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * Filter, which our_works to fetch.
     */
    where?: our_worksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of our_works to fetch.
     */
    orderBy?: our_worksOrderByWithRelationInput | our_worksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing our_works.
     */
    cursor?: our_worksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` our_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` our_works.
     */
    skip?: number
    distinct?: Our_worksScalarFieldEnum | Our_worksScalarFieldEnum[]
  }

  /**
   * our_works create
   */
  export type our_worksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * The data needed to create a our_works.
     */
    data: XOR<our_worksCreateInput, our_worksUncheckedCreateInput>
  }

  /**
   * our_works createMany
   */
  export type our_worksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many our_works.
     */
    data: our_worksCreateManyInput | our_worksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * our_works update
   */
  export type our_worksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * The data needed to update a our_works.
     */
    data: XOR<our_worksUpdateInput, our_worksUncheckedUpdateInput>
    /**
     * Choose, which our_works to update.
     */
    where: our_worksWhereUniqueInput
  }

  /**
   * our_works updateMany
   */
  export type our_worksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update our_works.
     */
    data: XOR<our_worksUpdateManyMutationInput, our_worksUncheckedUpdateManyInput>
    /**
     * Filter which our_works to update
     */
    where?: our_worksWhereInput
    /**
     * Limit how many our_works to update.
     */
    limit?: number
  }

  /**
   * our_works upsert
   */
  export type our_worksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * The filter to search for the our_works to update in case it exists.
     */
    where: our_worksWhereUniqueInput
    /**
     * In case the our_works found by the `where` argument doesn't exist, create a new our_works with this data.
     */
    create: XOR<our_worksCreateInput, our_worksUncheckedCreateInput>
    /**
     * In case the our_works was found with the provided `where` argument, update it with this data.
     */
    update: XOR<our_worksUpdateInput, our_worksUncheckedUpdateInput>
  }

  /**
   * our_works delete
   */
  export type our_worksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
    /**
     * Filter which our_works to delete.
     */
    where: our_worksWhereUniqueInput
  }

  /**
   * our_works deleteMany
   */
  export type our_worksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which our_works to delete
     */
    where?: our_worksWhereInput
    /**
     * Limit how many our_works to delete.
     */
    limit?: number
  }

  /**
   * our_works without action
   */
  export type our_worksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the our_works
     */
    select?: our_worksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the our_works
     */
    omit?: our_worksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: our_worksInclude<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    open_date: Date | null
    close_date: Date | null
    position: string | null
    department: string | null
    description: string | null
    experiences: string | null
    level: string | null
    overview: string | null
    job_type: string | null
    salary: string | null
    duties: string | null
    requirements: string | null
    gender: string | null
    status: string | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    open_date: Date | null
    close_date: Date | null
    position: string | null
    department: string | null
    description: string | null
    experiences: string | null
    level: string | null
    overview: string | null
    job_type: string | null
    salary: string | null
    duties: string | null
    requirements: string | null
    gender: string | null
    status: string | null
    created_by: number | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    open_date: number
    close_date: number
    position: number
    department: number
    description: number
    experiences: number
    level: number
    overview: number
    job_type: number
    salary: number
    duties: number
    requirements: number
    gender: number
    status: number
    created_by: number
    updated_by: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    open_date?: true
    close_date?: true
    position?: true
    department?: true
    description?: true
    experiences?: true
    level?: true
    overview?: true
    job_type?: true
    salary?: true
    duties?: true
    requirements?: true
    gender?: true
    status?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    open_date?: true
    close_date?: true
    position?: true
    department?: true
    description?: true
    experiences?: true
    level?: true
    overview?: true
    job_type?: true
    salary?: true
    duties?: true
    requirements?: true
    gender?: true
    status?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    open_date?: true
    close_date?: true
    position?: true
    department?: true
    description?: true
    experiences?: true
    level?: true
    overview?: true
    job_type?: true
    salary?: true
    duties?: true
    requirements?: true
    gender?: true
    status?: true
    created_by?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    open_date: Date
    close_date: Date
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status: string
    created_by: number
    updated_by: number
    created_at: Date
    updated_at: Date
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    open_date?: boolean
    close_date?: boolean
    position?: boolean
    department?: boolean
    description?: boolean
    experiences?: boolean
    level?: boolean
    overview?: boolean
    job_type?: boolean
    salary?: boolean
    duties?: boolean
    requirements?: boolean
    gender?: boolean
    status?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    createdBy?: boolean | usersDefaultArgs<ExtArgs>
    updatedBy?: boolean | usersDefaultArgs<ExtArgs>
    applicant?: boolean | jobs$applicantArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>



  export type jobsSelectScalar = {
    id?: boolean
    open_date?: boolean
    close_date?: boolean
    position?: boolean
    department?: boolean
    description?: boolean
    experiences?: boolean
    level?: boolean
    overview?: boolean
    job_type?: boolean
    salary?: boolean
    duties?: boolean
    requirements?: boolean
    gender?: boolean
    status?: boolean
    created_by?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "open_date" | "close_date" | "position" | "department" | "description" | "experiences" | "level" | "overview" | "job_type" | "salary" | "duties" | "requirements" | "gender" | "status" | "created_by" | "updated_by" | "created_at" | "updated_at", ExtArgs["result"]["jobs"]>
  export type jobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | usersDefaultArgs<ExtArgs>
    updatedBy?: boolean | usersDefaultArgs<ExtArgs>
    applicant?: boolean | jobs$applicantArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {
      createdBy: Prisma.$usersPayload<ExtArgs>
      updatedBy: Prisma.$usersPayload<ExtArgs>
      applicant: Prisma.$applicantsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      open_date: Date
      close_date: Date
      position: string
      department: string
      description: string
      experiences: string
      level: string
      overview: string
      job_type: string
      salary: string
      duties: string
      requirements: string
      gender: string
      status: string
      created_by: number
      updated_by: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends jobs$applicantArgs<ExtArgs> = {}>(args?: Subset<T, jobs$applicantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jobs model
   */
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'Int'>
    readonly open_date: FieldRef<"jobs", 'DateTime'>
    readonly close_date: FieldRef<"jobs", 'DateTime'>
    readonly position: FieldRef<"jobs", 'String'>
    readonly department: FieldRef<"jobs", 'String'>
    readonly description: FieldRef<"jobs", 'String'>
    readonly experiences: FieldRef<"jobs", 'String'>
    readonly level: FieldRef<"jobs", 'String'>
    readonly overview: FieldRef<"jobs", 'String'>
    readonly job_type: FieldRef<"jobs", 'String'>
    readonly salary: FieldRef<"jobs", 'String'>
    readonly duties: FieldRef<"jobs", 'String'>
    readonly requirements: FieldRef<"jobs", 'String'>
    readonly gender: FieldRef<"jobs", 'String'>
    readonly status: FieldRef<"jobs", 'String'>
    readonly created_by: FieldRef<"jobs", 'Int'>
    readonly updated_by: FieldRef<"jobs", 'Int'>
    readonly created_at: FieldRef<"jobs", 'DateTime'>
    readonly updated_at: FieldRef<"jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to update.
     */
    limit?: number
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
    /**
     * Limit how many jobs to delete.
     */
    limit?: number
  }

  /**
   * jobs.applicant
   */
  export type jobs$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    where?: applicantsWhereInput
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    cursor?: applicantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jobs
     */
    omit?: jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
  }


  /**
   * Model applicants
   */

  export type AggregateApplicants = {
    _count: ApplicantsCountAggregateOutputType | null
    _avg: ApplicantsAvgAggregateOutputType | null
    _sum: ApplicantsSumAggregateOutputType | null
    _min: ApplicantsMinAggregateOutputType | null
    _max: ApplicantsMaxAggregateOutputType | null
  }

  export type ApplicantsAvgAggregateOutputType = {
    id: number | null
    job_id: number | null
    updated_by: number | null
  }

  export type ApplicantsSumAggregateOutputType = {
    id: number | null
    job_id: number | null
    updated_by: number | null
  }

  export type ApplicantsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    experience: string | null
    expected_salary: string | null
    job_id: number | null
    file: string | null
    status: string | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApplicantsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    experience: string | null
    expected_salary: string | null
    job_id: number | null
    file: string | null
    status: string | null
    updated_by: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApplicantsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    experience: number
    expected_salary: number
    job_id: number
    file: number
    status: number
    updated_by: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ApplicantsAvgAggregateInputType = {
    id?: true
    job_id?: true
    updated_by?: true
  }

  export type ApplicantsSumAggregateInputType = {
    id?: true
    job_id?: true
    updated_by?: true
  }

  export type ApplicantsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    experience?: true
    expected_salary?: true
    job_id?: true
    file?: true
    status?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type ApplicantsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    experience?: true
    expected_salary?: true
    job_id?: true
    file?: true
    status?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
  }

  export type ApplicantsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    experience?: true
    expected_salary?: true
    job_id?: true
    file?: true
    status?: true
    updated_by?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ApplicantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to aggregate.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned applicants
    **/
    _count?: true | ApplicantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantsMaxAggregateInputType
  }

  export type GetApplicantsAggregateType<T extends ApplicantsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicants[P]>
      : GetScalarType<T[P], AggregateApplicants[P]>
  }




  export type applicantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantsWhereInput
    orderBy?: applicantsOrderByWithAggregationInput | applicantsOrderByWithAggregationInput[]
    by: ApplicantsScalarFieldEnum[] | ApplicantsScalarFieldEnum
    having?: applicantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantsCountAggregateInputType | true
    _avg?: ApplicantsAvgAggregateInputType
    _sum?: ApplicantsSumAggregateInputType
    _min?: ApplicantsMinAggregateInputType
    _max?: ApplicantsMaxAggregateInputType
  }

  export type ApplicantsGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    job_id: number
    file: string
    status: string
    updated_by: number
    created_at: Date
    updated_at: Date
    _count: ApplicantsCountAggregateOutputType | null
    _avg: ApplicantsAvgAggregateOutputType | null
    _sum: ApplicantsSumAggregateOutputType | null
    _min: ApplicantsMinAggregateOutputType | null
    _max: ApplicantsMaxAggregateOutputType | null
  }

  type GetApplicantsGroupByPayload<T extends applicantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantsGroupByOutputType[P]>
        }
      >
    >


  export type applicantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    experience?: boolean
    expected_salary?: boolean
    job_id?: boolean
    file?: boolean
    status?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    job?: boolean | jobsDefaultArgs<ExtArgs>
    updatedBy?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicants"]>



  export type applicantsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    experience?: boolean
    expected_salary?: boolean
    job_id?: boolean
    file?: boolean
    status?: boolean
    updated_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type applicantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "experience" | "expected_salary" | "job_id" | "file" | "status" | "updated_by" | "created_at" | "updated_at", ExtArgs["result"]["applicants"]>
  export type applicantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | jobsDefaultArgs<ExtArgs>
    updatedBy?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $applicantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "applicants"
    objects: {
      job: Prisma.$jobsPayload<ExtArgs>
      updatedBy: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      address: string
      experience: string
      expected_salary: string
      job_id: number
      file: string
      status: string
      updated_by: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["applicants"]>
    composites: {}
  }

  type applicantsGetPayload<S extends boolean | null | undefined | applicantsDefaultArgs> = $Result.GetResult<Prisma.$applicantsPayload, S>

  type applicantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<applicantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantsCountAggregateInputType | true
    }

  export interface applicantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applicants'], meta: { name: 'applicants' } }
    /**
     * Find zero or one Applicants that matches the filter.
     * @param {applicantsFindUniqueArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends applicantsFindUniqueArgs>(args: SelectSubset<T, applicantsFindUniqueArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applicants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {applicantsFindUniqueOrThrowArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends applicantsFindUniqueOrThrowArgs>(args: SelectSubset<T, applicantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindFirstArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends applicantsFindFirstArgs>(args?: SelectSubset<T, applicantsFindFirstArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindFirstOrThrowArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends applicantsFindFirstOrThrowArgs>(args?: SelectSubset<T, applicantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicants.findMany()
     * 
     * // Get first 10 Applicants
     * const applicants = await prisma.applicants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantsWithIdOnly = await prisma.applicants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends applicantsFindManyArgs>(args?: SelectSubset<T, applicantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applicants.
     * @param {applicantsCreateArgs} args - Arguments to create a Applicants.
     * @example
     * // Create one Applicants
     * const Applicants = await prisma.applicants.create({
     *   data: {
     *     // ... data to create a Applicants
     *   }
     * })
     * 
     */
    create<T extends applicantsCreateArgs>(args: SelectSubset<T, applicantsCreateArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applicants.
     * @param {applicantsCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicants = await prisma.applicants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends applicantsCreateManyArgs>(args?: SelectSubset<T, applicantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Applicants.
     * @param {applicantsDeleteArgs} args - Arguments to delete one Applicants.
     * @example
     * // Delete one Applicants
     * const Applicants = await prisma.applicants.delete({
     *   where: {
     *     // ... filter to delete one Applicants
     *   }
     * })
     * 
     */
    delete<T extends applicantsDeleteArgs>(args: SelectSubset<T, applicantsDeleteArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applicants.
     * @param {applicantsUpdateArgs} args - Arguments to update one Applicants.
     * @example
     * // Update one Applicants
     * const applicants = await prisma.applicants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends applicantsUpdateArgs>(args: SelectSubset<T, applicantsUpdateArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applicants.
     * @param {applicantsDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends applicantsDeleteManyArgs>(args?: SelectSubset<T, applicantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicants = await prisma.applicants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends applicantsUpdateManyArgs>(args: SelectSubset<T, applicantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Applicants.
     * @param {applicantsUpsertArgs} args - Arguments to update or create a Applicants.
     * @example
     * // Update or create a Applicants
     * const applicants = await prisma.applicants.upsert({
     *   create: {
     *     // ... data to create a Applicants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicants we want to update
     *   }
     * })
     */
    upsert<T extends applicantsUpsertArgs>(args: SelectSubset<T, applicantsUpsertArgs<ExtArgs>>): Prisma__applicantsClient<$Result.GetResult<Prisma.$applicantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicants.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends applicantsCountArgs>(
      args?: Subset<T, applicantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicantsAggregateArgs>(args: Subset<T, ApplicantsAggregateArgs>): Prisma.PrismaPromise<GetApplicantsAggregateType<T>>

    /**
     * Group by Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends applicantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicantsGroupByArgs['orderBy'] }
        : { orderBy?: applicantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, applicantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the applicants model
   */
  readonly fields: applicantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applicants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends jobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobsDefaultArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the applicants model
   */
  interface applicantsFieldRefs {
    readonly id: FieldRef<"applicants", 'Int'>
    readonly name: FieldRef<"applicants", 'String'>
    readonly email: FieldRef<"applicants", 'String'>
    readonly phone: FieldRef<"applicants", 'String'>
    readonly address: FieldRef<"applicants", 'String'>
    readonly experience: FieldRef<"applicants", 'String'>
    readonly expected_salary: FieldRef<"applicants", 'String'>
    readonly job_id: FieldRef<"applicants", 'Int'>
    readonly file: FieldRef<"applicants", 'String'>
    readonly status: FieldRef<"applicants", 'String'>
    readonly updated_by: FieldRef<"applicants", 'Int'>
    readonly created_at: FieldRef<"applicants", 'DateTime'>
    readonly updated_at: FieldRef<"applicants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * applicants findUnique
   */
  export type applicantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants findUniqueOrThrow
   */
  export type applicantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants findFirst
   */
  export type applicantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants findFirstOrThrow
   */
  export type applicantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants findMany
   */
  export type applicantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantsOrderByWithRelationInput | applicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing applicants.
     */
    cursor?: applicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` applicants.
     */
    skip?: number
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * applicants create
   */
  export type applicantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The data needed to create a applicants.
     */
    data: XOR<applicantsCreateInput, applicantsUncheckedCreateInput>
  }

  /**
   * applicants createMany
   */
  export type applicantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applicants.
     */
    data: applicantsCreateManyInput | applicantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * applicants update
   */
  export type applicantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The data needed to update a applicants.
     */
    data: XOR<applicantsUpdateInput, applicantsUncheckedUpdateInput>
    /**
     * Choose, which applicants to update.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants updateMany
   */
  export type applicantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applicants.
     */
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyInput>
    /**
     * Filter which applicants to update
     */
    where?: applicantsWhereInput
    /**
     * Limit how many applicants to update.
     */
    limit?: number
  }

  /**
   * applicants upsert
   */
  export type applicantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * The filter to search for the applicants to update in case it exists.
     */
    where: applicantsWhereUniqueInput
    /**
     * In case the applicants found by the `where` argument doesn't exist, create a new applicants with this data.
     */
    create: XOR<applicantsCreateInput, applicantsUncheckedCreateInput>
    /**
     * In case the applicants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicantsUpdateInput, applicantsUncheckedUpdateInput>
  }

  /**
   * applicants delete
   */
  export type applicantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
    /**
     * Filter which applicants to delete.
     */
    where: applicantsWhereUniqueInput
  }

  /**
   * applicants deleteMany
   */
  export type applicantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to delete
     */
    where?: applicantsWhereInput
    /**
     * Limit how many applicants to delete.
     */
    limit?: number
  }

  /**
   * applicants without action
   */
  export type applicantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicants
     */
    select?: applicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the applicants
     */
    omit?: applicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: applicantsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    access: 'access'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    two_factor_code: 'two_factor_code',
    two_factor_code_expiry: 'two_factor_code_expiry',
    is_two_factor_enabled: 'is_two_factor_enabled',
    reset_token: 'reset_token',
    reset_token_expiry: 'reset_token_expiry',
    role_id: 'role_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const Our_worksScalarFieldEnum: {
    id: 'id',
    date: 'date',
    title: 'title',
    description: 'description',
    challenges: 'challenges',
    strategy: 'strategy',
    takeaway: 'takeaway',
    image: 'image',
    created_by: 'created_by',
    updated_by: 'updated_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Our_worksScalarFieldEnum = (typeof Our_worksScalarFieldEnum)[keyof typeof Our_worksScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    open_date: 'open_date',
    close_date: 'close_date',
    position: 'position',
    department: 'department',
    description: 'description',
    experiences: 'experiences',
    level: 'level',
    overview: 'overview',
    job_type: 'job_type',
    salary: 'salary',
    duties: 'duties',
    requirements: 'requirements',
    gender: 'gender',
    status: 'status',
    created_by: 'created_by',
    updated_by: 'updated_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const ApplicantsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    experience: 'experience',
    expected_salary: 'expected_salary',
    job_id: 'job_id',
    file: 'file',
    status: 'status',
    updated_by: 'updated_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ApplicantsScalarFieldEnum = (typeof ApplicantsScalarFieldEnum)[keyof typeof ApplicantsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const rolesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    two_factor_code: 'two_factor_code',
    reset_token: 'reset_token'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const messagesOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message'
  };

  export type messagesOrderByRelevanceFieldEnum = (typeof messagesOrderByRelevanceFieldEnum)[keyof typeof messagesOrderByRelevanceFieldEnum]


  export const our_worksOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    challenges: 'challenges',
    strategy: 'strategy',
    takeaway: 'takeaway',
    image: 'image'
  };

  export type our_worksOrderByRelevanceFieldEnum = (typeof our_worksOrderByRelevanceFieldEnum)[keyof typeof our_worksOrderByRelevanceFieldEnum]


  export const jobsOrderByRelevanceFieldEnum: {
    position: 'position',
    department: 'department',
    description: 'description',
    experiences: 'experiences',
    level: 'level',
    overview: 'overview',
    job_type: 'job_type',
    salary: 'salary',
    duties: 'duties',
    requirements: 'requirements',
    gender: 'gender',
    status: 'status'
  };

  export type jobsOrderByRelevanceFieldEnum = (typeof jobsOrderByRelevanceFieldEnum)[keyof typeof jobsOrderByRelevanceFieldEnum]


  export const applicantsOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    experience: 'experience',
    expected_salary: 'expected_salary',
    file: 'file',
    status: 'status'
  };

  export type applicantsOrderByRelevanceFieldEnum = (typeof applicantsOrderByRelevanceFieldEnum)[keyof typeof applicantsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    access?: JsonFilter<"roles">
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
    users?: usersOrderByRelationAggregateInput
    _relevance?: rolesOrderByRelevanceInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    access?: JsonFilter<"roles">
    users?: UsersListRelationFilter
  }, "id" | "name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringWithAggregatesFilter<"roles"> | string
    access?: JsonWithAggregatesFilter<"roles">
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    two_factor_code?: StringNullableFilter<"users"> | string | null
    two_factor_code_expiry?: DateTimeNullableFilter<"users"> | Date | string | null
    is_two_factor_enabled?: BoolFilter<"users"> | boolean
    reset_token?: StringNullableFilter<"users"> | string | null
    reset_token_expiry?: DateTimeNullableFilter<"users"> | Date | string | null
    role_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role?: XOR<RolesNullableScalarRelationFilter, rolesWhereInput> | null
    created_Work?: Our_worksListRelationFilter
    updated_Work?: Our_worksListRelationFilter
    created_Job?: JobsListRelationFilter
    updated_Job?: JobsListRelationFilter
    updated_Applicant?: ApplicantsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    two_factor_code?: SortOrderInput | SortOrder
    two_factor_code_expiry?: SortOrderInput | SortOrder
    is_two_factor_enabled?: SortOrder
    reset_token?: SortOrderInput | SortOrder
    reset_token_expiry?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: rolesOrderByWithRelationInput
    created_Work?: our_worksOrderByRelationAggregateInput
    updated_Work?: our_worksOrderByRelationAggregateInput
    created_Job?: jobsOrderByRelationAggregateInput
    updated_Job?: jobsOrderByRelationAggregateInput
    updated_Applicant?: applicantsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    two_factor_code?: StringNullableFilter<"users"> | string | null
    two_factor_code_expiry?: DateTimeNullableFilter<"users"> | Date | string | null
    is_two_factor_enabled?: BoolFilter<"users"> | boolean
    reset_token?: StringNullableFilter<"users"> | string | null
    reset_token_expiry?: DateTimeNullableFilter<"users"> | Date | string | null
    role_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role?: XOR<RolesNullableScalarRelationFilter, rolesWhereInput> | null
    created_Work?: Our_worksListRelationFilter
    updated_Work?: Our_worksListRelationFilter
    created_Job?: JobsListRelationFilter
    updated_Job?: JobsListRelationFilter
    updated_Applicant?: ApplicantsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    two_factor_code?: SortOrderInput | SortOrder
    two_factor_code_expiry?: SortOrderInput | SortOrder
    is_two_factor_enabled?: SortOrder
    reset_token?: SortOrderInput | SortOrder
    reset_token_expiry?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    two_factor_code?: StringNullableWithAggregatesFilter<"users"> | string | null
    two_factor_code_expiry?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    is_two_factor_enabled?: BoolWithAggregatesFilter<"users"> | boolean
    reset_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    reset_token_expiry?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    role_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: IntFilter<"messages"> | number
    name?: StringFilter<"messages"> | string
    email?: StringFilter<"messages"> | string
    phone?: StringNullableFilter<"messages"> | string | null
    message?: StringFilter<"messages"> | string
    created_at?: DateTimeFilter<"messages"> | Date | string
    updated_at?: DateTimeFilter<"messages"> | Date | string
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: messagesOrderByRelevanceInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    name?: StringFilter<"messages"> | string
    email?: StringFilter<"messages"> | string
    phone?: StringNullableFilter<"messages"> | string | null
    message?: StringFilter<"messages"> | string
    created_at?: DateTimeFilter<"messages"> | Date | string
    updated_at?: DateTimeFilter<"messages"> | Date | string
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _avg?: messagesAvgOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
    _sum?: messagesSumOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messages"> | number
    name?: StringWithAggregatesFilter<"messages"> | string
    email?: StringWithAggregatesFilter<"messages"> | string
    phone?: StringNullableWithAggregatesFilter<"messages"> | string | null
    message?: StringWithAggregatesFilter<"messages"> | string
    created_at?: DateTimeWithAggregatesFilter<"messages"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"messages"> | Date | string
  }

  export type our_worksWhereInput = {
    AND?: our_worksWhereInput | our_worksWhereInput[]
    OR?: our_worksWhereInput[]
    NOT?: our_worksWhereInput | our_worksWhereInput[]
    id?: IntFilter<"our_works"> | number
    date?: DateTimeFilter<"our_works"> | Date | string
    title?: StringFilter<"our_works"> | string
    description?: StringFilter<"our_works"> | string
    challenges?: StringFilter<"our_works"> | string
    strategy?: StringFilter<"our_works"> | string
    takeaway?: StringFilter<"our_works"> | string
    image?: StringNullableFilter<"our_works"> | string | null
    created_by?: IntFilter<"our_works"> | number
    updated_by?: IntFilter<"our_works"> | number
    created_at?: DateTimeFilter<"our_works"> | Date | string
    updated_at?: DateTimeFilter<"our_works"> | Date | string
    createdBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
    updatedBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type our_worksOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    challenges?: SortOrder
    strategy?: SortOrder
    takeaway?: SortOrder
    image?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    createdBy?: usersOrderByWithRelationInput
    updatedBy?: usersOrderByWithRelationInput
    _relevance?: our_worksOrderByRelevanceInput
  }

  export type our_worksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: our_worksWhereInput | our_worksWhereInput[]
    OR?: our_worksWhereInput[]
    NOT?: our_worksWhereInput | our_worksWhereInput[]
    date?: DateTimeFilter<"our_works"> | Date | string
    title?: StringFilter<"our_works"> | string
    description?: StringFilter<"our_works"> | string
    challenges?: StringFilter<"our_works"> | string
    strategy?: StringFilter<"our_works"> | string
    takeaway?: StringFilter<"our_works"> | string
    image?: StringNullableFilter<"our_works"> | string | null
    created_by?: IntFilter<"our_works"> | number
    updated_by?: IntFilter<"our_works"> | number
    created_at?: DateTimeFilter<"our_works"> | Date | string
    updated_at?: DateTimeFilter<"our_works"> | Date | string
    createdBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
    updatedBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type our_worksOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    challenges?: SortOrder
    strategy?: SortOrder
    takeaway?: SortOrder
    image?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: our_worksCountOrderByAggregateInput
    _avg?: our_worksAvgOrderByAggregateInput
    _max?: our_worksMaxOrderByAggregateInput
    _min?: our_worksMinOrderByAggregateInput
    _sum?: our_worksSumOrderByAggregateInput
  }

  export type our_worksScalarWhereWithAggregatesInput = {
    AND?: our_worksScalarWhereWithAggregatesInput | our_worksScalarWhereWithAggregatesInput[]
    OR?: our_worksScalarWhereWithAggregatesInput[]
    NOT?: our_worksScalarWhereWithAggregatesInput | our_worksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"our_works"> | number
    date?: DateTimeWithAggregatesFilter<"our_works"> | Date | string
    title?: StringWithAggregatesFilter<"our_works"> | string
    description?: StringWithAggregatesFilter<"our_works"> | string
    challenges?: StringWithAggregatesFilter<"our_works"> | string
    strategy?: StringWithAggregatesFilter<"our_works"> | string
    takeaway?: StringWithAggregatesFilter<"our_works"> | string
    image?: StringNullableWithAggregatesFilter<"our_works"> | string | null
    created_by?: IntWithAggregatesFilter<"our_works"> | number
    updated_by?: IntWithAggregatesFilter<"our_works"> | number
    created_at?: DateTimeWithAggregatesFilter<"our_works"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"our_works"> | Date | string
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: IntFilter<"jobs"> | number
    open_date?: DateTimeFilter<"jobs"> | Date | string
    close_date?: DateTimeFilter<"jobs"> | Date | string
    position?: StringFilter<"jobs"> | string
    department?: StringFilter<"jobs"> | string
    description?: StringFilter<"jobs"> | string
    experiences?: StringFilter<"jobs"> | string
    level?: StringFilter<"jobs"> | string
    overview?: StringFilter<"jobs"> | string
    job_type?: StringFilter<"jobs"> | string
    salary?: StringFilter<"jobs"> | string
    duties?: StringFilter<"jobs"> | string
    requirements?: StringFilter<"jobs"> | string
    gender?: StringFilter<"jobs"> | string
    status?: StringFilter<"jobs"> | string
    created_by?: IntFilter<"jobs"> | number
    updated_by?: IntFilter<"jobs"> | number
    created_at?: DateTimeFilter<"jobs"> | Date | string
    updated_at?: DateTimeFilter<"jobs"> | Date | string
    createdBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
    updatedBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
    applicant?: ApplicantsListRelationFilter
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    open_date?: SortOrder
    close_date?: SortOrder
    position?: SortOrder
    department?: SortOrder
    description?: SortOrder
    experiences?: SortOrder
    level?: SortOrder
    overview?: SortOrder
    job_type?: SortOrder
    salary?: SortOrder
    duties?: SortOrder
    requirements?: SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    createdBy?: usersOrderByWithRelationInput
    updatedBy?: usersOrderByWithRelationInput
    applicant?: applicantsOrderByRelationAggregateInput
    _relevance?: jobsOrderByRelevanceInput
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    open_date?: DateTimeFilter<"jobs"> | Date | string
    close_date?: DateTimeFilter<"jobs"> | Date | string
    position?: StringFilter<"jobs"> | string
    department?: StringFilter<"jobs"> | string
    description?: StringFilter<"jobs"> | string
    experiences?: StringFilter<"jobs"> | string
    level?: StringFilter<"jobs"> | string
    overview?: StringFilter<"jobs"> | string
    job_type?: StringFilter<"jobs"> | string
    salary?: StringFilter<"jobs"> | string
    duties?: StringFilter<"jobs"> | string
    requirements?: StringFilter<"jobs"> | string
    gender?: StringFilter<"jobs"> | string
    status?: StringFilter<"jobs"> | string
    created_by?: IntFilter<"jobs"> | number
    updated_by?: IntFilter<"jobs"> | number
    created_at?: DateTimeFilter<"jobs"> | Date | string
    updated_at?: DateTimeFilter<"jobs"> | Date | string
    createdBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
    updatedBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
    applicant?: ApplicantsListRelationFilter
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    open_date?: SortOrder
    close_date?: SortOrder
    position?: SortOrder
    department?: SortOrder
    description?: SortOrder
    experiences?: SortOrder
    level?: SortOrder
    overview?: SortOrder
    job_type?: SortOrder
    salary?: SortOrder
    duties?: SortOrder
    requirements?: SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobs"> | number
    open_date?: DateTimeWithAggregatesFilter<"jobs"> | Date | string
    close_date?: DateTimeWithAggregatesFilter<"jobs"> | Date | string
    position?: StringWithAggregatesFilter<"jobs"> | string
    department?: StringWithAggregatesFilter<"jobs"> | string
    description?: StringWithAggregatesFilter<"jobs"> | string
    experiences?: StringWithAggregatesFilter<"jobs"> | string
    level?: StringWithAggregatesFilter<"jobs"> | string
    overview?: StringWithAggregatesFilter<"jobs"> | string
    job_type?: StringWithAggregatesFilter<"jobs"> | string
    salary?: StringWithAggregatesFilter<"jobs"> | string
    duties?: StringWithAggregatesFilter<"jobs"> | string
    requirements?: StringWithAggregatesFilter<"jobs"> | string
    gender?: StringWithAggregatesFilter<"jobs"> | string
    status?: StringWithAggregatesFilter<"jobs"> | string
    created_by?: IntWithAggregatesFilter<"jobs"> | number
    updated_by?: IntWithAggregatesFilter<"jobs"> | number
    created_at?: DateTimeWithAggregatesFilter<"jobs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"jobs"> | Date | string
  }

  export type applicantsWhereInput = {
    AND?: applicantsWhereInput | applicantsWhereInput[]
    OR?: applicantsWhereInput[]
    NOT?: applicantsWhereInput | applicantsWhereInput[]
    id?: IntFilter<"applicants"> | number
    name?: StringFilter<"applicants"> | string
    email?: StringFilter<"applicants"> | string
    phone?: StringFilter<"applicants"> | string
    address?: StringFilter<"applicants"> | string
    experience?: StringFilter<"applicants"> | string
    expected_salary?: StringFilter<"applicants"> | string
    job_id?: IntFilter<"applicants"> | number
    file?: StringFilter<"applicants"> | string
    status?: StringFilter<"applicants"> | string
    updated_by?: IntFilter<"applicants"> | number
    created_at?: DateTimeFilter<"applicants"> | Date | string
    updated_at?: DateTimeFilter<"applicants"> | Date | string
    job?: XOR<JobsScalarRelationFilter, jobsWhereInput>
    updatedBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type applicantsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    expected_salary?: SortOrder
    job_id?: SortOrder
    file?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    job?: jobsOrderByWithRelationInput
    updatedBy?: usersOrderByWithRelationInput
    _relevance?: applicantsOrderByRelevanceInput
  }

  export type applicantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: applicantsWhereInput | applicantsWhereInput[]
    OR?: applicantsWhereInput[]
    NOT?: applicantsWhereInput | applicantsWhereInput[]
    name?: StringFilter<"applicants"> | string
    email?: StringFilter<"applicants"> | string
    phone?: StringFilter<"applicants"> | string
    address?: StringFilter<"applicants"> | string
    experience?: StringFilter<"applicants"> | string
    expected_salary?: StringFilter<"applicants"> | string
    job_id?: IntFilter<"applicants"> | number
    file?: StringFilter<"applicants"> | string
    status?: StringFilter<"applicants"> | string
    updated_by?: IntFilter<"applicants"> | number
    created_at?: DateTimeFilter<"applicants"> | Date | string
    updated_at?: DateTimeFilter<"applicants"> | Date | string
    job?: XOR<JobsScalarRelationFilter, jobsWhereInput>
    updatedBy?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type applicantsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    expected_salary?: SortOrder
    job_id?: SortOrder
    file?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: applicantsCountOrderByAggregateInput
    _avg?: applicantsAvgOrderByAggregateInput
    _max?: applicantsMaxOrderByAggregateInput
    _min?: applicantsMinOrderByAggregateInput
    _sum?: applicantsSumOrderByAggregateInput
  }

  export type applicantsScalarWhereWithAggregatesInput = {
    AND?: applicantsScalarWhereWithAggregatesInput | applicantsScalarWhereWithAggregatesInput[]
    OR?: applicantsScalarWhereWithAggregatesInput[]
    NOT?: applicantsScalarWhereWithAggregatesInput | applicantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"applicants"> | number
    name?: StringWithAggregatesFilter<"applicants"> | string
    email?: StringWithAggregatesFilter<"applicants"> | string
    phone?: StringWithAggregatesFilter<"applicants"> | string
    address?: StringWithAggregatesFilter<"applicants"> | string
    experience?: StringWithAggregatesFilter<"applicants"> | string
    expected_salary?: StringWithAggregatesFilter<"applicants"> | string
    job_id?: IntWithAggregatesFilter<"applicants"> | number
    file?: StringWithAggregatesFilter<"applicants"> | string
    status?: StringWithAggregatesFilter<"applicants"> | string
    updated_by?: IntWithAggregatesFilter<"applicants"> | number
    created_at?: DateTimeWithAggregatesFilter<"applicants"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"applicants"> | Date | string
  }

  export type rolesCreateInput = {
    name: string
    access: JsonNullValueInput | InputJsonValue
    users?: usersCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateInput = {
    id?: number
    name: string
    access: JsonNullValueInput | InputJsonValue
    users?: usersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    users?: usersUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
    users?: usersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type rolesCreateManyInput = {
    id?: number
    name: string
    access: JsonNullValueInput | InputJsonValue
  }

  export type rolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
  }

  export type usersCreateInput = {
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: rolesCreateNestedOneWithoutUsersInput
    created_Work?: our_worksCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsCreateNestedManyWithoutUpdatedByInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    created_Work?: our_worksUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksUncheckedCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsUncheckedCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type usersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneWithoutUsersNestedInput
    created_Work?: our_worksUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_Work?: our_worksUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUncheckedUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUncheckedUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateInput = {
    name: string
    email: string
    phone?: string | null
    message: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type messagesUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    message: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type messagesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    message: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type messagesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type our_worksCreateInput = {
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    createdBy: usersCreateNestedOneWithoutCreated_WorkInput
    updatedBy: usersCreateNestedOneWithoutUpdated_WorkInput
  }

  export type our_worksUncheckedCreateInput = {
    id?: number
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type our_worksUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: usersUpdateOneRequiredWithoutCreated_WorkNestedInput
    updatedBy?: usersUpdateOneRequiredWithoutUpdated_WorkNestedInput
  }

  export type our_worksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type our_worksCreateManyInput = {
    id?: number
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type our_worksUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type our_worksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsCreateInput = {
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    createdBy: usersCreateNestedOneWithoutCreated_JobInput
    updatedBy: usersCreateNestedOneWithoutUpdated_JobInput
    applicant?: applicantsCreateNestedManyWithoutJobInput
  }

  export type jobsUncheckedCreateInput = {
    id?: number
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    applicant?: applicantsUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobsUpdateInput = {
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: usersUpdateOneRequiredWithoutCreated_JobNestedInput
    updatedBy?: usersUpdateOneRequiredWithoutUpdated_JobNestedInput
    applicant?: applicantsUpdateManyWithoutJobNestedInput
  }

  export type jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: applicantsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobsCreateManyInput = {
    id?: number
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type jobsUpdateManyMutationInput = {
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsCreateInput = {
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    file: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    job: jobsCreateNestedOneWithoutApplicantInput
    updatedBy: usersCreateNestedOneWithoutUpdated_ApplicantInput
  }

  export type applicantsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    job_id: number
    file: string
    status?: string
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type applicantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: jobsUpdateOneRequiredWithoutApplicantNestedInput
    updatedBy?: usersUpdateOneRequiredWithoutUpdated_ApplicantNestedInput
  }

  export type applicantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    job_id?: IntFieldUpdateOperationsInput | number
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    job_id: number
    file: string
    status?: string
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type applicantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    job_id?: IntFieldUpdateOperationsInput | number
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesOrderByRelevanceInput = {
    fields: rolesOrderByRelevanceFieldEnum | rolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    access?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RolesNullableScalarRelationFilter = {
    is?: rolesWhereInput | null
    isNot?: rolesWhereInput | null
  }

  export type Our_worksListRelationFilter = {
    every?: our_worksWhereInput
    some?: our_worksWhereInput
    none?: our_worksWhereInput
  }

  export type JobsListRelationFilter = {
    every?: jobsWhereInput
    some?: jobsWhereInput
    none?: jobsWhereInput
  }

  export type ApplicantsListRelationFilter = {
    every?: applicantsWhereInput
    some?: applicantsWhereInput
    none?: applicantsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type our_worksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type applicantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    two_factor_code?: SortOrder
    two_factor_code_expiry?: SortOrder
    is_two_factor_enabled?: SortOrder
    reset_token?: SortOrder
    reset_token_expiry?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    two_factor_code?: SortOrder
    two_factor_code_expiry?: SortOrder
    is_two_factor_enabled?: SortOrder
    reset_token?: SortOrder
    reset_token_expiry?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    two_factor_code?: SortOrder
    two_factor_code_expiry?: SortOrder
    is_two_factor_enabled?: SortOrder
    reset_token?: SortOrder
    reset_token_expiry?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type messagesOrderByRelevanceInput = {
    fields: messagesOrderByRelevanceFieldEnum | messagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type messagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type messagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type our_worksOrderByRelevanceInput = {
    fields: our_worksOrderByRelevanceFieldEnum | our_worksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type our_worksCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    challenges?: SortOrder
    strategy?: SortOrder
    takeaway?: SortOrder
    image?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type our_worksAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type our_worksMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    challenges?: SortOrder
    strategy?: SortOrder
    takeaway?: SortOrder
    image?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type our_worksMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    title?: SortOrder
    description?: SortOrder
    challenges?: SortOrder
    strategy?: SortOrder
    takeaway?: SortOrder
    image?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type our_worksSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type jobsOrderByRelevanceInput = {
    fields: jobsOrderByRelevanceFieldEnum | jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    open_date?: SortOrder
    close_date?: SortOrder
    position?: SortOrder
    department?: SortOrder
    description?: SortOrder
    experiences?: SortOrder
    level?: SortOrder
    overview?: SortOrder
    job_type?: SortOrder
    salary?: SortOrder
    duties?: SortOrder
    requirements?: SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    open_date?: SortOrder
    close_date?: SortOrder
    position?: SortOrder
    department?: SortOrder
    description?: SortOrder
    experiences?: SortOrder
    level?: SortOrder
    overview?: SortOrder
    job_type?: SortOrder
    salary?: SortOrder
    duties?: SortOrder
    requirements?: SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    open_date?: SortOrder
    close_date?: SortOrder
    position?: SortOrder
    department?: SortOrder
    description?: SortOrder
    experiences?: SortOrder
    level?: SortOrder
    overview?: SortOrder
    job_type?: SortOrder
    salary?: SortOrder
    duties?: SortOrder
    requirements?: SortOrder
    gender?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type JobsScalarRelationFilter = {
    is?: jobsWhereInput
    isNot?: jobsWhereInput
  }

  export type applicantsOrderByRelevanceInput = {
    fields: applicantsOrderByRelevanceFieldEnum | applicantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type applicantsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    expected_salary?: SortOrder
    job_id?: SortOrder
    file?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type applicantsAvgOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    updated_by?: SortOrder
  }

  export type applicantsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    expected_salary?: SortOrder
    job_id?: SortOrder
    file?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type applicantsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    experience?: SortOrder
    expected_salary?: SortOrder
    job_id?: SortOrder
    file?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type applicantsSumOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    updated_by?: SortOrder
  }

  export type usersCreateNestedManyWithoutRoleInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRoleInput | usersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRoleInput | usersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRoleInput | usersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRoleInput | usersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRoleInput | usersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRoleInput | usersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type our_worksCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<our_worksCreateWithoutCreatedByInput, our_worksUncheckedCreateWithoutCreatedByInput> | our_worksCreateWithoutCreatedByInput[] | our_worksUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: our_worksCreateOrConnectWithoutCreatedByInput | our_worksCreateOrConnectWithoutCreatedByInput[]
    createMany?: our_worksCreateManyCreatedByInputEnvelope
    connect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
  }

  export type our_worksCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<our_worksCreateWithoutUpdatedByInput, our_worksUncheckedCreateWithoutUpdatedByInput> | our_worksCreateWithoutUpdatedByInput[] | our_worksUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: our_worksCreateOrConnectWithoutUpdatedByInput | our_worksCreateOrConnectWithoutUpdatedByInput[]
    createMany?: our_worksCreateManyUpdatedByInputEnvelope
    connect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
  }

  export type jobsCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<jobsCreateWithoutCreatedByInput, jobsUncheckedCreateWithoutCreatedByInput> | jobsCreateWithoutCreatedByInput[] | jobsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutCreatedByInput | jobsCreateOrConnectWithoutCreatedByInput[]
    createMany?: jobsCreateManyCreatedByInputEnvelope
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
  }

  export type jobsCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<jobsCreateWithoutUpdatedByInput, jobsUncheckedCreateWithoutUpdatedByInput> | jobsCreateWithoutUpdatedByInput[] | jobsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutUpdatedByInput | jobsCreateOrConnectWithoutUpdatedByInput[]
    createMany?: jobsCreateManyUpdatedByInputEnvelope
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
  }

  export type applicantsCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<applicantsCreateWithoutUpdatedByInput, applicantsUncheckedCreateWithoutUpdatedByInput> | applicantsCreateWithoutUpdatedByInput[] | applicantsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutUpdatedByInput | applicantsCreateOrConnectWithoutUpdatedByInput[]
    createMany?: applicantsCreateManyUpdatedByInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type our_worksUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<our_worksCreateWithoutCreatedByInput, our_worksUncheckedCreateWithoutCreatedByInput> | our_worksCreateWithoutCreatedByInput[] | our_worksUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: our_worksCreateOrConnectWithoutCreatedByInput | our_worksCreateOrConnectWithoutCreatedByInput[]
    createMany?: our_worksCreateManyCreatedByInputEnvelope
    connect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
  }

  export type our_worksUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<our_worksCreateWithoutUpdatedByInput, our_worksUncheckedCreateWithoutUpdatedByInput> | our_worksCreateWithoutUpdatedByInput[] | our_worksUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: our_worksCreateOrConnectWithoutUpdatedByInput | our_worksCreateOrConnectWithoutUpdatedByInput[]
    createMany?: our_worksCreateManyUpdatedByInputEnvelope
    connect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
  }

  export type jobsUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<jobsCreateWithoutCreatedByInput, jobsUncheckedCreateWithoutCreatedByInput> | jobsCreateWithoutCreatedByInput[] | jobsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutCreatedByInput | jobsCreateOrConnectWithoutCreatedByInput[]
    createMany?: jobsCreateManyCreatedByInputEnvelope
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
  }

  export type jobsUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<jobsCreateWithoutUpdatedByInput, jobsUncheckedCreateWithoutUpdatedByInput> | jobsCreateWithoutUpdatedByInput[] | jobsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutUpdatedByInput | jobsCreateOrConnectWithoutUpdatedByInput[]
    createMany?: jobsCreateManyUpdatedByInputEnvelope
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
  }

  export type applicantsUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<applicantsCreateWithoutUpdatedByInput, applicantsUncheckedCreateWithoutUpdatedByInput> | applicantsCreateWithoutUpdatedByInput[] | applicantsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutUpdatedByInput | applicantsCreateOrConnectWithoutUpdatedByInput[]
    createMany?: applicantsCreateManyUpdatedByInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type rolesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    disconnect?: rolesWhereInput | boolean
    delete?: rolesWhereInput | boolean
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type our_worksUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<our_worksCreateWithoutCreatedByInput, our_worksUncheckedCreateWithoutCreatedByInput> | our_worksCreateWithoutCreatedByInput[] | our_worksUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: our_worksCreateOrConnectWithoutCreatedByInput | our_worksCreateOrConnectWithoutCreatedByInput[]
    upsert?: our_worksUpsertWithWhereUniqueWithoutCreatedByInput | our_worksUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: our_worksCreateManyCreatedByInputEnvelope
    set?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    disconnect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    delete?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    connect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    update?: our_worksUpdateWithWhereUniqueWithoutCreatedByInput | our_worksUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: our_worksUpdateManyWithWhereWithoutCreatedByInput | our_worksUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: our_worksScalarWhereInput | our_worksScalarWhereInput[]
  }

  export type our_worksUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<our_worksCreateWithoutUpdatedByInput, our_worksUncheckedCreateWithoutUpdatedByInput> | our_worksCreateWithoutUpdatedByInput[] | our_worksUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: our_worksCreateOrConnectWithoutUpdatedByInput | our_worksCreateOrConnectWithoutUpdatedByInput[]
    upsert?: our_worksUpsertWithWhereUniqueWithoutUpdatedByInput | our_worksUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: our_worksCreateManyUpdatedByInputEnvelope
    set?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    disconnect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    delete?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    connect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    update?: our_worksUpdateWithWhereUniqueWithoutUpdatedByInput | our_worksUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: our_worksUpdateManyWithWhereWithoutUpdatedByInput | our_worksUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: our_worksScalarWhereInput | our_worksScalarWhereInput[]
  }

  export type jobsUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<jobsCreateWithoutCreatedByInput, jobsUncheckedCreateWithoutCreatedByInput> | jobsCreateWithoutCreatedByInput[] | jobsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutCreatedByInput | jobsCreateOrConnectWithoutCreatedByInput[]
    upsert?: jobsUpsertWithWhereUniqueWithoutCreatedByInput | jobsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: jobsCreateManyCreatedByInputEnvelope
    set?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    disconnect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    delete?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    update?: jobsUpdateWithWhereUniqueWithoutCreatedByInput | jobsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: jobsUpdateManyWithWhereWithoutCreatedByInput | jobsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: jobsScalarWhereInput | jobsScalarWhereInput[]
  }

  export type jobsUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<jobsCreateWithoutUpdatedByInput, jobsUncheckedCreateWithoutUpdatedByInput> | jobsCreateWithoutUpdatedByInput[] | jobsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutUpdatedByInput | jobsCreateOrConnectWithoutUpdatedByInput[]
    upsert?: jobsUpsertWithWhereUniqueWithoutUpdatedByInput | jobsUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: jobsCreateManyUpdatedByInputEnvelope
    set?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    disconnect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    delete?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    update?: jobsUpdateWithWhereUniqueWithoutUpdatedByInput | jobsUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: jobsUpdateManyWithWhereWithoutUpdatedByInput | jobsUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: jobsScalarWhereInput | jobsScalarWhereInput[]
  }

  export type applicantsUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<applicantsCreateWithoutUpdatedByInput, applicantsUncheckedCreateWithoutUpdatedByInput> | applicantsCreateWithoutUpdatedByInput[] | applicantsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutUpdatedByInput | applicantsCreateOrConnectWithoutUpdatedByInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutUpdatedByInput | applicantsUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: applicantsCreateManyUpdatedByInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutUpdatedByInput | applicantsUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutUpdatedByInput | applicantsUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type our_worksUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<our_worksCreateWithoutCreatedByInput, our_worksUncheckedCreateWithoutCreatedByInput> | our_worksCreateWithoutCreatedByInput[] | our_worksUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: our_worksCreateOrConnectWithoutCreatedByInput | our_worksCreateOrConnectWithoutCreatedByInput[]
    upsert?: our_worksUpsertWithWhereUniqueWithoutCreatedByInput | our_worksUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: our_worksCreateManyCreatedByInputEnvelope
    set?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    disconnect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    delete?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    connect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    update?: our_worksUpdateWithWhereUniqueWithoutCreatedByInput | our_worksUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: our_worksUpdateManyWithWhereWithoutCreatedByInput | our_worksUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: our_worksScalarWhereInput | our_worksScalarWhereInput[]
  }

  export type our_worksUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<our_worksCreateWithoutUpdatedByInput, our_worksUncheckedCreateWithoutUpdatedByInput> | our_worksCreateWithoutUpdatedByInput[] | our_worksUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: our_worksCreateOrConnectWithoutUpdatedByInput | our_worksCreateOrConnectWithoutUpdatedByInput[]
    upsert?: our_worksUpsertWithWhereUniqueWithoutUpdatedByInput | our_worksUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: our_worksCreateManyUpdatedByInputEnvelope
    set?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    disconnect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    delete?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    connect?: our_worksWhereUniqueInput | our_worksWhereUniqueInput[]
    update?: our_worksUpdateWithWhereUniqueWithoutUpdatedByInput | our_worksUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: our_worksUpdateManyWithWhereWithoutUpdatedByInput | our_worksUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: our_worksScalarWhereInput | our_worksScalarWhereInput[]
  }

  export type jobsUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<jobsCreateWithoutCreatedByInput, jobsUncheckedCreateWithoutCreatedByInput> | jobsCreateWithoutCreatedByInput[] | jobsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutCreatedByInput | jobsCreateOrConnectWithoutCreatedByInput[]
    upsert?: jobsUpsertWithWhereUniqueWithoutCreatedByInput | jobsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: jobsCreateManyCreatedByInputEnvelope
    set?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    disconnect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    delete?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    update?: jobsUpdateWithWhereUniqueWithoutCreatedByInput | jobsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: jobsUpdateManyWithWhereWithoutCreatedByInput | jobsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: jobsScalarWhereInput | jobsScalarWhereInput[]
  }

  export type jobsUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<jobsCreateWithoutUpdatedByInput, jobsUncheckedCreateWithoutUpdatedByInput> | jobsCreateWithoutUpdatedByInput[] | jobsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutUpdatedByInput | jobsCreateOrConnectWithoutUpdatedByInput[]
    upsert?: jobsUpsertWithWhereUniqueWithoutUpdatedByInput | jobsUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: jobsCreateManyUpdatedByInputEnvelope
    set?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    disconnect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    delete?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    update?: jobsUpdateWithWhereUniqueWithoutUpdatedByInput | jobsUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: jobsUpdateManyWithWhereWithoutUpdatedByInput | jobsUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: jobsScalarWhereInput | jobsScalarWhereInput[]
  }

  export type applicantsUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<applicantsCreateWithoutUpdatedByInput, applicantsUncheckedCreateWithoutUpdatedByInput> | applicantsCreateWithoutUpdatedByInput[] | applicantsUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutUpdatedByInput | applicantsCreateOrConnectWithoutUpdatedByInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutUpdatedByInput | applicantsUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: applicantsCreateManyUpdatedByInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutUpdatedByInput | applicantsUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutUpdatedByInput | applicantsUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutCreated_WorkInput = {
    create?: XOR<usersCreateWithoutCreated_WorkInput, usersUncheckedCreateWithoutCreated_WorkInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreated_WorkInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUpdated_WorkInput = {
    create?: XOR<usersCreateWithoutUpdated_WorkInput, usersUncheckedCreateWithoutUpdated_WorkInput>
    connectOrCreate?: usersCreateOrConnectWithoutUpdated_WorkInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutCreated_WorkNestedInput = {
    create?: XOR<usersCreateWithoutCreated_WorkInput, usersUncheckedCreateWithoutCreated_WorkInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreated_WorkInput
    upsert?: usersUpsertWithoutCreated_WorkInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCreated_WorkInput, usersUpdateWithoutCreated_WorkInput>, usersUncheckedUpdateWithoutCreated_WorkInput>
  }

  export type usersUpdateOneRequiredWithoutUpdated_WorkNestedInput = {
    create?: XOR<usersCreateWithoutUpdated_WorkInput, usersUncheckedCreateWithoutUpdated_WorkInput>
    connectOrCreate?: usersCreateOrConnectWithoutUpdated_WorkInput
    upsert?: usersUpsertWithoutUpdated_WorkInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUpdated_WorkInput, usersUpdateWithoutUpdated_WorkInput>, usersUncheckedUpdateWithoutUpdated_WorkInput>
  }

  export type usersCreateNestedOneWithoutCreated_JobInput = {
    create?: XOR<usersCreateWithoutCreated_JobInput, usersUncheckedCreateWithoutCreated_JobInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreated_JobInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUpdated_JobInput = {
    create?: XOR<usersCreateWithoutUpdated_JobInput, usersUncheckedCreateWithoutUpdated_JobInput>
    connectOrCreate?: usersCreateOrConnectWithoutUpdated_JobInput
    connect?: usersWhereUniqueInput
  }

  export type applicantsCreateNestedManyWithoutJobInput = {
    create?: XOR<applicantsCreateWithoutJobInput, applicantsUncheckedCreateWithoutJobInput> | applicantsCreateWithoutJobInput[] | applicantsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutJobInput | applicantsCreateOrConnectWithoutJobInput[]
    createMany?: applicantsCreateManyJobInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type applicantsUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<applicantsCreateWithoutJobInput, applicantsUncheckedCreateWithoutJobInput> | applicantsCreateWithoutJobInput[] | applicantsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutJobInput | applicantsCreateOrConnectWithoutJobInput[]
    createMany?: applicantsCreateManyJobInputEnvelope
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutCreated_JobNestedInput = {
    create?: XOR<usersCreateWithoutCreated_JobInput, usersUncheckedCreateWithoutCreated_JobInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreated_JobInput
    upsert?: usersUpsertWithoutCreated_JobInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCreated_JobInput, usersUpdateWithoutCreated_JobInput>, usersUncheckedUpdateWithoutCreated_JobInput>
  }

  export type usersUpdateOneRequiredWithoutUpdated_JobNestedInput = {
    create?: XOR<usersCreateWithoutUpdated_JobInput, usersUncheckedCreateWithoutUpdated_JobInput>
    connectOrCreate?: usersCreateOrConnectWithoutUpdated_JobInput
    upsert?: usersUpsertWithoutUpdated_JobInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUpdated_JobInput, usersUpdateWithoutUpdated_JobInput>, usersUncheckedUpdateWithoutUpdated_JobInput>
  }

  export type applicantsUpdateManyWithoutJobNestedInput = {
    create?: XOR<applicantsCreateWithoutJobInput, applicantsUncheckedCreateWithoutJobInput> | applicantsCreateWithoutJobInput[] | applicantsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutJobInput | applicantsCreateOrConnectWithoutJobInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutJobInput | applicantsUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: applicantsCreateManyJobInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutJobInput | applicantsUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutJobInput | applicantsUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type applicantsUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<applicantsCreateWithoutJobInput, applicantsUncheckedCreateWithoutJobInput> | applicantsCreateWithoutJobInput[] | applicantsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: applicantsCreateOrConnectWithoutJobInput | applicantsCreateOrConnectWithoutJobInput[]
    upsert?: applicantsUpsertWithWhereUniqueWithoutJobInput | applicantsUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: applicantsCreateManyJobInputEnvelope
    set?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    disconnect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    delete?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    connect?: applicantsWhereUniqueInput | applicantsWhereUniqueInput[]
    update?: applicantsUpdateWithWhereUniqueWithoutJobInput | applicantsUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: applicantsUpdateManyWithWhereWithoutJobInput | applicantsUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
  }

  export type jobsCreateNestedOneWithoutApplicantInput = {
    create?: XOR<jobsCreateWithoutApplicantInput, jobsUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: jobsCreateOrConnectWithoutApplicantInput
    connect?: jobsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUpdated_ApplicantInput = {
    create?: XOR<usersCreateWithoutUpdated_ApplicantInput, usersUncheckedCreateWithoutUpdated_ApplicantInput>
    connectOrCreate?: usersCreateOrConnectWithoutUpdated_ApplicantInput
    connect?: usersWhereUniqueInput
  }

  export type jobsUpdateOneRequiredWithoutApplicantNestedInput = {
    create?: XOR<jobsCreateWithoutApplicantInput, jobsUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: jobsCreateOrConnectWithoutApplicantInput
    upsert?: jobsUpsertWithoutApplicantInput
    connect?: jobsWhereUniqueInput
    update?: XOR<XOR<jobsUpdateToOneWithWhereWithoutApplicantInput, jobsUpdateWithoutApplicantInput>, jobsUncheckedUpdateWithoutApplicantInput>
  }

  export type usersUpdateOneRequiredWithoutUpdated_ApplicantNestedInput = {
    create?: XOR<usersCreateWithoutUpdated_ApplicantInput, usersUncheckedCreateWithoutUpdated_ApplicantInput>
    connectOrCreate?: usersCreateOrConnectWithoutUpdated_ApplicantInput
    upsert?: usersUpsertWithoutUpdated_ApplicantInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUpdated_ApplicantInput, usersUpdateWithoutUpdated_ApplicantInput>, usersUncheckedUpdateWithoutUpdated_ApplicantInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCreateWithoutRoleInput = {
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_Work?: our_worksCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsCreateNestedManyWithoutUpdatedByInput
  }

  export type usersUncheckedCreateWithoutRoleInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_Work?: our_worksUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksUncheckedCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsUncheckedCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type usersCreateOrConnectWithoutRoleInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
  }

  export type usersCreateManyRoleInputEnvelope = {
    data: usersCreateManyRoleInput | usersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRoleInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRoleInput, usersUncheckedUpdateWithoutRoleInput>
    create: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRoleInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRoleInput, usersUncheckedUpdateWithoutRoleInput>
  }

  export type usersUpdateManyWithWhereWithoutRoleInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRoleInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    two_factor_code?: StringNullableFilter<"users"> | string | null
    two_factor_code_expiry?: DateTimeNullableFilter<"users"> | Date | string | null
    is_two_factor_enabled?: BoolFilter<"users"> | boolean
    reset_token?: StringNullableFilter<"users"> | string | null
    reset_token_expiry?: DateTimeNullableFilter<"users"> | Date | string | null
    role_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type rolesCreateWithoutUsersInput = {
    name: string
    access: JsonNullValueInput | InputJsonValue
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    access: JsonNullValueInput | InputJsonValue
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type our_worksCreateWithoutCreatedByInput = {
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    updatedBy: usersCreateNestedOneWithoutUpdated_WorkInput
  }

  export type our_worksUncheckedCreateWithoutCreatedByInput = {
    id?: number
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type our_worksCreateOrConnectWithoutCreatedByInput = {
    where: our_worksWhereUniqueInput
    create: XOR<our_worksCreateWithoutCreatedByInput, our_worksUncheckedCreateWithoutCreatedByInput>
  }

  export type our_worksCreateManyCreatedByInputEnvelope = {
    data: our_worksCreateManyCreatedByInput | our_worksCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type our_worksCreateWithoutUpdatedByInput = {
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    createdBy: usersCreateNestedOneWithoutCreated_WorkInput
  }

  export type our_worksUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    created_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type our_worksCreateOrConnectWithoutUpdatedByInput = {
    where: our_worksWhereUniqueInput
    create: XOR<our_worksCreateWithoutUpdatedByInput, our_worksUncheckedCreateWithoutUpdatedByInput>
  }

  export type our_worksCreateManyUpdatedByInputEnvelope = {
    data: our_worksCreateManyUpdatedByInput | our_worksCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type jobsCreateWithoutCreatedByInput = {
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    updatedBy: usersCreateNestedOneWithoutUpdated_JobInput
    applicant?: applicantsCreateNestedManyWithoutJobInput
  }

  export type jobsUncheckedCreateWithoutCreatedByInput = {
    id?: number
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
    applicant?: applicantsUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobsCreateOrConnectWithoutCreatedByInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutCreatedByInput, jobsUncheckedCreateWithoutCreatedByInput>
  }

  export type jobsCreateManyCreatedByInputEnvelope = {
    data: jobsCreateManyCreatedByInput | jobsCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type jobsCreateWithoutUpdatedByInput = {
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    createdBy: usersCreateNestedOneWithoutCreated_JobInput
    applicant?: applicantsCreateNestedManyWithoutJobInput
  }

  export type jobsUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_by: number
    created_at?: Date | string
    updated_at?: Date | string
    applicant?: applicantsUncheckedCreateNestedManyWithoutJobInput
  }

  export type jobsCreateOrConnectWithoutUpdatedByInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutUpdatedByInput, jobsUncheckedCreateWithoutUpdatedByInput>
  }

  export type jobsCreateManyUpdatedByInputEnvelope = {
    data: jobsCreateManyUpdatedByInput | jobsCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type applicantsCreateWithoutUpdatedByInput = {
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    file: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    job: jobsCreateNestedOneWithoutApplicantInput
  }

  export type applicantsUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    job_id: number
    file: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type applicantsCreateOrConnectWithoutUpdatedByInput = {
    where: applicantsWhereUniqueInput
    create: XOR<applicantsCreateWithoutUpdatedByInput, applicantsUncheckedCreateWithoutUpdatedByInput>
  }

  export type applicantsCreateManyUpdatedByInputEnvelope = {
    data: applicantsCreateManyUpdatedByInput | applicantsCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    access?: JsonNullValueInput | InputJsonValue
  }

  export type our_worksUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: our_worksWhereUniqueInput
    update: XOR<our_worksUpdateWithoutCreatedByInput, our_worksUncheckedUpdateWithoutCreatedByInput>
    create: XOR<our_worksCreateWithoutCreatedByInput, our_worksUncheckedCreateWithoutCreatedByInput>
  }

  export type our_worksUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: our_worksWhereUniqueInput
    data: XOR<our_worksUpdateWithoutCreatedByInput, our_worksUncheckedUpdateWithoutCreatedByInput>
  }

  export type our_worksUpdateManyWithWhereWithoutCreatedByInput = {
    where: our_worksScalarWhereInput
    data: XOR<our_worksUpdateManyMutationInput, our_worksUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type our_worksScalarWhereInput = {
    AND?: our_worksScalarWhereInput | our_worksScalarWhereInput[]
    OR?: our_worksScalarWhereInput[]
    NOT?: our_worksScalarWhereInput | our_worksScalarWhereInput[]
    id?: IntFilter<"our_works"> | number
    date?: DateTimeFilter<"our_works"> | Date | string
    title?: StringFilter<"our_works"> | string
    description?: StringFilter<"our_works"> | string
    challenges?: StringFilter<"our_works"> | string
    strategy?: StringFilter<"our_works"> | string
    takeaway?: StringFilter<"our_works"> | string
    image?: StringNullableFilter<"our_works"> | string | null
    created_by?: IntFilter<"our_works"> | number
    updated_by?: IntFilter<"our_works"> | number
    created_at?: DateTimeFilter<"our_works"> | Date | string
    updated_at?: DateTimeFilter<"our_works"> | Date | string
  }

  export type our_worksUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: our_worksWhereUniqueInput
    update: XOR<our_worksUpdateWithoutUpdatedByInput, our_worksUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<our_worksCreateWithoutUpdatedByInput, our_worksUncheckedCreateWithoutUpdatedByInput>
  }

  export type our_worksUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: our_worksWhereUniqueInput
    data: XOR<our_worksUpdateWithoutUpdatedByInput, our_worksUncheckedUpdateWithoutUpdatedByInput>
  }

  export type our_worksUpdateManyWithWhereWithoutUpdatedByInput = {
    where: our_worksScalarWhereInput
    data: XOR<our_worksUpdateManyMutationInput, our_worksUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type jobsUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: jobsWhereUniqueInput
    update: XOR<jobsUpdateWithoutCreatedByInput, jobsUncheckedUpdateWithoutCreatedByInput>
    create: XOR<jobsCreateWithoutCreatedByInput, jobsUncheckedCreateWithoutCreatedByInput>
  }

  export type jobsUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: jobsWhereUniqueInput
    data: XOR<jobsUpdateWithoutCreatedByInput, jobsUncheckedUpdateWithoutCreatedByInput>
  }

  export type jobsUpdateManyWithWhereWithoutCreatedByInput = {
    where: jobsScalarWhereInput
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type jobsScalarWhereInput = {
    AND?: jobsScalarWhereInput | jobsScalarWhereInput[]
    OR?: jobsScalarWhereInput[]
    NOT?: jobsScalarWhereInput | jobsScalarWhereInput[]
    id?: IntFilter<"jobs"> | number
    open_date?: DateTimeFilter<"jobs"> | Date | string
    close_date?: DateTimeFilter<"jobs"> | Date | string
    position?: StringFilter<"jobs"> | string
    department?: StringFilter<"jobs"> | string
    description?: StringFilter<"jobs"> | string
    experiences?: StringFilter<"jobs"> | string
    level?: StringFilter<"jobs"> | string
    overview?: StringFilter<"jobs"> | string
    job_type?: StringFilter<"jobs"> | string
    salary?: StringFilter<"jobs"> | string
    duties?: StringFilter<"jobs"> | string
    requirements?: StringFilter<"jobs"> | string
    gender?: StringFilter<"jobs"> | string
    status?: StringFilter<"jobs"> | string
    created_by?: IntFilter<"jobs"> | number
    updated_by?: IntFilter<"jobs"> | number
    created_at?: DateTimeFilter<"jobs"> | Date | string
    updated_at?: DateTimeFilter<"jobs"> | Date | string
  }

  export type jobsUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: jobsWhereUniqueInput
    update: XOR<jobsUpdateWithoutUpdatedByInput, jobsUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<jobsCreateWithoutUpdatedByInput, jobsUncheckedCreateWithoutUpdatedByInput>
  }

  export type jobsUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: jobsWhereUniqueInput
    data: XOR<jobsUpdateWithoutUpdatedByInput, jobsUncheckedUpdateWithoutUpdatedByInput>
  }

  export type jobsUpdateManyWithWhereWithoutUpdatedByInput = {
    where: jobsScalarWhereInput
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type applicantsUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: applicantsWhereUniqueInput
    update: XOR<applicantsUpdateWithoutUpdatedByInput, applicantsUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<applicantsCreateWithoutUpdatedByInput, applicantsUncheckedCreateWithoutUpdatedByInput>
  }

  export type applicantsUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: applicantsWhereUniqueInput
    data: XOR<applicantsUpdateWithoutUpdatedByInput, applicantsUncheckedUpdateWithoutUpdatedByInput>
  }

  export type applicantsUpdateManyWithWhereWithoutUpdatedByInput = {
    where: applicantsScalarWhereInput
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type applicantsScalarWhereInput = {
    AND?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
    OR?: applicantsScalarWhereInput[]
    NOT?: applicantsScalarWhereInput | applicantsScalarWhereInput[]
    id?: IntFilter<"applicants"> | number
    name?: StringFilter<"applicants"> | string
    email?: StringFilter<"applicants"> | string
    phone?: StringFilter<"applicants"> | string
    address?: StringFilter<"applicants"> | string
    experience?: StringFilter<"applicants"> | string
    expected_salary?: StringFilter<"applicants"> | string
    job_id?: IntFilter<"applicants"> | number
    file?: StringFilter<"applicants"> | string
    status?: StringFilter<"applicants"> | string
    updated_by?: IntFilter<"applicants"> | number
    created_at?: DateTimeFilter<"applicants"> | Date | string
    updated_at?: DateTimeFilter<"applicants"> | Date | string
  }

  export type usersCreateWithoutCreated_WorkInput = {
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: rolesCreateNestedOneWithoutUsersInput
    updated_Work?: our_worksCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsCreateNestedManyWithoutUpdatedByInput
  }

  export type usersUncheckedCreateWithoutCreated_WorkInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    updated_Work?: our_worksUncheckedCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsUncheckedCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type usersCreateOrConnectWithoutCreated_WorkInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCreated_WorkInput, usersUncheckedCreateWithoutCreated_WorkInput>
  }

  export type usersCreateWithoutUpdated_WorkInput = {
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: rolesCreateNestedOneWithoutUsersInput
    created_Work?: our_worksCreateNestedManyWithoutCreatedByInput
    created_Job?: jobsCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsCreateNestedManyWithoutUpdatedByInput
  }

  export type usersUncheckedCreateWithoutUpdated_WorkInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    created_Work?: our_worksUncheckedCreateNestedManyWithoutCreatedByInput
    created_Job?: jobsUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsUncheckedCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type usersCreateOrConnectWithoutUpdated_WorkInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUpdated_WorkInput, usersUncheckedCreateWithoutUpdated_WorkInput>
  }

  export type usersUpsertWithoutCreated_WorkInput = {
    update: XOR<usersUpdateWithoutCreated_WorkInput, usersUncheckedUpdateWithoutCreated_WorkInput>
    create: XOR<usersCreateWithoutCreated_WorkInput, usersUncheckedCreateWithoutCreated_WorkInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCreated_WorkInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCreated_WorkInput, usersUncheckedUpdateWithoutCreated_WorkInput>
  }

  export type usersUpdateWithoutCreated_WorkInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneWithoutUsersNestedInput
    updated_Work?: our_worksUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutCreated_WorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_Work?: our_worksUncheckedUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUncheckedUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUpsertWithoutUpdated_WorkInput = {
    update: XOR<usersUpdateWithoutUpdated_WorkInput, usersUncheckedUpdateWithoutUpdated_WorkInput>
    create: XOR<usersCreateWithoutUpdated_WorkInput, usersUncheckedCreateWithoutUpdated_WorkInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUpdated_WorkInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUpdated_WorkInput, usersUncheckedUpdateWithoutUpdated_WorkInput>
  }

  export type usersUpdateWithoutUpdated_WorkInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneWithoutUsersNestedInput
    created_Work?: our_worksUpdateManyWithoutCreatedByNestedInput
    created_Job?: jobsUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutUpdated_WorkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_Work?: our_worksUncheckedUpdateManyWithoutCreatedByNestedInput
    created_Job?: jobsUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUncheckedUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersCreateWithoutCreated_JobInput = {
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: rolesCreateNestedOneWithoutUsersInput
    created_Work?: our_worksCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksCreateNestedManyWithoutUpdatedByInput
    updated_Job?: jobsCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsCreateNestedManyWithoutUpdatedByInput
  }

  export type usersUncheckedCreateWithoutCreated_JobInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    created_Work?: our_worksUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksUncheckedCreateNestedManyWithoutUpdatedByInput
    updated_Job?: jobsUncheckedCreateNestedManyWithoutUpdatedByInput
    updated_Applicant?: applicantsUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type usersCreateOrConnectWithoutCreated_JobInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCreated_JobInput, usersUncheckedCreateWithoutCreated_JobInput>
  }

  export type usersCreateWithoutUpdated_JobInput = {
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: rolesCreateNestedOneWithoutUsersInput
    created_Work?: our_worksCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsCreateNestedManyWithoutCreatedByInput
    updated_Applicant?: applicantsCreateNestedManyWithoutUpdatedByInput
  }

  export type usersUncheckedCreateWithoutUpdated_JobInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    created_Work?: our_worksUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksUncheckedCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Applicant?: applicantsUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type usersCreateOrConnectWithoutUpdated_JobInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUpdated_JobInput, usersUncheckedCreateWithoutUpdated_JobInput>
  }

  export type applicantsCreateWithoutJobInput = {
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    file: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    updatedBy: usersCreateNestedOneWithoutUpdated_ApplicantInput
  }

  export type applicantsUncheckedCreateWithoutJobInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    file: string
    status?: string
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type applicantsCreateOrConnectWithoutJobInput = {
    where: applicantsWhereUniqueInput
    create: XOR<applicantsCreateWithoutJobInput, applicantsUncheckedCreateWithoutJobInput>
  }

  export type applicantsCreateManyJobInputEnvelope = {
    data: applicantsCreateManyJobInput | applicantsCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCreated_JobInput = {
    update: XOR<usersUpdateWithoutCreated_JobInput, usersUncheckedUpdateWithoutCreated_JobInput>
    create: XOR<usersCreateWithoutCreated_JobInput, usersUncheckedCreateWithoutCreated_JobInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCreated_JobInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCreated_JobInput, usersUncheckedUpdateWithoutCreated_JobInput>
  }

  export type usersUpdateWithoutCreated_JobInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneWithoutUsersNestedInput
    created_Work?: our_worksUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUpdateManyWithoutUpdatedByNestedInput
    updated_Job?: jobsUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutCreated_JobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_Work?: our_worksUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUncheckedUpdateManyWithoutUpdatedByNestedInput
    updated_Job?: jobsUncheckedUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUpsertWithoutUpdated_JobInput = {
    update: XOR<usersUpdateWithoutUpdated_JobInput, usersUncheckedUpdateWithoutUpdated_JobInput>
    create: XOR<usersCreateWithoutUpdated_JobInput, usersUncheckedCreateWithoutUpdated_JobInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUpdated_JobInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUpdated_JobInput, usersUncheckedUpdateWithoutUpdated_JobInput>
  }

  export type usersUpdateWithoutUpdated_JobInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneWithoutUsersNestedInput
    created_Work?: our_worksUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUpdateManyWithoutCreatedByNestedInput
    updated_Applicant?: applicantsUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutUpdated_JobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_Work?: our_worksUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUncheckedUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Applicant?: applicantsUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type applicantsUpsertWithWhereUniqueWithoutJobInput = {
    where: applicantsWhereUniqueInput
    update: XOR<applicantsUpdateWithoutJobInput, applicantsUncheckedUpdateWithoutJobInput>
    create: XOR<applicantsCreateWithoutJobInput, applicantsUncheckedCreateWithoutJobInput>
  }

  export type applicantsUpdateWithWhereUniqueWithoutJobInput = {
    where: applicantsWhereUniqueInput
    data: XOR<applicantsUpdateWithoutJobInput, applicantsUncheckedUpdateWithoutJobInput>
  }

  export type applicantsUpdateManyWithWhereWithoutJobInput = {
    where: applicantsScalarWhereInput
    data: XOR<applicantsUpdateManyMutationInput, applicantsUncheckedUpdateManyWithoutJobInput>
  }

  export type jobsCreateWithoutApplicantInput = {
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
    createdBy: usersCreateNestedOneWithoutCreated_JobInput
    updatedBy: usersCreateNestedOneWithoutUpdated_JobInput
  }

  export type jobsUncheckedCreateWithoutApplicantInput = {
    id?: number
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_by: number
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type jobsCreateOrConnectWithoutApplicantInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutApplicantInput, jobsUncheckedCreateWithoutApplicantInput>
  }

  export type usersCreateWithoutUpdated_ApplicantInput = {
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: rolesCreateNestedOneWithoutUsersInput
    created_Work?: our_worksCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsCreateNestedManyWithoutUpdatedByInput
  }

  export type usersUncheckedCreateWithoutUpdated_ApplicantInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    created_Work?: our_worksUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Work?: our_worksUncheckedCreateNestedManyWithoutUpdatedByInput
    created_Job?: jobsUncheckedCreateNestedManyWithoutCreatedByInput
    updated_Job?: jobsUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type usersCreateOrConnectWithoutUpdated_ApplicantInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUpdated_ApplicantInput, usersUncheckedCreateWithoutUpdated_ApplicantInput>
  }

  export type jobsUpsertWithoutApplicantInput = {
    update: XOR<jobsUpdateWithoutApplicantInput, jobsUncheckedUpdateWithoutApplicantInput>
    create: XOR<jobsCreateWithoutApplicantInput, jobsUncheckedCreateWithoutApplicantInput>
    where?: jobsWhereInput
  }

  export type jobsUpdateToOneWithWhereWithoutApplicantInput = {
    where?: jobsWhereInput
    data: XOR<jobsUpdateWithoutApplicantInput, jobsUncheckedUpdateWithoutApplicantInput>
  }

  export type jobsUpdateWithoutApplicantInput = {
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: usersUpdateOneRequiredWithoutCreated_JobNestedInput
    updatedBy?: usersUpdateOneRequiredWithoutUpdated_JobNestedInput
  }

  export type jobsUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutUpdated_ApplicantInput = {
    update: XOR<usersUpdateWithoutUpdated_ApplicantInput, usersUncheckedUpdateWithoutUpdated_ApplicantInput>
    create: XOR<usersCreateWithoutUpdated_ApplicantInput, usersUncheckedCreateWithoutUpdated_ApplicantInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUpdated_ApplicantInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUpdated_ApplicantInput, usersUncheckedUpdateWithoutUpdated_ApplicantInput>
  }

  export type usersUpdateWithoutUpdated_ApplicantInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneWithoutUsersNestedInput
    created_Work?: our_worksUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutUpdated_ApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_Work?: our_worksUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUncheckedUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersCreateManyRoleInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    two_factor_code?: string | null
    two_factor_code_expiry?: Date | string | null
    is_two_factor_enabled?: boolean
    reset_token?: string | null
    reset_token_expiry?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateWithoutRoleInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_Work?: our_worksUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_Work?: our_worksUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Work?: our_worksUncheckedUpdateManyWithoutUpdatedByNestedInput
    created_Job?: jobsUncheckedUpdateManyWithoutCreatedByNestedInput
    updated_Job?: jobsUncheckedUpdateManyWithoutUpdatedByNestedInput
    updated_Applicant?: applicantsUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    two_factor_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_factor_code_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_two_factor_enabled?: BoolFieldUpdateOperationsInput | boolean
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type our_worksCreateManyCreatedByInput = {
    id?: number
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type our_worksCreateManyUpdatedByInput = {
    id?: number
    date: Date | string
    title: string
    description: string
    challenges: string
    strategy: string
    takeaway: string
    image?: string | null
    created_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type jobsCreateManyCreatedByInput = {
    id?: number
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type jobsCreateManyUpdatedByInput = {
    id?: number
    open_date: Date | string
    close_date: Date | string
    position: string
    department: string
    description: string
    experiences: string
    level: string
    overview: string
    job_type: string
    salary: string
    duties: string
    requirements: string
    gender: string
    status?: string
    created_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type applicantsCreateManyUpdatedByInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    job_id: number
    file: string
    status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type our_worksUpdateWithoutCreatedByInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: usersUpdateOneRequiredWithoutUpdated_WorkNestedInput
  }

  export type our_worksUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type our_worksUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type our_worksUpdateWithoutUpdatedByInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: usersUpdateOneRequiredWithoutCreated_WorkNestedInput
  }

  export type our_worksUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type our_worksUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    strategy?: StringFieldUpdateOperationsInput | string
    takeaway?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsUpdateWithoutCreatedByInput = {
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: usersUpdateOneRequiredWithoutUpdated_JobNestedInput
    applicant?: applicantsUpdateManyWithoutJobNestedInput
  }

  export type jobsUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: applicantsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobsUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsUpdateWithoutUpdatedByInput = {
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: usersUpdateOneRequiredWithoutCreated_JobNestedInput
    applicant?: applicantsUpdateManyWithoutJobNestedInput
  }

  export type jobsUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: applicantsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type jobsUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    open_date?: DateTimeFieldUpdateOperationsInput | Date | string
    close_date?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    experiences?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    duties?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsUpdateWithoutUpdatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: jobsUpdateOneRequiredWithoutApplicantNestedInput
  }

  export type applicantsUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    job_id?: IntFieldUpdateOperationsInput | number
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    job_id?: IntFieldUpdateOperationsInput | number
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsCreateManyJobInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    experience: string
    expected_salary: string
    file: string
    status?: string
    updated_by: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type applicantsUpdateWithoutJobInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: usersUpdateOneRequiredWithoutUpdated_ApplicantNestedInput
  }

  export type applicantsUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type applicantsUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    expected_salary?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_by?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}