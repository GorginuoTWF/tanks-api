
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
 * Model battlelocation
 * 
 */
export type battlelocation = $Result.DefaultSelection<Prisma.$battlelocationPayload>
/**
 * Model battlelocation_country
 * 
 */
export type battlelocation_country = $Result.DefaultSelection<Prisma.$battlelocation_countryPayload>
/**
 * Model battlelocation_tank
 * 
 */
export type battlelocation_tank = $Result.DefaultSelection<Prisma.$battlelocation_tankPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model favourite_tanks
 * 
 */
export type favourite_tanks = $Result.DefaultSelection<Prisma.$favourite_tanksPayload>
/**
 * Model photos
 * 
 */
export type photos = $Result.DefaultSelection<Prisma.$photosPayload>
/**
 * Model tank_photos
 * 
 */
export type tank_photos = $Result.DefaultSelection<Prisma.$tank_photosPayload>
/**
 * Model countries
 * 
 */
export type countries = $Result.DefaultSelection<Prisma.$countriesPayload>
/**
 * Model vehicle_types
 * 
 */
export type vehicle_types = $Result.DefaultSelection<Prisma.$vehicle_typesPayload>
/**
 * Model tanks
 * 
 */
export type tanks = $Result.DefaultSelection<Prisma.$tanksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Battlelocations
 * const battlelocations = await prisma.battlelocation.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Battlelocations
   * const battlelocations = await prisma.battlelocation.findMany()
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
   * `prisma.battlelocation`: Exposes CRUD operations for the **battlelocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battlelocations
    * const battlelocations = await prisma.battlelocation.findMany()
    * ```
    */
  get battlelocation(): Prisma.battlelocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battlelocation_country`: Exposes CRUD operations for the **battlelocation_country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battlelocation_countries
    * const battlelocation_countries = await prisma.battlelocation_country.findMany()
    * ```
    */
  get battlelocation_country(): Prisma.battlelocation_countryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battlelocation_tank`: Exposes CRUD operations for the **battlelocation_tank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battlelocation_tanks
    * const battlelocation_tanks = await prisma.battlelocation_tank.findMany()
    * ```
    */
  get battlelocation_tank(): Prisma.battlelocation_tankDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.favourite_tanks`: Exposes CRUD operations for the **favourite_tanks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourite_tanks
    * const favourite_tanks = await prisma.favourite_tanks.findMany()
    * ```
    */
  get favourite_tanks(): Prisma.favourite_tanksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photos`: Exposes CRUD operations for the **photos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photos.findMany()
    * ```
    */
  get photos(): Prisma.photosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tank_photos`: Exposes CRUD operations for the **tank_photos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tank_photos
    * const tank_photos = await prisma.tank_photos.findMany()
    * ```
    */
  get tank_photos(): Prisma.tank_photosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.countriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle_types`: Exposes CRUD operations for the **vehicle_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_types
    * const vehicle_types = await prisma.vehicle_types.findMany()
    * ```
    */
  get vehicle_types(): Prisma.vehicle_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tanks`: Exposes CRUD operations for the **tanks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tanks
    * const tanks = await prisma.tanks.findMany()
    * ```
    */
  get tanks(): Prisma.tanksDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    battlelocation: 'battlelocation',
    battlelocation_country: 'battlelocation_country',
    battlelocation_tank: 'battlelocation_tank',
    users: 'users',
    favourite_tanks: 'favourite_tanks',
    photos: 'photos',
    tank_photos: 'tank_photos',
    countries: 'countries',
    vehicle_types: 'vehicle_types',
    tanks: 'tanks'
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
      modelProps: "battlelocation" | "battlelocation_country" | "battlelocation_tank" | "users" | "favourite_tanks" | "photos" | "tank_photos" | "countries" | "vehicle_types" | "tanks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      battlelocation: {
        payload: Prisma.$battlelocationPayload<ExtArgs>
        fields: Prisma.battlelocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battlelocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battlelocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload>
          }
          findFirst: {
            args: Prisma.battlelocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battlelocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload>
          }
          findMany: {
            args: Prisma.battlelocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload>[]
          }
          create: {
            args: Prisma.battlelocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload>
          }
          createMany: {
            args: Prisma.battlelocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battlelocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload>
          }
          update: {
            args: Prisma.battlelocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload>
          }
          deleteMany: {
            args: Prisma.battlelocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battlelocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battlelocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocationPayload>
          }
          aggregate: {
            args: Prisma.BattlelocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattlelocation>
          }
          groupBy: {
            args: Prisma.battlelocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattlelocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.battlelocationCountArgs<ExtArgs>
            result: $Utils.Optional<BattlelocationCountAggregateOutputType> | number
          }
        }
      }
      battlelocation_country: {
        payload: Prisma.$battlelocation_countryPayload<ExtArgs>
        fields: Prisma.battlelocation_countryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battlelocation_countryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battlelocation_countryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload>
          }
          findFirst: {
            args: Prisma.battlelocation_countryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battlelocation_countryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload>
          }
          findMany: {
            args: Prisma.battlelocation_countryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload>[]
          }
          create: {
            args: Prisma.battlelocation_countryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload>
          }
          createMany: {
            args: Prisma.battlelocation_countryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battlelocation_countryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload>
          }
          update: {
            args: Prisma.battlelocation_countryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload>
          }
          deleteMany: {
            args: Prisma.battlelocation_countryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battlelocation_countryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battlelocation_countryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_countryPayload>
          }
          aggregate: {
            args: Prisma.Battlelocation_countryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattlelocation_country>
          }
          groupBy: {
            args: Prisma.battlelocation_countryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Battlelocation_countryGroupByOutputType>[]
          }
          count: {
            args: Prisma.battlelocation_countryCountArgs<ExtArgs>
            result: $Utils.Optional<Battlelocation_countryCountAggregateOutputType> | number
          }
        }
      }
      battlelocation_tank: {
        payload: Prisma.$battlelocation_tankPayload<ExtArgs>
        fields: Prisma.battlelocation_tankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.battlelocation_tankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.battlelocation_tankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload>
          }
          findFirst: {
            args: Prisma.battlelocation_tankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.battlelocation_tankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload>
          }
          findMany: {
            args: Prisma.battlelocation_tankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload>[]
          }
          create: {
            args: Prisma.battlelocation_tankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload>
          }
          createMany: {
            args: Prisma.battlelocation_tankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.battlelocation_tankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload>
          }
          update: {
            args: Prisma.battlelocation_tankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload>
          }
          deleteMany: {
            args: Prisma.battlelocation_tankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.battlelocation_tankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.battlelocation_tankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$battlelocation_tankPayload>
          }
          aggregate: {
            args: Prisma.Battlelocation_tankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattlelocation_tank>
          }
          groupBy: {
            args: Prisma.battlelocation_tankGroupByArgs<ExtArgs>
            result: $Utils.Optional<Battlelocation_tankGroupByOutputType>[]
          }
          count: {
            args: Prisma.battlelocation_tankCountArgs<ExtArgs>
            result: $Utils.Optional<Battlelocation_tankCountAggregateOutputType> | number
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
      favourite_tanks: {
        payload: Prisma.$favourite_tanksPayload<ExtArgs>
        fields: Prisma.favourite_tanksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favourite_tanksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favourite_tanksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload>
          }
          findFirst: {
            args: Prisma.favourite_tanksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favourite_tanksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload>
          }
          findMany: {
            args: Prisma.favourite_tanksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload>[]
          }
          create: {
            args: Prisma.favourite_tanksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload>
          }
          createMany: {
            args: Prisma.favourite_tanksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.favourite_tanksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload>
          }
          update: {
            args: Prisma.favourite_tanksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload>
          }
          deleteMany: {
            args: Prisma.favourite_tanksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favourite_tanksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.favourite_tanksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favourite_tanksPayload>
          }
          aggregate: {
            args: Prisma.Favourite_tanksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourite_tanks>
          }
          groupBy: {
            args: Prisma.favourite_tanksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Favourite_tanksGroupByOutputType>[]
          }
          count: {
            args: Prisma.favourite_tanksCountArgs<ExtArgs>
            result: $Utils.Optional<Favourite_tanksCountAggregateOutputType> | number
          }
        }
      }
      photos: {
        payload: Prisma.$photosPayload<ExtArgs>
        fields: Prisma.photosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.photosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.photosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          findFirst: {
            args: Prisma.photosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.photosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          findMany: {
            args: Prisma.photosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>[]
          }
          create: {
            args: Prisma.photosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          createMany: {
            args: Prisma.photosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.photosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          update: {
            args: Prisma.photosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          deleteMany: {
            args: Prisma.photosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.photosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.photosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          aggregate: {
            args: Prisma.PhotosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotos>
          }
          groupBy: {
            args: Prisma.photosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotosGroupByOutputType>[]
          }
          count: {
            args: Prisma.photosCountArgs<ExtArgs>
            result: $Utils.Optional<PhotosCountAggregateOutputType> | number
          }
        }
      }
      tank_photos: {
        payload: Prisma.$tank_photosPayload<ExtArgs>
        fields: Prisma.tank_photosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tank_photosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tank_photosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload>
          }
          findFirst: {
            args: Prisma.tank_photosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tank_photosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload>
          }
          findMany: {
            args: Prisma.tank_photosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload>[]
          }
          create: {
            args: Prisma.tank_photosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload>
          }
          createMany: {
            args: Prisma.tank_photosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tank_photosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload>
          }
          update: {
            args: Prisma.tank_photosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload>
          }
          deleteMany: {
            args: Prisma.tank_photosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tank_photosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tank_photosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tank_photosPayload>
          }
          aggregate: {
            args: Prisma.Tank_photosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTank_photos>
          }
          groupBy: {
            args: Prisma.tank_photosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tank_photosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tank_photosCountArgs<ExtArgs>
            result: $Utils.Optional<Tank_photosCountAggregateOutputType> | number
          }
        }
      }
      countries: {
        payload: Prisma.$countriesPayload<ExtArgs>
        fields: Prisma.countriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.countriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.countriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findFirst: {
            args: Prisma.countriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.countriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findMany: {
            args: Prisma.countriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          create: {
            args: Prisma.countriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          createMany: {
            args: Prisma.countriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.countriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          update: {
            args: Prisma.countriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          deleteMany: {
            args: Prisma.countriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.countriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.countriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          aggregate: {
            args: Prisma.CountriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountries>
          }
          groupBy: {
            args: Prisma.countriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.countriesCountArgs<ExtArgs>
            result: $Utils.Optional<CountriesCountAggregateOutputType> | number
          }
        }
      }
      vehicle_types: {
        payload: Prisma.$vehicle_typesPayload<ExtArgs>
        fields: Prisma.vehicle_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehicle_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehicle_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload>
          }
          findFirst: {
            args: Prisma.vehicle_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehicle_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload>
          }
          findMany: {
            args: Prisma.vehicle_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload>[]
          }
          create: {
            args: Prisma.vehicle_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload>
          }
          createMany: {
            args: Prisma.vehicle_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vehicle_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload>
          }
          update: {
            args: Prisma.vehicle_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload>
          }
          deleteMany: {
            args: Prisma.vehicle_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehicle_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vehicle_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_typesPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_types>
          }
          groupBy: {
            args: Prisma.vehicle_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehicle_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_typesCountAggregateOutputType> | number
          }
        }
      }
      tanks: {
        payload: Prisma.$tanksPayload<ExtArgs>
        fields: Prisma.tanksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tanksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tanksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload>
          }
          findFirst: {
            args: Prisma.tanksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tanksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload>
          }
          findMany: {
            args: Prisma.tanksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload>[]
          }
          create: {
            args: Prisma.tanksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload>
          }
          createMany: {
            args: Prisma.tanksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tanksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload>
          }
          update: {
            args: Prisma.tanksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload>
          }
          deleteMany: {
            args: Prisma.tanksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tanksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tanksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tanksPayload>
          }
          aggregate: {
            args: Prisma.TanksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTanks>
          }
          groupBy: {
            args: Prisma.tanksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TanksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tanksCountArgs<ExtArgs>
            result: $Utils.Optional<TanksCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    battlelocation?: battlelocationOmit
    battlelocation_country?: battlelocation_countryOmit
    battlelocation_tank?: battlelocation_tankOmit
    users?: usersOmit
    favourite_tanks?: favourite_tanksOmit
    photos?: photosOmit
    tank_photos?: tank_photosOmit
    countries?: countriesOmit
    vehicle_types?: vehicle_typesOmit
    tanks?: tanksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type BattlelocationCountOutputType
   */

  export type BattlelocationCountOutputType = {
    battleCountries: number
    battleTanks: number
  }

  export type BattlelocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleCountries?: boolean | BattlelocationCountOutputTypeCountBattleCountriesArgs
    battleTanks?: boolean | BattlelocationCountOutputTypeCountBattleTanksArgs
  }

  // Custom InputTypes
  /**
   * BattlelocationCountOutputType without action
   */
  export type BattlelocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattlelocationCountOutputType
     */
    select?: BattlelocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BattlelocationCountOutputType without action
   */
  export type BattlelocationCountOutputTypeCountBattleCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battlelocation_countryWhereInput
  }

  /**
   * BattlelocationCountOutputType without action
   */
  export type BattlelocationCountOutputTypeCountBattleTanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battlelocation_tankWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    favourite_tanks: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourite_tanks?: boolean | UsersCountOutputTypeCountFavourite_tanksArgs
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
  export type UsersCountOutputTypeCountFavourite_tanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favourite_tanksWhereInput
  }


  /**
   * Count Type PhotosCountOutputType
   */

  export type PhotosCountOutputType = {
    tanks: number
  }

  export type PhotosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanks?: boolean | PhotosCountOutputTypeCountTanksArgs
  }

  // Custom InputTypes
  /**
   * PhotosCountOutputType without action
   */
  export type PhotosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotosCountOutputType
     */
    select?: PhotosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotosCountOutputType without action
   */
  export type PhotosCountOutputTypeCountTanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tank_photosWhereInput
  }


  /**
   * Count Type CountriesCountOutputType
   */

  export type CountriesCountOutputType = {
    battleCountries: number
    tanks: number
  }

  export type CountriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleCountries?: boolean | CountriesCountOutputTypeCountBattleCountriesArgs
    tanks?: boolean | CountriesCountOutputTypeCountTanksArgs
  }

  // Custom InputTypes
  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesCountOutputType
     */
    select?: CountriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountBattleCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battlelocation_countryWhereInput
  }

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountTanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tanksWhereInput
  }


  /**
   * Count Type Vehicle_typesCountOutputType
   */

  export type Vehicle_typesCountOutputType = {
    tanks: number
  }

  export type Vehicle_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanks?: boolean | Vehicle_typesCountOutputTypeCountTanksArgs
  }

  // Custom InputTypes
  /**
   * Vehicle_typesCountOutputType without action
   */
  export type Vehicle_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_typesCountOutputType
     */
    select?: Vehicle_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Vehicle_typesCountOutputType without action
   */
  export type Vehicle_typesCountOutputTypeCountTanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tanksWhereInput
  }


  /**
   * Count Type TanksCountOutputType
   */

  export type TanksCountOutputType = {
    battleTanks: number
    favourite_tanks: number
    photos: number
  }

  export type TanksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleTanks?: boolean | TanksCountOutputTypeCountBattleTanksArgs
    favourite_tanks?: boolean | TanksCountOutputTypeCountFavourite_tanksArgs
    photos?: boolean | TanksCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * TanksCountOutputType without action
   */
  export type TanksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TanksCountOutputType
     */
    select?: TanksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TanksCountOutputType without action
   */
  export type TanksCountOutputTypeCountBattleTanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battlelocation_tankWhereInput
  }

  /**
   * TanksCountOutputType without action
   */
  export type TanksCountOutputTypeCountFavourite_tanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favourite_tanksWhereInput
  }

  /**
   * TanksCountOutputType without action
   */
  export type TanksCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tank_photosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model battlelocation
   */

  export type AggregateBattlelocation = {
    _count: BattlelocationCountAggregateOutputType | null
    _avg: BattlelocationAvgAggregateOutputType | null
    _sum: BattlelocationSumAggregateOutputType | null
    _min: BattlelocationMinAggregateOutputType | null
    _max: BattlelocationMaxAggregateOutputType | null
  }

  export type BattlelocationAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type BattlelocationSumAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type BattlelocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    description: string | null
  }

  export type BattlelocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    description: string | null
  }

  export type BattlelocationCountAggregateOutputType = {
    id: number
    name: number
    latitude: number
    longitude: number
    description: number
    _all: number
  }


  export type BattlelocationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type BattlelocationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type BattlelocationMinAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    description?: true
  }

  export type BattlelocationMaxAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    description?: true
  }

  export type BattlelocationCountAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    description?: true
    _all?: true
  }

  export type BattlelocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battlelocation to aggregate.
     */
    where?: battlelocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocations to fetch.
     */
    orderBy?: battlelocationOrderByWithRelationInput | battlelocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battlelocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned battlelocations
    **/
    _count?: true | BattlelocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattlelocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattlelocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattlelocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattlelocationMaxAggregateInputType
  }

  export type GetBattlelocationAggregateType<T extends BattlelocationAggregateArgs> = {
        [P in keyof T & keyof AggregateBattlelocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattlelocation[P]>
      : GetScalarType<T[P], AggregateBattlelocation[P]>
  }




  export type battlelocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battlelocationWhereInput
    orderBy?: battlelocationOrderByWithAggregationInput | battlelocationOrderByWithAggregationInput[]
    by: BattlelocationScalarFieldEnum[] | BattlelocationScalarFieldEnum
    having?: battlelocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattlelocationCountAggregateInputType | true
    _avg?: BattlelocationAvgAggregateInputType
    _sum?: BattlelocationSumAggregateInputType
    _min?: BattlelocationMinAggregateInputType
    _max?: BattlelocationMaxAggregateInputType
  }

  export type BattlelocationGroupByOutputType = {
    id: number
    name: string
    latitude: Decimal | null
    longitude: Decimal | null
    description: string | null
    _count: BattlelocationCountAggregateOutputType | null
    _avg: BattlelocationAvgAggregateOutputType | null
    _sum: BattlelocationSumAggregateOutputType | null
    _min: BattlelocationMinAggregateOutputType | null
    _max: BattlelocationMaxAggregateOutputType | null
  }

  type GetBattlelocationGroupByPayload<T extends battlelocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattlelocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattlelocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattlelocationGroupByOutputType[P]>
            : GetScalarType<T[P], BattlelocationGroupByOutputType[P]>
        }
      >
    >


  export type battlelocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    battleCountries?: boolean | battlelocation$battleCountriesArgs<ExtArgs>
    battleTanks?: boolean | battlelocation$battleTanksArgs<ExtArgs>
    _count?: boolean | BattlelocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battlelocation"]>



  export type battlelocationSelectScalar = {
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
  }

  export type battlelocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "latitude" | "longitude" | "description", ExtArgs["result"]["battlelocation"]>
  export type battlelocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleCountries?: boolean | battlelocation$battleCountriesArgs<ExtArgs>
    battleTanks?: boolean | battlelocation$battleTanksArgs<ExtArgs>
    _count?: boolean | BattlelocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $battlelocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battlelocation"
    objects: {
      battleCountries: Prisma.$battlelocation_countryPayload<ExtArgs>[]
      battleTanks: Prisma.$battlelocation_tankPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      description: string | null
    }, ExtArgs["result"]["battlelocation"]>
    composites: {}
  }

  type battlelocationGetPayload<S extends boolean | null | undefined | battlelocationDefaultArgs> = $Result.GetResult<Prisma.$battlelocationPayload, S>

  type battlelocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battlelocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattlelocationCountAggregateInputType | true
    }

  export interface battlelocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battlelocation'], meta: { name: 'battlelocation' } }
    /**
     * Find zero or one Battlelocation that matches the filter.
     * @param {battlelocationFindUniqueArgs} args - Arguments to find a Battlelocation
     * @example
     * // Get one Battlelocation
     * const battlelocation = await prisma.battlelocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battlelocationFindUniqueArgs>(args: SelectSubset<T, battlelocationFindUniqueArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battlelocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battlelocationFindUniqueOrThrowArgs} args - Arguments to find a Battlelocation
     * @example
     * // Get one Battlelocation
     * const battlelocation = await prisma.battlelocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battlelocationFindUniqueOrThrowArgs>(args: SelectSubset<T, battlelocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battlelocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocationFindFirstArgs} args - Arguments to find a Battlelocation
     * @example
     * // Get one Battlelocation
     * const battlelocation = await prisma.battlelocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battlelocationFindFirstArgs>(args?: SelectSubset<T, battlelocationFindFirstArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battlelocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocationFindFirstOrThrowArgs} args - Arguments to find a Battlelocation
     * @example
     * // Get one Battlelocation
     * const battlelocation = await prisma.battlelocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battlelocationFindFirstOrThrowArgs>(args?: SelectSubset<T, battlelocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battlelocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battlelocations
     * const battlelocations = await prisma.battlelocation.findMany()
     * 
     * // Get first 10 Battlelocations
     * const battlelocations = await prisma.battlelocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battlelocationWithIdOnly = await prisma.battlelocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends battlelocationFindManyArgs>(args?: SelectSubset<T, battlelocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battlelocation.
     * @param {battlelocationCreateArgs} args - Arguments to create a Battlelocation.
     * @example
     * // Create one Battlelocation
     * const Battlelocation = await prisma.battlelocation.create({
     *   data: {
     *     // ... data to create a Battlelocation
     *   }
     * })
     * 
     */
    create<T extends battlelocationCreateArgs>(args: SelectSubset<T, battlelocationCreateArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battlelocations.
     * @param {battlelocationCreateManyArgs} args - Arguments to create many Battlelocations.
     * @example
     * // Create many Battlelocations
     * const battlelocation = await prisma.battlelocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battlelocationCreateManyArgs>(args?: SelectSubset<T, battlelocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battlelocation.
     * @param {battlelocationDeleteArgs} args - Arguments to delete one Battlelocation.
     * @example
     * // Delete one Battlelocation
     * const Battlelocation = await prisma.battlelocation.delete({
     *   where: {
     *     // ... filter to delete one Battlelocation
     *   }
     * })
     * 
     */
    delete<T extends battlelocationDeleteArgs>(args: SelectSubset<T, battlelocationDeleteArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battlelocation.
     * @param {battlelocationUpdateArgs} args - Arguments to update one Battlelocation.
     * @example
     * // Update one Battlelocation
     * const battlelocation = await prisma.battlelocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battlelocationUpdateArgs>(args: SelectSubset<T, battlelocationUpdateArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battlelocations.
     * @param {battlelocationDeleteManyArgs} args - Arguments to filter Battlelocations to delete.
     * @example
     * // Delete a few Battlelocations
     * const { count } = await prisma.battlelocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battlelocationDeleteManyArgs>(args?: SelectSubset<T, battlelocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battlelocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battlelocations
     * const battlelocation = await prisma.battlelocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battlelocationUpdateManyArgs>(args: SelectSubset<T, battlelocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battlelocation.
     * @param {battlelocationUpsertArgs} args - Arguments to update or create a Battlelocation.
     * @example
     * // Update or create a Battlelocation
     * const battlelocation = await prisma.battlelocation.upsert({
     *   create: {
     *     // ... data to create a Battlelocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battlelocation we want to update
     *   }
     * })
     */
    upsert<T extends battlelocationUpsertArgs>(args: SelectSubset<T, battlelocationUpsertArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battlelocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocationCountArgs} args - Arguments to filter Battlelocations to count.
     * @example
     * // Count the number of Battlelocations
     * const count = await prisma.battlelocation.count({
     *   where: {
     *     // ... the filter for the Battlelocations we want to count
     *   }
     * })
    **/
    count<T extends battlelocationCountArgs>(
      args?: Subset<T, battlelocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattlelocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battlelocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattlelocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BattlelocationAggregateArgs>(args: Subset<T, BattlelocationAggregateArgs>): Prisma.PrismaPromise<GetBattlelocationAggregateType<T>>

    /**
     * Group by Battlelocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocationGroupByArgs} args - Group by arguments.
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
      T extends battlelocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battlelocationGroupByArgs['orderBy'] }
        : { orderBy?: battlelocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battlelocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattlelocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battlelocation model
   */
  readonly fields: battlelocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battlelocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battlelocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battleCountries<T extends battlelocation$battleCountriesArgs<ExtArgs> = {}>(args?: Subset<T, battlelocation$battleCountriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battleTanks<T extends battlelocation$battleTanksArgs<ExtArgs> = {}>(args?: Subset<T, battlelocation$battleTanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the battlelocation model
   */
  interface battlelocationFieldRefs {
    readonly id: FieldRef<"battlelocation", 'Int'>
    readonly name: FieldRef<"battlelocation", 'String'>
    readonly latitude: FieldRef<"battlelocation", 'Decimal'>
    readonly longitude: FieldRef<"battlelocation", 'Decimal'>
    readonly description: FieldRef<"battlelocation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * battlelocation findUnique
   */
  export type battlelocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation to fetch.
     */
    where: battlelocationWhereUniqueInput
  }

  /**
   * battlelocation findUniqueOrThrow
   */
  export type battlelocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation to fetch.
     */
    where: battlelocationWhereUniqueInput
  }

  /**
   * battlelocation findFirst
   */
  export type battlelocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation to fetch.
     */
    where?: battlelocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocations to fetch.
     */
    orderBy?: battlelocationOrderByWithRelationInput | battlelocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battlelocations.
     */
    cursor?: battlelocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battlelocations.
     */
    distinct?: BattlelocationScalarFieldEnum | BattlelocationScalarFieldEnum[]
  }

  /**
   * battlelocation findFirstOrThrow
   */
  export type battlelocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation to fetch.
     */
    where?: battlelocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocations to fetch.
     */
    orderBy?: battlelocationOrderByWithRelationInput | battlelocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battlelocations.
     */
    cursor?: battlelocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battlelocations.
     */
    distinct?: BattlelocationScalarFieldEnum | BattlelocationScalarFieldEnum[]
  }

  /**
   * battlelocation findMany
   */
  export type battlelocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * Filter, which battlelocations to fetch.
     */
    where?: battlelocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocations to fetch.
     */
    orderBy?: battlelocationOrderByWithRelationInput | battlelocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battlelocations.
     */
    cursor?: battlelocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocations.
     */
    skip?: number
    distinct?: BattlelocationScalarFieldEnum | BattlelocationScalarFieldEnum[]
  }

  /**
   * battlelocation create
   */
  export type battlelocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * The data needed to create a battlelocation.
     */
    data: XOR<battlelocationCreateInput, battlelocationUncheckedCreateInput>
  }

  /**
   * battlelocation createMany
   */
  export type battlelocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battlelocations.
     */
    data: battlelocationCreateManyInput | battlelocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battlelocation update
   */
  export type battlelocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * The data needed to update a battlelocation.
     */
    data: XOR<battlelocationUpdateInput, battlelocationUncheckedUpdateInput>
    /**
     * Choose, which battlelocation to update.
     */
    where: battlelocationWhereUniqueInput
  }

  /**
   * battlelocation updateMany
   */
  export type battlelocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battlelocations.
     */
    data: XOR<battlelocationUpdateManyMutationInput, battlelocationUncheckedUpdateManyInput>
    /**
     * Filter which battlelocations to update
     */
    where?: battlelocationWhereInput
    /**
     * Limit how many battlelocations to update.
     */
    limit?: number
  }

  /**
   * battlelocation upsert
   */
  export type battlelocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * The filter to search for the battlelocation to update in case it exists.
     */
    where: battlelocationWhereUniqueInput
    /**
     * In case the battlelocation found by the `where` argument doesn't exist, create a new battlelocation with this data.
     */
    create: XOR<battlelocationCreateInput, battlelocationUncheckedCreateInput>
    /**
     * In case the battlelocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battlelocationUpdateInput, battlelocationUncheckedUpdateInput>
  }

  /**
   * battlelocation delete
   */
  export type battlelocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
    /**
     * Filter which battlelocation to delete.
     */
    where: battlelocationWhereUniqueInput
  }

  /**
   * battlelocation deleteMany
   */
  export type battlelocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battlelocations to delete
     */
    where?: battlelocationWhereInput
    /**
     * Limit how many battlelocations to delete.
     */
    limit?: number
  }

  /**
   * battlelocation.battleCountries
   */
  export type battlelocation$battleCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    where?: battlelocation_countryWhereInput
    orderBy?: battlelocation_countryOrderByWithRelationInput | battlelocation_countryOrderByWithRelationInput[]
    cursor?: battlelocation_countryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battlelocation_countryScalarFieldEnum | Battlelocation_countryScalarFieldEnum[]
  }

  /**
   * battlelocation.battleTanks
   */
  export type battlelocation$battleTanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    where?: battlelocation_tankWhereInput
    orderBy?: battlelocation_tankOrderByWithRelationInput | battlelocation_tankOrderByWithRelationInput[]
    cursor?: battlelocation_tankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battlelocation_tankScalarFieldEnum | Battlelocation_tankScalarFieldEnum[]
  }

  /**
   * battlelocation without action
   */
  export type battlelocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation
     */
    select?: battlelocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation
     */
    omit?: battlelocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocationInclude<ExtArgs> | null
  }


  /**
   * Model battlelocation_country
   */

  export type AggregateBattlelocation_country = {
    _count: Battlelocation_countryCountAggregateOutputType | null
    _avg: Battlelocation_countryAvgAggregateOutputType | null
    _sum: Battlelocation_countrySumAggregateOutputType | null
    _min: Battlelocation_countryMinAggregateOutputType | null
    _max: Battlelocation_countryMaxAggregateOutputType | null
  }

  export type Battlelocation_countryAvgAggregateOutputType = {
    battlelocation_id: number | null
    country_id: number | null
  }

  export type Battlelocation_countrySumAggregateOutputType = {
    battlelocation_id: number | null
    country_id: number | null
  }

  export type Battlelocation_countryMinAggregateOutputType = {
    battlelocation_id: number | null
    country_id: number | null
  }

  export type Battlelocation_countryMaxAggregateOutputType = {
    battlelocation_id: number | null
    country_id: number | null
  }

  export type Battlelocation_countryCountAggregateOutputType = {
    battlelocation_id: number
    country_id: number
    _all: number
  }


  export type Battlelocation_countryAvgAggregateInputType = {
    battlelocation_id?: true
    country_id?: true
  }

  export type Battlelocation_countrySumAggregateInputType = {
    battlelocation_id?: true
    country_id?: true
  }

  export type Battlelocation_countryMinAggregateInputType = {
    battlelocation_id?: true
    country_id?: true
  }

  export type Battlelocation_countryMaxAggregateInputType = {
    battlelocation_id?: true
    country_id?: true
  }

  export type Battlelocation_countryCountAggregateInputType = {
    battlelocation_id?: true
    country_id?: true
    _all?: true
  }

  export type Battlelocation_countryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battlelocation_country to aggregate.
     */
    where?: battlelocation_countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocation_countries to fetch.
     */
    orderBy?: battlelocation_countryOrderByWithRelationInput | battlelocation_countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battlelocation_countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocation_countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocation_countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned battlelocation_countries
    **/
    _count?: true | Battlelocation_countryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Battlelocation_countryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Battlelocation_countrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Battlelocation_countryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Battlelocation_countryMaxAggregateInputType
  }

  export type GetBattlelocation_countryAggregateType<T extends Battlelocation_countryAggregateArgs> = {
        [P in keyof T & keyof AggregateBattlelocation_country]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattlelocation_country[P]>
      : GetScalarType<T[P], AggregateBattlelocation_country[P]>
  }




  export type battlelocation_countryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battlelocation_countryWhereInput
    orderBy?: battlelocation_countryOrderByWithAggregationInput | battlelocation_countryOrderByWithAggregationInput[]
    by: Battlelocation_countryScalarFieldEnum[] | Battlelocation_countryScalarFieldEnum
    having?: battlelocation_countryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Battlelocation_countryCountAggregateInputType | true
    _avg?: Battlelocation_countryAvgAggregateInputType
    _sum?: Battlelocation_countrySumAggregateInputType
    _min?: Battlelocation_countryMinAggregateInputType
    _max?: Battlelocation_countryMaxAggregateInputType
  }

  export type Battlelocation_countryGroupByOutputType = {
    battlelocation_id: number
    country_id: number
    _count: Battlelocation_countryCountAggregateOutputType | null
    _avg: Battlelocation_countryAvgAggregateOutputType | null
    _sum: Battlelocation_countrySumAggregateOutputType | null
    _min: Battlelocation_countryMinAggregateOutputType | null
    _max: Battlelocation_countryMaxAggregateOutputType | null
  }

  type GetBattlelocation_countryGroupByPayload<T extends battlelocation_countryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Battlelocation_countryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Battlelocation_countryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Battlelocation_countryGroupByOutputType[P]>
            : GetScalarType<T[P], Battlelocation_countryGroupByOutputType[P]>
        }
      >
    >


  export type battlelocation_countrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    battlelocation_id?: boolean
    country_id?: boolean
    battlelocation?: boolean | battlelocationDefaultArgs<ExtArgs>
    countries?: boolean | countriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battlelocation_country"]>



  export type battlelocation_countrySelectScalar = {
    battlelocation_id?: boolean
    country_id?: boolean
  }

  export type battlelocation_countryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"battlelocation_id" | "country_id", ExtArgs["result"]["battlelocation_country"]>
  export type battlelocation_countryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battlelocation?: boolean | battlelocationDefaultArgs<ExtArgs>
    countries?: boolean | countriesDefaultArgs<ExtArgs>
  }

  export type $battlelocation_countryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battlelocation_country"
    objects: {
      battlelocation: Prisma.$battlelocationPayload<ExtArgs>
      countries: Prisma.$countriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      battlelocation_id: number
      country_id: number
    }, ExtArgs["result"]["battlelocation_country"]>
    composites: {}
  }

  type battlelocation_countryGetPayload<S extends boolean | null | undefined | battlelocation_countryDefaultArgs> = $Result.GetResult<Prisma.$battlelocation_countryPayload, S>

  type battlelocation_countryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battlelocation_countryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Battlelocation_countryCountAggregateInputType | true
    }

  export interface battlelocation_countryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battlelocation_country'], meta: { name: 'battlelocation_country' } }
    /**
     * Find zero or one Battlelocation_country that matches the filter.
     * @param {battlelocation_countryFindUniqueArgs} args - Arguments to find a Battlelocation_country
     * @example
     * // Get one Battlelocation_country
     * const battlelocation_country = await prisma.battlelocation_country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battlelocation_countryFindUniqueArgs>(args: SelectSubset<T, battlelocation_countryFindUniqueArgs<ExtArgs>>): Prisma__battlelocation_countryClient<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battlelocation_country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battlelocation_countryFindUniqueOrThrowArgs} args - Arguments to find a Battlelocation_country
     * @example
     * // Get one Battlelocation_country
     * const battlelocation_country = await prisma.battlelocation_country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battlelocation_countryFindUniqueOrThrowArgs>(args: SelectSubset<T, battlelocation_countryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battlelocation_countryClient<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battlelocation_country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_countryFindFirstArgs} args - Arguments to find a Battlelocation_country
     * @example
     * // Get one Battlelocation_country
     * const battlelocation_country = await prisma.battlelocation_country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battlelocation_countryFindFirstArgs>(args?: SelectSubset<T, battlelocation_countryFindFirstArgs<ExtArgs>>): Prisma__battlelocation_countryClient<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battlelocation_country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_countryFindFirstOrThrowArgs} args - Arguments to find a Battlelocation_country
     * @example
     * // Get one Battlelocation_country
     * const battlelocation_country = await prisma.battlelocation_country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battlelocation_countryFindFirstOrThrowArgs>(args?: SelectSubset<T, battlelocation_countryFindFirstOrThrowArgs<ExtArgs>>): Prisma__battlelocation_countryClient<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battlelocation_countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_countryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battlelocation_countries
     * const battlelocation_countries = await prisma.battlelocation_country.findMany()
     * 
     * // Get first 10 Battlelocation_countries
     * const battlelocation_countries = await prisma.battlelocation_country.findMany({ take: 10 })
     * 
     * // Only select the `battlelocation_id`
     * const battlelocation_countryWithBattlelocation_idOnly = await prisma.battlelocation_country.findMany({ select: { battlelocation_id: true } })
     * 
     */
    findMany<T extends battlelocation_countryFindManyArgs>(args?: SelectSubset<T, battlelocation_countryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battlelocation_country.
     * @param {battlelocation_countryCreateArgs} args - Arguments to create a Battlelocation_country.
     * @example
     * // Create one Battlelocation_country
     * const Battlelocation_country = await prisma.battlelocation_country.create({
     *   data: {
     *     // ... data to create a Battlelocation_country
     *   }
     * })
     * 
     */
    create<T extends battlelocation_countryCreateArgs>(args: SelectSubset<T, battlelocation_countryCreateArgs<ExtArgs>>): Prisma__battlelocation_countryClient<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battlelocation_countries.
     * @param {battlelocation_countryCreateManyArgs} args - Arguments to create many Battlelocation_countries.
     * @example
     * // Create many Battlelocation_countries
     * const battlelocation_country = await prisma.battlelocation_country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battlelocation_countryCreateManyArgs>(args?: SelectSubset<T, battlelocation_countryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battlelocation_country.
     * @param {battlelocation_countryDeleteArgs} args - Arguments to delete one Battlelocation_country.
     * @example
     * // Delete one Battlelocation_country
     * const Battlelocation_country = await prisma.battlelocation_country.delete({
     *   where: {
     *     // ... filter to delete one Battlelocation_country
     *   }
     * })
     * 
     */
    delete<T extends battlelocation_countryDeleteArgs>(args: SelectSubset<T, battlelocation_countryDeleteArgs<ExtArgs>>): Prisma__battlelocation_countryClient<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battlelocation_country.
     * @param {battlelocation_countryUpdateArgs} args - Arguments to update one Battlelocation_country.
     * @example
     * // Update one Battlelocation_country
     * const battlelocation_country = await prisma.battlelocation_country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battlelocation_countryUpdateArgs>(args: SelectSubset<T, battlelocation_countryUpdateArgs<ExtArgs>>): Prisma__battlelocation_countryClient<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battlelocation_countries.
     * @param {battlelocation_countryDeleteManyArgs} args - Arguments to filter Battlelocation_countries to delete.
     * @example
     * // Delete a few Battlelocation_countries
     * const { count } = await prisma.battlelocation_country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battlelocation_countryDeleteManyArgs>(args?: SelectSubset<T, battlelocation_countryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battlelocation_countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_countryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battlelocation_countries
     * const battlelocation_country = await prisma.battlelocation_country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battlelocation_countryUpdateManyArgs>(args: SelectSubset<T, battlelocation_countryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battlelocation_country.
     * @param {battlelocation_countryUpsertArgs} args - Arguments to update or create a Battlelocation_country.
     * @example
     * // Update or create a Battlelocation_country
     * const battlelocation_country = await prisma.battlelocation_country.upsert({
     *   create: {
     *     // ... data to create a Battlelocation_country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battlelocation_country we want to update
     *   }
     * })
     */
    upsert<T extends battlelocation_countryUpsertArgs>(args: SelectSubset<T, battlelocation_countryUpsertArgs<ExtArgs>>): Prisma__battlelocation_countryClient<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battlelocation_countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_countryCountArgs} args - Arguments to filter Battlelocation_countries to count.
     * @example
     * // Count the number of Battlelocation_countries
     * const count = await prisma.battlelocation_country.count({
     *   where: {
     *     // ... the filter for the Battlelocation_countries we want to count
     *   }
     * })
    **/
    count<T extends battlelocation_countryCountArgs>(
      args?: Subset<T, battlelocation_countryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Battlelocation_countryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battlelocation_country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Battlelocation_countryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Battlelocation_countryAggregateArgs>(args: Subset<T, Battlelocation_countryAggregateArgs>): Prisma.PrismaPromise<GetBattlelocation_countryAggregateType<T>>

    /**
     * Group by Battlelocation_country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_countryGroupByArgs} args - Group by arguments.
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
      T extends battlelocation_countryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battlelocation_countryGroupByArgs['orderBy'] }
        : { orderBy?: battlelocation_countryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battlelocation_countryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattlelocation_countryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battlelocation_country model
   */
  readonly fields: battlelocation_countryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battlelocation_country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battlelocation_countryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battlelocation<T extends battlelocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, battlelocationDefaultArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    countries<T extends countriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, countriesDefaultArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the battlelocation_country model
   */
  interface battlelocation_countryFieldRefs {
    readonly battlelocation_id: FieldRef<"battlelocation_country", 'Int'>
    readonly country_id: FieldRef<"battlelocation_country", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * battlelocation_country findUnique
   */
  export type battlelocation_countryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_country to fetch.
     */
    where: battlelocation_countryWhereUniqueInput
  }

  /**
   * battlelocation_country findUniqueOrThrow
   */
  export type battlelocation_countryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_country to fetch.
     */
    where: battlelocation_countryWhereUniqueInput
  }

  /**
   * battlelocation_country findFirst
   */
  export type battlelocation_countryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_country to fetch.
     */
    where?: battlelocation_countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocation_countries to fetch.
     */
    orderBy?: battlelocation_countryOrderByWithRelationInput | battlelocation_countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battlelocation_countries.
     */
    cursor?: battlelocation_countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocation_countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocation_countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battlelocation_countries.
     */
    distinct?: Battlelocation_countryScalarFieldEnum | Battlelocation_countryScalarFieldEnum[]
  }

  /**
   * battlelocation_country findFirstOrThrow
   */
  export type battlelocation_countryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_country to fetch.
     */
    where?: battlelocation_countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocation_countries to fetch.
     */
    orderBy?: battlelocation_countryOrderByWithRelationInput | battlelocation_countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battlelocation_countries.
     */
    cursor?: battlelocation_countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocation_countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocation_countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battlelocation_countries.
     */
    distinct?: Battlelocation_countryScalarFieldEnum | Battlelocation_countryScalarFieldEnum[]
  }

  /**
   * battlelocation_country findMany
   */
  export type battlelocation_countryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_countries to fetch.
     */
    where?: battlelocation_countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocation_countries to fetch.
     */
    orderBy?: battlelocation_countryOrderByWithRelationInput | battlelocation_countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battlelocation_countries.
     */
    cursor?: battlelocation_countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocation_countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocation_countries.
     */
    skip?: number
    distinct?: Battlelocation_countryScalarFieldEnum | Battlelocation_countryScalarFieldEnum[]
  }

  /**
   * battlelocation_country create
   */
  export type battlelocation_countryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * The data needed to create a battlelocation_country.
     */
    data: XOR<battlelocation_countryCreateInput, battlelocation_countryUncheckedCreateInput>
  }

  /**
   * battlelocation_country createMany
   */
  export type battlelocation_countryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battlelocation_countries.
     */
    data: battlelocation_countryCreateManyInput | battlelocation_countryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battlelocation_country update
   */
  export type battlelocation_countryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * The data needed to update a battlelocation_country.
     */
    data: XOR<battlelocation_countryUpdateInput, battlelocation_countryUncheckedUpdateInput>
    /**
     * Choose, which battlelocation_country to update.
     */
    where: battlelocation_countryWhereUniqueInput
  }

  /**
   * battlelocation_country updateMany
   */
  export type battlelocation_countryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battlelocation_countries.
     */
    data: XOR<battlelocation_countryUpdateManyMutationInput, battlelocation_countryUncheckedUpdateManyInput>
    /**
     * Filter which battlelocation_countries to update
     */
    where?: battlelocation_countryWhereInput
    /**
     * Limit how many battlelocation_countries to update.
     */
    limit?: number
  }

  /**
   * battlelocation_country upsert
   */
  export type battlelocation_countryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * The filter to search for the battlelocation_country to update in case it exists.
     */
    where: battlelocation_countryWhereUniqueInput
    /**
     * In case the battlelocation_country found by the `where` argument doesn't exist, create a new battlelocation_country with this data.
     */
    create: XOR<battlelocation_countryCreateInput, battlelocation_countryUncheckedCreateInput>
    /**
     * In case the battlelocation_country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battlelocation_countryUpdateInput, battlelocation_countryUncheckedUpdateInput>
  }

  /**
   * battlelocation_country delete
   */
  export type battlelocation_countryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    /**
     * Filter which battlelocation_country to delete.
     */
    where: battlelocation_countryWhereUniqueInput
  }

  /**
   * battlelocation_country deleteMany
   */
  export type battlelocation_countryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battlelocation_countries to delete
     */
    where?: battlelocation_countryWhereInput
    /**
     * Limit how many battlelocation_countries to delete.
     */
    limit?: number
  }

  /**
   * battlelocation_country without action
   */
  export type battlelocation_countryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
  }


  /**
   * Model battlelocation_tank
   */

  export type AggregateBattlelocation_tank = {
    _count: Battlelocation_tankCountAggregateOutputType | null
    _avg: Battlelocation_tankAvgAggregateOutputType | null
    _sum: Battlelocation_tankSumAggregateOutputType | null
    _min: Battlelocation_tankMinAggregateOutputType | null
    _max: Battlelocation_tankMaxAggregateOutputType | null
  }

  export type Battlelocation_tankAvgAggregateOutputType = {
    battlelocation_id: number | null
    tank_id: number | null
  }

  export type Battlelocation_tankSumAggregateOutputType = {
    battlelocation_id: number | null
    tank_id: number | null
  }

  export type Battlelocation_tankMinAggregateOutputType = {
    battlelocation_id: number | null
    tank_id: number | null
  }

  export type Battlelocation_tankMaxAggregateOutputType = {
    battlelocation_id: number | null
    tank_id: number | null
  }

  export type Battlelocation_tankCountAggregateOutputType = {
    battlelocation_id: number
    tank_id: number
    _all: number
  }


  export type Battlelocation_tankAvgAggregateInputType = {
    battlelocation_id?: true
    tank_id?: true
  }

  export type Battlelocation_tankSumAggregateInputType = {
    battlelocation_id?: true
    tank_id?: true
  }

  export type Battlelocation_tankMinAggregateInputType = {
    battlelocation_id?: true
    tank_id?: true
  }

  export type Battlelocation_tankMaxAggregateInputType = {
    battlelocation_id?: true
    tank_id?: true
  }

  export type Battlelocation_tankCountAggregateInputType = {
    battlelocation_id?: true
    tank_id?: true
    _all?: true
  }

  export type Battlelocation_tankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battlelocation_tank to aggregate.
     */
    where?: battlelocation_tankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocation_tanks to fetch.
     */
    orderBy?: battlelocation_tankOrderByWithRelationInput | battlelocation_tankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: battlelocation_tankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocation_tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocation_tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned battlelocation_tanks
    **/
    _count?: true | Battlelocation_tankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Battlelocation_tankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Battlelocation_tankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Battlelocation_tankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Battlelocation_tankMaxAggregateInputType
  }

  export type GetBattlelocation_tankAggregateType<T extends Battlelocation_tankAggregateArgs> = {
        [P in keyof T & keyof AggregateBattlelocation_tank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattlelocation_tank[P]>
      : GetScalarType<T[P], AggregateBattlelocation_tank[P]>
  }




  export type battlelocation_tankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: battlelocation_tankWhereInput
    orderBy?: battlelocation_tankOrderByWithAggregationInput | battlelocation_tankOrderByWithAggregationInput[]
    by: Battlelocation_tankScalarFieldEnum[] | Battlelocation_tankScalarFieldEnum
    having?: battlelocation_tankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Battlelocation_tankCountAggregateInputType | true
    _avg?: Battlelocation_tankAvgAggregateInputType
    _sum?: Battlelocation_tankSumAggregateInputType
    _min?: Battlelocation_tankMinAggregateInputType
    _max?: Battlelocation_tankMaxAggregateInputType
  }

  export type Battlelocation_tankGroupByOutputType = {
    battlelocation_id: number
    tank_id: number
    _count: Battlelocation_tankCountAggregateOutputType | null
    _avg: Battlelocation_tankAvgAggregateOutputType | null
    _sum: Battlelocation_tankSumAggregateOutputType | null
    _min: Battlelocation_tankMinAggregateOutputType | null
    _max: Battlelocation_tankMaxAggregateOutputType | null
  }

  type GetBattlelocation_tankGroupByPayload<T extends battlelocation_tankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Battlelocation_tankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Battlelocation_tankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Battlelocation_tankGroupByOutputType[P]>
            : GetScalarType<T[P], Battlelocation_tankGroupByOutputType[P]>
        }
      >
    >


  export type battlelocation_tankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    battlelocation_id?: boolean
    tank_id?: boolean
    battlelocation?: boolean | battlelocationDefaultArgs<ExtArgs>
    tanks?: boolean | tanksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battlelocation_tank"]>



  export type battlelocation_tankSelectScalar = {
    battlelocation_id?: boolean
    tank_id?: boolean
  }

  export type battlelocation_tankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"battlelocation_id" | "tank_id", ExtArgs["result"]["battlelocation_tank"]>
  export type battlelocation_tankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battlelocation?: boolean | battlelocationDefaultArgs<ExtArgs>
    tanks?: boolean | tanksDefaultArgs<ExtArgs>
  }

  export type $battlelocation_tankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "battlelocation_tank"
    objects: {
      battlelocation: Prisma.$battlelocationPayload<ExtArgs>
      tanks: Prisma.$tanksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      battlelocation_id: number
      tank_id: number
    }, ExtArgs["result"]["battlelocation_tank"]>
    composites: {}
  }

  type battlelocation_tankGetPayload<S extends boolean | null | undefined | battlelocation_tankDefaultArgs> = $Result.GetResult<Prisma.$battlelocation_tankPayload, S>

  type battlelocation_tankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<battlelocation_tankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Battlelocation_tankCountAggregateInputType | true
    }

  export interface battlelocation_tankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['battlelocation_tank'], meta: { name: 'battlelocation_tank' } }
    /**
     * Find zero or one Battlelocation_tank that matches the filter.
     * @param {battlelocation_tankFindUniqueArgs} args - Arguments to find a Battlelocation_tank
     * @example
     * // Get one Battlelocation_tank
     * const battlelocation_tank = await prisma.battlelocation_tank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends battlelocation_tankFindUniqueArgs>(args: SelectSubset<T, battlelocation_tankFindUniqueArgs<ExtArgs>>): Prisma__battlelocation_tankClient<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battlelocation_tank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {battlelocation_tankFindUniqueOrThrowArgs} args - Arguments to find a Battlelocation_tank
     * @example
     * // Get one Battlelocation_tank
     * const battlelocation_tank = await prisma.battlelocation_tank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends battlelocation_tankFindUniqueOrThrowArgs>(args: SelectSubset<T, battlelocation_tankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__battlelocation_tankClient<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battlelocation_tank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_tankFindFirstArgs} args - Arguments to find a Battlelocation_tank
     * @example
     * // Get one Battlelocation_tank
     * const battlelocation_tank = await prisma.battlelocation_tank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends battlelocation_tankFindFirstArgs>(args?: SelectSubset<T, battlelocation_tankFindFirstArgs<ExtArgs>>): Prisma__battlelocation_tankClient<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battlelocation_tank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_tankFindFirstOrThrowArgs} args - Arguments to find a Battlelocation_tank
     * @example
     * // Get one Battlelocation_tank
     * const battlelocation_tank = await prisma.battlelocation_tank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends battlelocation_tankFindFirstOrThrowArgs>(args?: SelectSubset<T, battlelocation_tankFindFirstOrThrowArgs<ExtArgs>>): Prisma__battlelocation_tankClient<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battlelocation_tanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_tankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battlelocation_tanks
     * const battlelocation_tanks = await prisma.battlelocation_tank.findMany()
     * 
     * // Get first 10 Battlelocation_tanks
     * const battlelocation_tanks = await prisma.battlelocation_tank.findMany({ take: 10 })
     * 
     * // Only select the `battlelocation_id`
     * const battlelocation_tankWithBattlelocation_idOnly = await prisma.battlelocation_tank.findMany({ select: { battlelocation_id: true } })
     * 
     */
    findMany<T extends battlelocation_tankFindManyArgs>(args?: SelectSubset<T, battlelocation_tankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battlelocation_tank.
     * @param {battlelocation_tankCreateArgs} args - Arguments to create a Battlelocation_tank.
     * @example
     * // Create one Battlelocation_tank
     * const Battlelocation_tank = await prisma.battlelocation_tank.create({
     *   data: {
     *     // ... data to create a Battlelocation_tank
     *   }
     * })
     * 
     */
    create<T extends battlelocation_tankCreateArgs>(args: SelectSubset<T, battlelocation_tankCreateArgs<ExtArgs>>): Prisma__battlelocation_tankClient<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battlelocation_tanks.
     * @param {battlelocation_tankCreateManyArgs} args - Arguments to create many Battlelocation_tanks.
     * @example
     * // Create many Battlelocation_tanks
     * const battlelocation_tank = await prisma.battlelocation_tank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends battlelocation_tankCreateManyArgs>(args?: SelectSubset<T, battlelocation_tankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Battlelocation_tank.
     * @param {battlelocation_tankDeleteArgs} args - Arguments to delete one Battlelocation_tank.
     * @example
     * // Delete one Battlelocation_tank
     * const Battlelocation_tank = await prisma.battlelocation_tank.delete({
     *   where: {
     *     // ... filter to delete one Battlelocation_tank
     *   }
     * })
     * 
     */
    delete<T extends battlelocation_tankDeleteArgs>(args: SelectSubset<T, battlelocation_tankDeleteArgs<ExtArgs>>): Prisma__battlelocation_tankClient<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battlelocation_tank.
     * @param {battlelocation_tankUpdateArgs} args - Arguments to update one Battlelocation_tank.
     * @example
     * // Update one Battlelocation_tank
     * const battlelocation_tank = await prisma.battlelocation_tank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends battlelocation_tankUpdateArgs>(args: SelectSubset<T, battlelocation_tankUpdateArgs<ExtArgs>>): Prisma__battlelocation_tankClient<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battlelocation_tanks.
     * @param {battlelocation_tankDeleteManyArgs} args - Arguments to filter Battlelocation_tanks to delete.
     * @example
     * // Delete a few Battlelocation_tanks
     * const { count } = await prisma.battlelocation_tank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends battlelocation_tankDeleteManyArgs>(args?: SelectSubset<T, battlelocation_tankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battlelocation_tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_tankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battlelocation_tanks
     * const battlelocation_tank = await prisma.battlelocation_tank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends battlelocation_tankUpdateManyArgs>(args: SelectSubset<T, battlelocation_tankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battlelocation_tank.
     * @param {battlelocation_tankUpsertArgs} args - Arguments to update or create a Battlelocation_tank.
     * @example
     * // Update or create a Battlelocation_tank
     * const battlelocation_tank = await prisma.battlelocation_tank.upsert({
     *   create: {
     *     // ... data to create a Battlelocation_tank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battlelocation_tank we want to update
     *   }
     * })
     */
    upsert<T extends battlelocation_tankUpsertArgs>(args: SelectSubset<T, battlelocation_tankUpsertArgs<ExtArgs>>): Prisma__battlelocation_tankClient<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battlelocation_tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_tankCountArgs} args - Arguments to filter Battlelocation_tanks to count.
     * @example
     * // Count the number of Battlelocation_tanks
     * const count = await prisma.battlelocation_tank.count({
     *   where: {
     *     // ... the filter for the Battlelocation_tanks we want to count
     *   }
     * })
    **/
    count<T extends battlelocation_tankCountArgs>(
      args?: Subset<T, battlelocation_tankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Battlelocation_tankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battlelocation_tank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Battlelocation_tankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Battlelocation_tankAggregateArgs>(args: Subset<T, Battlelocation_tankAggregateArgs>): Prisma.PrismaPromise<GetBattlelocation_tankAggregateType<T>>

    /**
     * Group by Battlelocation_tank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {battlelocation_tankGroupByArgs} args - Group by arguments.
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
      T extends battlelocation_tankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: battlelocation_tankGroupByArgs['orderBy'] }
        : { orderBy?: battlelocation_tankGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, battlelocation_tankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattlelocation_tankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the battlelocation_tank model
   */
  readonly fields: battlelocation_tankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for battlelocation_tank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__battlelocation_tankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battlelocation<T extends battlelocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, battlelocationDefaultArgs<ExtArgs>>): Prisma__battlelocationClient<$Result.GetResult<Prisma.$battlelocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tanks<T extends tanksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tanksDefaultArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the battlelocation_tank model
   */
  interface battlelocation_tankFieldRefs {
    readonly battlelocation_id: FieldRef<"battlelocation_tank", 'Int'>
    readonly tank_id: FieldRef<"battlelocation_tank", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * battlelocation_tank findUnique
   */
  export type battlelocation_tankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_tank to fetch.
     */
    where: battlelocation_tankWhereUniqueInput
  }

  /**
   * battlelocation_tank findUniqueOrThrow
   */
  export type battlelocation_tankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_tank to fetch.
     */
    where: battlelocation_tankWhereUniqueInput
  }

  /**
   * battlelocation_tank findFirst
   */
  export type battlelocation_tankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_tank to fetch.
     */
    where?: battlelocation_tankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocation_tanks to fetch.
     */
    orderBy?: battlelocation_tankOrderByWithRelationInput | battlelocation_tankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battlelocation_tanks.
     */
    cursor?: battlelocation_tankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocation_tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocation_tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battlelocation_tanks.
     */
    distinct?: Battlelocation_tankScalarFieldEnum | Battlelocation_tankScalarFieldEnum[]
  }

  /**
   * battlelocation_tank findFirstOrThrow
   */
  export type battlelocation_tankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_tank to fetch.
     */
    where?: battlelocation_tankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocation_tanks to fetch.
     */
    orderBy?: battlelocation_tankOrderByWithRelationInput | battlelocation_tankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for battlelocation_tanks.
     */
    cursor?: battlelocation_tankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocation_tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocation_tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of battlelocation_tanks.
     */
    distinct?: Battlelocation_tankScalarFieldEnum | Battlelocation_tankScalarFieldEnum[]
  }

  /**
   * battlelocation_tank findMany
   */
  export type battlelocation_tankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * Filter, which battlelocation_tanks to fetch.
     */
    where?: battlelocation_tankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of battlelocation_tanks to fetch.
     */
    orderBy?: battlelocation_tankOrderByWithRelationInput | battlelocation_tankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing battlelocation_tanks.
     */
    cursor?: battlelocation_tankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` battlelocation_tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` battlelocation_tanks.
     */
    skip?: number
    distinct?: Battlelocation_tankScalarFieldEnum | Battlelocation_tankScalarFieldEnum[]
  }

  /**
   * battlelocation_tank create
   */
  export type battlelocation_tankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * The data needed to create a battlelocation_tank.
     */
    data: XOR<battlelocation_tankCreateInput, battlelocation_tankUncheckedCreateInput>
  }

  /**
   * battlelocation_tank createMany
   */
  export type battlelocation_tankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many battlelocation_tanks.
     */
    data: battlelocation_tankCreateManyInput | battlelocation_tankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * battlelocation_tank update
   */
  export type battlelocation_tankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * The data needed to update a battlelocation_tank.
     */
    data: XOR<battlelocation_tankUpdateInput, battlelocation_tankUncheckedUpdateInput>
    /**
     * Choose, which battlelocation_tank to update.
     */
    where: battlelocation_tankWhereUniqueInput
  }

  /**
   * battlelocation_tank updateMany
   */
  export type battlelocation_tankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update battlelocation_tanks.
     */
    data: XOR<battlelocation_tankUpdateManyMutationInput, battlelocation_tankUncheckedUpdateManyInput>
    /**
     * Filter which battlelocation_tanks to update
     */
    where?: battlelocation_tankWhereInput
    /**
     * Limit how many battlelocation_tanks to update.
     */
    limit?: number
  }

  /**
   * battlelocation_tank upsert
   */
  export type battlelocation_tankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * The filter to search for the battlelocation_tank to update in case it exists.
     */
    where: battlelocation_tankWhereUniqueInput
    /**
     * In case the battlelocation_tank found by the `where` argument doesn't exist, create a new battlelocation_tank with this data.
     */
    create: XOR<battlelocation_tankCreateInput, battlelocation_tankUncheckedCreateInput>
    /**
     * In case the battlelocation_tank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<battlelocation_tankUpdateInput, battlelocation_tankUncheckedUpdateInput>
  }

  /**
   * battlelocation_tank delete
   */
  export type battlelocation_tankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    /**
     * Filter which battlelocation_tank to delete.
     */
    where: battlelocation_tankWhereUniqueInput
  }

  /**
   * battlelocation_tank deleteMany
   */
  export type battlelocation_tankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which battlelocation_tanks to delete
     */
    where?: battlelocation_tankWhereInput
    /**
     * Limit how many battlelocation_tanks to delete.
     */
    limit?: number
  }

  /**
   * battlelocation_tank without action
   */
  export type battlelocation_tankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
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
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    nickname: string | null
    password: string | null
    email: string | null
    role: string | null
    avatar_url: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    nickname: string | null
    password: string | null
    email: string | null
    role: string | null
    avatar_url: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    nickname: number
    password: number
    email: number
    role: number
    avatar_url: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    nickname?: true
    password?: true
    email?: true
    role?: true
    avatar_url?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    nickname?: true
    password?: true
    email?: true
    role?: true
    avatar_url?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    nickname?: true
    password?: true
    email?: true
    role?: true
    avatar_url?: true
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
    user_id: number
    nickname: string
    password: string
    email: string
    role: string
    avatar_url: string | null
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
    user_id?: boolean
    nickname?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    avatar_url?: boolean
    favourite_tanks?: boolean | users$favourite_tanksArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    user_id?: boolean
    nickname?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    avatar_url?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "nickname" | "password" | "email" | "role" | "avatar_url", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourite_tanks?: boolean | users$favourite_tanksArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      favourite_tanks: Prisma.$favourite_tanksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      nickname: string
      password: string
      email: string
      role: string
      avatar_url: string | null
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
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
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
    favourite_tanks<T extends users$favourite_tanksArgs<ExtArgs> = {}>(args?: Subset<T, users$favourite_tanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly user_id: FieldRef<"users", 'Int'>
    readonly nickname: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly avatar_url: FieldRef<"users", 'String'>
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
   * users.favourite_tanks
   */
  export type users$favourite_tanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    where?: favourite_tanksWhereInput
    orderBy?: favourite_tanksOrderByWithRelationInput | favourite_tanksOrderByWithRelationInput[]
    cursor?: favourite_tanksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Favourite_tanksScalarFieldEnum | Favourite_tanksScalarFieldEnum[]
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
   * Model favourite_tanks
   */

  export type AggregateFavourite_tanks = {
    _count: Favourite_tanksCountAggregateOutputType | null
    _avg: Favourite_tanksAvgAggregateOutputType | null
    _sum: Favourite_tanksSumAggregateOutputType | null
    _min: Favourite_tanksMinAggregateOutputType | null
    _max: Favourite_tanksMaxAggregateOutputType | null
  }

  export type Favourite_tanksAvgAggregateOutputType = {
    fav_id: number | null
    user_id: number | null
    tank_id: number | null
  }

  export type Favourite_tanksSumAggregateOutputType = {
    fav_id: number | null
    user_id: number | null
    tank_id: number | null
  }

  export type Favourite_tanksMinAggregateOutputType = {
    fav_id: number | null
    user_id: number | null
    tank_id: number | null
  }

  export type Favourite_tanksMaxAggregateOutputType = {
    fav_id: number | null
    user_id: number | null
    tank_id: number | null
  }

  export type Favourite_tanksCountAggregateOutputType = {
    fav_id: number
    user_id: number
    tank_id: number
    _all: number
  }


  export type Favourite_tanksAvgAggregateInputType = {
    fav_id?: true
    user_id?: true
    tank_id?: true
  }

  export type Favourite_tanksSumAggregateInputType = {
    fav_id?: true
    user_id?: true
    tank_id?: true
  }

  export type Favourite_tanksMinAggregateInputType = {
    fav_id?: true
    user_id?: true
    tank_id?: true
  }

  export type Favourite_tanksMaxAggregateInputType = {
    fav_id?: true
    user_id?: true
    tank_id?: true
  }

  export type Favourite_tanksCountAggregateInputType = {
    fav_id?: true
    user_id?: true
    tank_id?: true
    _all?: true
  }

  export type Favourite_tanksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favourite_tanks to aggregate.
     */
    where?: favourite_tanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourite_tanks to fetch.
     */
    orderBy?: favourite_tanksOrderByWithRelationInput | favourite_tanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favourite_tanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourite_tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourite_tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favourite_tanks
    **/
    _count?: true | Favourite_tanksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Favourite_tanksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Favourite_tanksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Favourite_tanksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Favourite_tanksMaxAggregateInputType
  }

  export type GetFavourite_tanksAggregateType<T extends Favourite_tanksAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourite_tanks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourite_tanks[P]>
      : GetScalarType<T[P], AggregateFavourite_tanks[P]>
  }




  export type favourite_tanksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favourite_tanksWhereInput
    orderBy?: favourite_tanksOrderByWithAggregationInput | favourite_tanksOrderByWithAggregationInput[]
    by: Favourite_tanksScalarFieldEnum[] | Favourite_tanksScalarFieldEnum
    having?: favourite_tanksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Favourite_tanksCountAggregateInputType | true
    _avg?: Favourite_tanksAvgAggregateInputType
    _sum?: Favourite_tanksSumAggregateInputType
    _min?: Favourite_tanksMinAggregateInputType
    _max?: Favourite_tanksMaxAggregateInputType
  }

  export type Favourite_tanksGroupByOutputType = {
    fav_id: number
    user_id: number
    tank_id: number
    _count: Favourite_tanksCountAggregateOutputType | null
    _avg: Favourite_tanksAvgAggregateOutputType | null
    _sum: Favourite_tanksSumAggregateOutputType | null
    _min: Favourite_tanksMinAggregateOutputType | null
    _max: Favourite_tanksMaxAggregateOutputType | null
  }

  type GetFavourite_tanksGroupByPayload<T extends favourite_tanksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Favourite_tanksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Favourite_tanksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Favourite_tanksGroupByOutputType[P]>
            : GetScalarType<T[P], Favourite_tanksGroupByOutputType[P]>
        }
      >
    >


  export type favourite_tanksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fav_id?: boolean
    user_id?: boolean
    tank_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    tanks?: boolean | tanksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite_tanks"]>



  export type favourite_tanksSelectScalar = {
    fav_id?: boolean
    user_id?: boolean
    tank_id?: boolean
  }

  export type favourite_tanksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fav_id" | "user_id" | "tank_id", ExtArgs["result"]["favourite_tanks"]>
  export type favourite_tanksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    tanks?: boolean | tanksDefaultArgs<ExtArgs>
  }

  export type $favourite_tanksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favourite_tanks"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      tanks: Prisma.$tanksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fav_id: number
      user_id: number
      tank_id: number
    }, ExtArgs["result"]["favourite_tanks"]>
    composites: {}
  }

  type favourite_tanksGetPayload<S extends boolean | null | undefined | favourite_tanksDefaultArgs> = $Result.GetResult<Prisma.$favourite_tanksPayload, S>

  type favourite_tanksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favourite_tanksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Favourite_tanksCountAggregateInputType | true
    }

  export interface favourite_tanksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favourite_tanks'], meta: { name: 'favourite_tanks' } }
    /**
     * Find zero or one Favourite_tanks that matches the filter.
     * @param {favourite_tanksFindUniqueArgs} args - Arguments to find a Favourite_tanks
     * @example
     * // Get one Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favourite_tanksFindUniqueArgs>(args: SelectSubset<T, favourite_tanksFindUniqueArgs<ExtArgs>>): Prisma__favourite_tanksClient<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favourite_tanks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favourite_tanksFindUniqueOrThrowArgs} args - Arguments to find a Favourite_tanks
     * @example
     * // Get one Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favourite_tanksFindUniqueOrThrowArgs>(args: SelectSubset<T, favourite_tanksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favourite_tanksClient<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite_tanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favourite_tanksFindFirstArgs} args - Arguments to find a Favourite_tanks
     * @example
     * // Get one Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favourite_tanksFindFirstArgs>(args?: SelectSubset<T, favourite_tanksFindFirstArgs<ExtArgs>>): Prisma__favourite_tanksClient<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite_tanks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favourite_tanksFindFirstOrThrowArgs} args - Arguments to find a Favourite_tanks
     * @example
     * // Get one Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favourite_tanksFindFirstOrThrowArgs>(args?: SelectSubset<T, favourite_tanksFindFirstOrThrowArgs<ExtArgs>>): Prisma__favourite_tanksClient<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourite_tanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favourite_tanksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.findMany()
     * 
     * // Get first 10 Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.findMany({ take: 10 })
     * 
     * // Only select the `fav_id`
     * const favourite_tanksWithFav_idOnly = await prisma.favourite_tanks.findMany({ select: { fav_id: true } })
     * 
     */
    findMany<T extends favourite_tanksFindManyArgs>(args?: SelectSubset<T, favourite_tanksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favourite_tanks.
     * @param {favourite_tanksCreateArgs} args - Arguments to create a Favourite_tanks.
     * @example
     * // Create one Favourite_tanks
     * const Favourite_tanks = await prisma.favourite_tanks.create({
     *   data: {
     *     // ... data to create a Favourite_tanks
     *   }
     * })
     * 
     */
    create<T extends favourite_tanksCreateArgs>(args: SelectSubset<T, favourite_tanksCreateArgs<ExtArgs>>): Prisma__favourite_tanksClient<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favourite_tanks.
     * @param {favourite_tanksCreateManyArgs} args - Arguments to create many Favourite_tanks.
     * @example
     * // Create many Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favourite_tanksCreateManyArgs>(args?: SelectSubset<T, favourite_tanksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favourite_tanks.
     * @param {favourite_tanksDeleteArgs} args - Arguments to delete one Favourite_tanks.
     * @example
     * // Delete one Favourite_tanks
     * const Favourite_tanks = await prisma.favourite_tanks.delete({
     *   where: {
     *     // ... filter to delete one Favourite_tanks
     *   }
     * })
     * 
     */
    delete<T extends favourite_tanksDeleteArgs>(args: SelectSubset<T, favourite_tanksDeleteArgs<ExtArgs>>): Prisma__favourite_tanksClient<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favourite_tanks.
     * @param {favourite_tanksUpdateArgs} args - Arguments to update one Favourite_tanks.
     * @example
     * // Update one Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favourite_tanksUpdateArgs>(args: SelectSubset<T, favourite_tanksUpdateArgs<ExtArgs>>): Prisma__favourite_tanksClient<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favourite_tanks.
     * @param {favourite_tanksDeleteManyArgs} args - Arguments to filter Favourite_tanks to delete.
     * @example
     * // Delete a few Favourite_tanks
     * const { count } = await prisma.favourite_tanks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favourite_tanksDeleteManyArgs>(args?: SelectSubset<T, favourite_tanksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourite_tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favourite_tanksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favourite_tanksUpdateManyArgs>(args: SelectSubset<T, favourite_tanksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favourite_tanks.
     * @param {favourite_tanksUpsertArgs} args - Arguments to update or create a Favourite_tanks.
     * @example
     * // Update or create a Favourite_tanks
     * const favourite_tanks = await prisma.favourite_tanks.upsert({
     *   create: {
     *     // ... data to create a Favourite_tanks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourite_tanks we want to update
     *   }
     * })
     */
    upsert<T extends favourite_tanksUpsertArgs>(args: SelectSubset<T, favourite_tanksUpsertArgs<ExtArgs>>): Prisma__favourite_tanksClient<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favourite_tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favourite_tanksCountArgs} args - Arguments to filter Favourite_tanks to count.
     * @example
     * // Count the number of Favourite_tanks
     * const count = await prisma.favourite_tanks.count({
     *   where: {
     *     // ... the filter for the Favourite_tanks we want to count
     *   }
     * })
    **/
    count<T extends favourite_tanksCountArgs>(
      args?: Subset<T, favourite_tanksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Favourite_tanksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourite_tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Favourite_tanksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Favourite_tanksAggregateArgs>(args: Subset<T, Favourite_tanksAggregateArgs>): Prisma.PrismaPromise<GetFavourite_tanksAggregateType<T>>

    /**
     * Group by Favourite_tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favourite_tanksGroupByArgs} args - Group by arguments.
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
      T extends favourite_tanksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favourite_tanksGroupByArgs['orderBy'] }
        : { orderBy?: favourite_tanksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, favourite_tanksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavourite_tanksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favourite_tanks model
   */
  readonly fields: favourite_tanksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favourite_tanks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favourite_tanksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tanks<T extends tanksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tanksDefaultArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the favourite_tanks model
   */
  interface favourite_tanksFieldRefs {
    readonly fav_id: FieldRef<"favourite_tanks", 'Int'>
    readonly user_id: FieldRef<"favourite_tanks", 'Int'>
    readonly tank_id: FieldRef<"favourite_tanks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * favourite_tanks findUnique
   */
  export type favourite_tanksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * Filter, which favourite_tanks to fetch.
     */
    where: favourite_tanksWhereUniqueInput
  }

  /**
   * favourite_tanks findUniqueOrThrow
   */
  export type favourite_tanksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * Filter, which favourite_tanks to fetch.
     */
    where: favourite_tanksWhereUniqueInput
  }

  /**
   * favourite_tanks findFirst
   */
  export type favourite_tanksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * Filter, which favourite_tanks to fetch.
     */
    where?: favourite_tanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourite_tanks to fetch.
     */
    orderBy?: favourite_tanksOrderByWithRelationInput | favourite_tanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favourite_tanks.
     */
    cursor?: favourite_tanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourite_tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourite_tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favourite_tanks.
     */
    distinct?: Favourite_tanksScalarFieldEnum | Favourite_tanksScalarFieldEnum[]
  }

  /**
   * favourite_tanks findFirstOrThrow
   */
  export type favourite_tanksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * Filter, which favourite_tanks to fetch.
     */
    where?: favourite_tanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourite_tanks to fetch.
     */
    orderBy?: favourite_tanksOrderByWithRelationInput | favourite_tanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favourite_tanks.
     */
    cursor?: favourite_tanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourite_tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourite_tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favourite_tanks.
     */
    distinct?: Favourite_tanksScalarFieldEnum | Favourite_tanksScalarFieldEnum[]
  }

  /**
   * favourite_tanks findMany
   */
  export type favourite_tanksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * Filter, which favourite_tanks to fetch.
     */
    where?: favourite_tanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourite_tanks to fetch.
     */
    orderBy?: favourite_tanksOrderByWithRelationInput | favourite_tanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favourite_tanks.
     */
    cursor?: favourite_tanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourite_tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourite_tanks.
     */
    skip?: number
    distinct?: Favourite_tanksScalarFieldEnum | Favourite_tanksScalarFieldEnum[]
  }

  /**
   * favourite_tanks create
   */
  export type favourite_tanksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * The data needed to create a favourite_tanks.
     */
    data: XOR<favourite_tanksCreateInput, favourite_tanksUncheckedCreateInput>
  }

  /**
   * favourite_tanks createMany
   */
  export type favourite_tanksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favourite_tanks.
     */
    data: favourite_tanksCreateManyInput | favourite_tanksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favourite_tanks update
   */
  export type favourite_tanksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * The data needed to update a favourite_tanks.
     */
    data: XOR<favourite_tanksUpdateInput, favourite_tanksUncheckedUpdateInput>
    /**
     * Choose, which favourite_tanks to update.
     */
    where: favourite_tanksWhereUniqueInput
  }

  /**
   * favourite_tanks updateMany
   */
  export type favourite_tanksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favourite_tanks.
     */
    data: XOR<favourite_tanksUpdateManyMutationInput, favourite_tanksUncheckedUpdateManyInput>
    /**
     * Filter which favourite_tanks to update
     */
    where?: favourite_tanksWhereInput
    /**
     * Limit how many favourite_tanks to update.
     */
    limit?: number
  }

  /**
   * favourite_tanks upsert
   */
  export type favourite_tanksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * The filter to search for the favourite_tanks to update in case it exists.
     */
    where: favourite_tanksWhereUniqueInput
    /**
     * In case the favourite_tanks found by the `where` argument doesn't exist, create a new favourite_tanks with this data.
     */
    create: XOR<favourite_tanksCreateInput, favourite_tanksUncheckedCreateInput>
    /**
     * In case the favourite_tanks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favourite_tanksUpdateInput, favourite_tanksUncheckedUpdateInput>
  }

  /**
   * favourite_tanks delete
   */
  export type favourite_tanksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    /**
     * Filter which favourite_tanks to delete.
     */
    where: favourite_tanksWhereUniqueInput
  }

  /**
   * favourite_tanks deleteMany
   */
  export type favourite_tanksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favourite_tanks to delete
     */
    where?: favourite_tanksWhereInput
    /**
     * Limit how many favourite_tanks to delete.
     */
    limit?: number
  }

  /**
   * favourite_tanks without action
   */
  export type favourite_tanksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
  }


  /**
   * Model photos
   */

  export type AggregatePhotos = {
    _count: PhotosCountAggregateOutputType | null
    _avg: PhotosAvgAggregateOutputType | null
    _sum: PhotosSumAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  export type PhotosAvgAggregateOutputType = {
    photo_id: number | null
  }

  export type PhotosSumAggregateOutputType = {
    photo_id: number | null
  }

  export type PhotosMinAggregateOutputType = {
    photo_id: number | null
    filename: string | null
    filepath: string | null
  }

  export type PhotosMaxAggregateOutputType = {
    photo_id: number | null
    filename: string | null
    filepath: string | null
  }

  export type PhotosCountAggregateOutputType = {
    photo_id: number
    filename: number
    filepath: number
    _all: number
  }


  export type PhotosAvgAggregateInputType = {
    photo_id?: true
  }

  export type PhotosSumAggregateInputType = {
    photo_id?: true
  }

  export type PhotosMinAggregateInputType = {
    photo_id?: true
    filename?: true
    filepath?: true
  }

  export type PhotosMaxAggregateInputType = {
    photo_id?: true
    filename?: true
    filepath?: true
  }

  export type PhotosCountAggregateInputType = {
    photo_id?: true
    filename?: true
    filepath?: true
    _all?: true
  }

  export type PhotosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which photos to aggregate.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned photos
    **/
    _count?: true | PhotosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotosMaxAggregateInputType
  }

  export type GetPhotosAggregateType<T extends PhotosAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotos[P]>
      : GetScalarType<T[P], AggregatePhotos[P]>
  }




  export type photosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: photosWhereInput
    orderBy?: photosOrderByWithAggregationInput | photosOrderByWithAggregationInput[]
    by: PhotosScalarFieldEnum[] | PhotosScalarFieldEnum
    having?: photosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotosCountAggregateInputType | true
    _avg?: PhotosAvgAggregateInputType
    _sum?: PhotosSumAggregateInputType
    _min?: PhotosMinAggregateInputType
    _max?: PhotosMaxAggregateInputType
  }

  export type PhotosGroupByOutputType = {
    photo_id: number
    filename: string
    filepath: string
    _count: PhotosCountAggregateOutputType | null
    _avg: PhotosAvgAggregateOutputType | null
    _sum: PhotosSumAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  type GetPhotosGroupByPayload<T extends photosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotosGroupByOutputType[P]>
            : GetScalarType<T[P], PhotosGroupByOutputType[P]>
        }
      >
    >


  export type photosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    photo_id?: boolean
    filename?: boolean
    filepath?: boolean
    tanks?: boolean | photos$tanksArgs<ExtArgs>
    _count?: boolean | PhotosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>



  export type photosSelectScalar = {
    photo_id?: boolean
    filename?: boolean
    filepath?: boolean
  }

  export type photosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"photo_id" | "filename" | "filepath", ExtArgs["result"]["photos"]>
  export type photosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanks?: boolean | photos$tanksArgs<ExtArgs>
    _count?: boolean | PhotosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $photosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "photos"
    objects: {
      tanks: Prisma.$tank_photosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      photo_id: number
      filename: string
      filepath: string
    }, ExtArgs["result"]["photos"]>
    composites: {}
  }

  type photosGetPayload<S extends boolean | null | undefined | photosDefaultArgs> = $Result.GetResult<Prisma.$photosPayload, S>

  type photosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<photosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotosCountAggregateInputType | true
    }

  export interface photosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['photos'], meta: { name: 'photos' } }
    /**
     * Find zero or one Photos that matches the filter.
     * @param {photosFindUniqueArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends photosFindUniqueArgs>(args: SelectSubset<T, photosFindUniqueArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {photosFindUniqueOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends photosFindUniqueOrThrowArgs>(args: SelectSubset<T, photosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindFirstArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends photosFindFirstArgs>(args?: SelectSubset<T, photosFindFirstArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindFirstOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends photosFindFirstOrThrowArgs>(args?: SelectSubset<T, photosFindFirstOrThrowArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photos.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photos.findMany({ take: 10 })
     * 
     * // Only select the `photo_id`
     * const photosWithPhoto_idOnly = await prisma.photos.findMany({ select: { photo_id: true } })
     * 
     */
    findMany<T extends photosFindManyArgs>(args?: SelectSubset<T, photosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photos.
     * @param {photosCreateArgs} args - Arguments to create a Photos.
     * @example
     * // Create one Photos
     * const Photos = await prisma.photos.create({
     *   data: {
     *     // ... data to create a Photos
     *   }
     * })
     * 
     */
    create<T extends photosCreateArgs>(args: SelectSubset<T, photosCreateArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {photosCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photos = await prisma.photos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends photosCreateManyArgs>(args?: SelectSubset<T, photosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photos.
     * @param {photosDeleteArgs} args - Arguments to delete one Photos.
     * @example
     * // Delete one Photos
     * const Photos = await prisma.photos.delete({
     *   where: {
     *     // ... filter to delete one Photos
     *   }
     * })
     * 
     */
    delete<T extends photosDeleteArgs>(args: SelectSubset<T, photosDeleteArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photos.
     * @param {photosUpdateArgs} args - Arguments to update one Photos.
     * @example
     * // Update one Photos
     * const photos = await prisma.photos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends photosUpdateArgs>(args: SelectSubset<T, photosUpdateArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {photosDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends photosDeleteManyArgs>(args?: SelectSubset<T, photosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photos = await prisma.photos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends photosUpdateManyArgs>(args: SelectSubset<T, photosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photos.
     * @param {photosUpsertArgs} args - Arguments to update or create a Photos.
     * @example
     * // Update or create a Photos
     * const photos = await prisma.photos.upsert({
     *   create: {
     *     // ... data to create a Photos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photos we want to update
     *   }
     * })
     */
    upsert<T extends photosUpsertArgs>(args: SelectSubset<T, photosUpsertArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photos.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends photosCountArgs>(
      args?: Subset<T, photosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotosAggregateArgs>(args: Subset<T, PhotosAggregateArgs>): Prisma.PrismaPromise<GetPhotosAggregateType<T>>

    /**
     * Group by Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosGroupByArgs} args - Group by arguments.
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
      T extends photosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: photosGroupByArgs['orderBy'] }
        : { orderBy?: photosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, photosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the photos model
   */
  readonly fields: photosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for photos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__photosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanks<T extends photos$tanksArgs<ExtArgs> = {}>(args?: Subset<T, photos$tanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the photos model
   */
  interface photosFieldRefs {
    readonly photo_id: FieldRef<"photos", 'Int'>
    readonly filename: FieldRef<"photos", 'String'>
    readonly filepath: FieldRef<"photos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * photos findUnique
   */
  export type photosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos findUniqueOrThrow
   */
  export type photosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos findFirst
   */
  export type photosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos findFirstOrThrow
   */
  export type photosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos findMany
   */
  export type photosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos create
   */
  export type photosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The data needed to create a photos.
     */
    data: XOR<photosCreateInput, photosUncheckedCreateInput>
  }

  /**
   * photos createMany
   */
  export type photosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many photos.
     */
    data: photosCreateManyInput | photosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * photos update
   */
  export type photosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The data needed to update a photos.
     */
    data: XOR<photosUpdateInput, photosUncheckedUpdateInput>
    /**
     * Choose, which photos to update.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos updateMany
   */
  export type photosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update photos.
     */
    data: XOR<photosUpdateManyMutationInput, photosUncheckedUpdateManyInput>
    /**
     * Filter which photos to update
     */
    where?: photosWhereInput
    /**
     * Limit how many photos to update.
     */
    limit?: number
  }

  /**
   * photos upsert
   */
  export type photosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The filter to search for the photos to update in case it exists.
     */
    where: photosWhereUniqueInput
    /**
     * In case the photos found by the `where` argument doesn't exist, create a new photos with this data.
     */
    create: XOR<photosCreateInput, photosUncheckedCreateInput>
    /**
     * In case the photos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<photosUpdateInput, photosUncheckedUpdateInput>
  }

  /**
   * photos delete
   */
  export type photosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter which photos to delete.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos deleteMany
   */
  export type photosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which photos to delete
     */
    where?: photosWhereInput
    /**
     * Limit how many photos to delete.
     */
    limit?: number
  }

  /**
   * photos.tanks
   */
  export type photos$tanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    where?: tank_photosWhereInput
    orderBy?: tank_photosOrderByWithRelationInput | tank_photosOrderByWithRelationInput[]
    cursor?: tank_photosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tank_photosScalarFieldEnum | Tank_photosScalarFieldEnum[]
  }

  /**
   * photos without action
   */
  export type photosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
  }


  /**
   * Model tank_photos
   */

  export type AggregateTank_photos = {
    _count: Tank_photosCountAggregateOutputType | null
    _avg: Tank_photosAvgAggregateOutputType | null
    _sum: Tank_photosSumAggregateOutputType | null
    _min: Tank_photosMinAggregateOutputType | null
    _max: Tank_photosMaxAggregateOutputType | null
  }

  export type Tank_photosAvgAggregateOutputType = {
    id: number | null
    tank_id: number | null
    photo_id: number | null
  }

  export type Tank_photosSumAggregateOutputType = {
    id: number | null
    tank_id: number | null
    photo_id: number | null
  }

  export type Tank_photosMinAggregateOutputType = {
    id: number | null
    tank_id: number | null
    photo_id: number | null
  }

  export type Tank_photosMaxAggregateOutputType = {
    id: number | null
    tank_id: number | null
    photo_id: number | null
  }

  export type Tank_photosCountAggregateOutputType = {
    id: number
    tank_id: number
    photo_id: number
    _all: number
  }


  export type Tank_photosAvgAggregateInputType = {
    id?: true
    tank_id?: true
    photo_id?: true
  }

  export type Tank_photosSumAggregateInputType = {
    id?: true
    tank_id?: true
    photo_id?: true
  }

  export type Tank_photosMinAggregateInputType = {
    id?: true
    tank_id?: true
    photo_id?: true
  }

  export type Tank_photosMaxAggregateInputType = {
    id?: true
    tank_id?: true
    photo_id?: true
  }

  export type Tank_photosCountAggregateInputType = {
    id?: true
    tank_id?: true
    photo_id?: true
    _all?: true
  }

  export type Tank_photosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tank_photos to aggregate.
     */
    where?: tank_photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tank_photos to fetch.
     */
    orderBy?: tank_photosOrderByWithRelationInput | tank_photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tank_photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tank_photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tank_photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tank_photos
    **/
    _count?: true | Tank_photosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tank_photosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tank_photosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tank_photosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tank_photosMaxAggregateInputType
  }

  export type GetTank_photosAggregateType<T extends Tank_photosAggregateArgs> = {
        [P in keyof T & keyof AggregateTank_photos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTank_photos[P]>
      : GetScalarType<T[P], AggregateTank_photos[P]>
  }




  export type tank_photosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tank_photosWhereInput
    orderBy?: tank_photosOrderByWithAggregationInput | tank_photosOrderByWithAggregationInput[]
    by: Tank_photosScalarFieldEnum[] | Tank_photosScalarFieldEnum
    having?: tank_photosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tank_photosCountAggregateInputType | true
    _avg?: Tank_photosAvgAggregateInputType
    _sum?: Tank_photosSumAggregateInputType
    _min?: Tank_photosMinAggregateInputType
    _max?: Tank_photosMaxAggregateInputType
  }

  export type Tank_photosGroupByOutputType = {
    id: number
    tank_id: number
    photo_id: number
    _count: Tank_photosCountAggregateOutputType | null
    _avg: Tank_photosAvgAggregateOutputType | null
    _sum: Tank_photosSumAggregateOutputType | null
    _min: Tank_photosMinAggregateOutputType | null
    _max: Tank_photosMaxAggregateOutputType | null
  }

  type GetTank_photosGroupByPayload<T extends tank_photosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tank_photosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tank_photosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tank_photosGroupByOutputType[P]>
            : GetScalarType<T[P], Tank_photosGroupByOutputType[P]>
        }
      >
    >


  export type tank_photosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tank_id?: boolean
    photo_id?: boolean
    tanks?: boolean | tanksDefaultArgs<ExtArgs>
    photos?: boolean | photosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tank_photos"]>



  export type tank_photosSelectScalar = {
    id?: boolean
    tank_id?: boolean
    photo_id?: boolean
  }

  export type tank_photosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tank_id" | "photo_id", ExtArgs["result"]["tank_photos"]>
  export type tank_photosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanks?: boolean | tanksDefaultArgs<ExtArgs>
    photos?: boolean | photosDefaultArgs<ExtArgs>
  }

  export type $tank_photosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tank_photos"
    objects: {
      tanks: Prisma.$tanksPayload<ExtArgs>
      photos: Prisma.$photosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tank_id: number
      photo_id: number
    }, ExtArgs["result"]["tank_photos"]>
    composites: {}
  }

  type tank_photosGetPayload<S extends boolean | null | undefined | tank_photosDefaultArgs> = $Result.GetResult<Prisma.$tank_photosPayload, S>

  type tank_photosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tank_photosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tank_photosCountAggregateInputType | true
    }

  export interface tank_photosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tank_photos'], meta: { name: 'tank_photos' } }
    /**
     * Find zero or one Tank_photos that matches the filter.
     * @param {tank_photosFindUniqueArgs} args - Arguments to find a Tank_photos
     * @example
     * // Get one Tank_photos
     * const tank_photos = await prisma.tank_photos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tank_photosFindUniqueArgs>(args: SelectSubset<T, tank_photosFindUniqueArgs<ExtArgs>>): Prisma__tank_photosClient<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tank_photos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tank_photosFindUniqueOrThrowArgs} args - Arguments to find a Tank_photos
     * @example
     * // Get one Tank_photos
     * const tank_photos = await prisma.tank_photos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tank_photosFindUniqueOrThrowArgs>(args: SelectSubset<T, tank_photosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tank_photosClient<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tank_photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tank_photosFindFirstArgs} args - Arguments to find a Tank_photos
     * @example
     * // Get one Tank_photos
     * const tank_photos = await prisma.tank_photos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tank_photosFindFirstArgs>(args?: SelectSubset<T, tank_photosFindFirstArgs<ExtArgs>>): Prisma__tank_photosClient<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tank_photos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tank_photosFindFirstOrThrowArgs} args - Arguments to find a Tank_photos
     * @example
     * // Get one Tank_photos
     * const tank_photos = await prisma.tank_photos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tank_photosFindFirstOrThrowArgs>(args?: SelectSubset<T, tank_photosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tank_photosClient<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tank_photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tank_photosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tank_photos
     * const tank_photos = await prisma.tank_photos.findMany()
     * 
     * // Get first 10 Tank_photos
     * const tank_photos = await prisma.tank_photos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tank_photosWithIdOnly = await prisma.tank_photos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tank_photosFindManyArgs>(args?: SelectSubset<T, tank_photosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tank_photos.
     * @param {tank_photosCreateArgs} args - Arguments to create a Tank_photos.
     * @example
     * // Create one Tank_photos
     * const Tank_photos = await prisma.tank_photos.create({
     *   data: {
     *     // ... data to create a Tank_photos
     *   }
     * })
     * 
     */
    create<T extends tank_photosCreateArgs>(args: SelectSubset<T, tank_photosCreateArgs<ExtArgs>>): Prisma__tank_photosClient<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tank_photos.
     * @param {tank_photosCreateManyArgs} args - Arguments to create many Tank_photos.
     * @example
     * // Create many Tank_photos
     * const tank_photos = await prisma.tank_photos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tank_photosCreateManyArgs>(args?: SelectSubset<T, tank_photosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tank_photos.
     * @param {tank_photosDeleteArgs} args - Arguments to delete one Tank_photos.
     * @example
     * // Delete one Tank_photos
     * const Tank_photos = await prisma.tank_photos.delete({
     *   where: {
     *     // ... filter to delete one Tank_photos
     *   }
     * })
     * 
     */
    delete<T extends tank_photosDeleteArgs>(args: SelectSubset<T, tank_photosDeleteArgs<ExtArgs>>): Prisma__tank_photosClient<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tank_photos.
     * @param {tank_photosUpdateArgs} args - Arguments to update one Tank_photos.
     * @example
     * // Update one Tank_photos
     * const tank_photos = await prisma.tank_photos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tank_photosUpdateArgs>(args: SelectSubset<T, tank_photosUpdateArgs<ExtArgs>>): Prisma__tank_photosClient<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tank_photos.
     * @param {tank_photosDeleteManyArgs} args - Arguments to filter Tank_photos to delete.
     * @example
     * // Delete a few Tank_photos
     * const { count } = await prisma.tank_photos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tank_photosDeleteManyArgs>(args?: SelectSubset<T, tank_photosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tank_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tank_photosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tank_photos
     * const tank_photos = await prisma.tank_photos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tank_photosUpdateManyArgs>(args: SelectSubset<T, tank_photosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tank_photos.
     * @param {tank_photosUpsertArgs} args - Arguments to update or create a Tank_photos.
     * @example
     * // Update or create a Tank_photos
     * const tank_photos = await prisma.tank_photos.upsert({
     *   create: {
     *     // ... data to create a Tank_photos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tank_photos we want to update
     *   }
     * })
     */
    upsert<T extends tank_photosUpsertArgs>(args: SelectSubset<T, tank_photosUpsertArgs<ExtArgs>>): Prisma__tank_photosClient<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tank_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tank_photosCountArgs} args - Arguments to filter Tank_photos to count.
     * @example
     * // Count the number of Tank_photos
     * const count = await prisma.tank_photos.count({
     *   where: {
     *     // ... the filter for the Tank_photos we want to count
     *   }
     * })
    **/
    count<T extends tank_photosCountArgs>(
      args?: Subset<T, tank_photosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tank_photosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tank_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tank_photosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tank_photosAggregateArgs>(args: Subset<T, Tank_photosAggregateArgs>): Prisma.PrismaPromise<GetTank_photosAggregateType<T>>

    /**
     * Group by Tank_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tank_photosGroupByArgs} args - Group by arguments.
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
      T extends tank_photosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tank_photosGroupByArgs['orderBy'] }
        : { orderBy?: tank_photosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tank_photosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTank_photosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tank_photos model
   */
  readonly fields: tank_photosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tank_photos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tank_photosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanks<T extends tanksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tanksDefaultArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends photosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, photosDefaultArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tank_photos model
   */
  interface tank_photosFieldRefs {
    readonly id: FieldRef<"tank_photos", 'Int'>
    readonly tank_id: FieldRef<"tank_photos", 'Int'>
    readonly photo_id: FieldRef<"tank_photos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tank_photos findUnique
   */
  export type tank_photosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * Filter, which tank_photos to fetch.
     */
    where: tank_photosWhereUniqueInput
  }

  /**
   * tank_photos findUniqueOrThrow
   */
  export type tank_photosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * Filter, which tank_photos to fetch.
     */
    where: tank_photosWhereUniqueInput
  }

  /**
   * tank_photos findFirst
   */
  export type tank_photosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * Filter, which tank_photos to fetch.
     */
    where?: tank_photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tank_photos to fetch.
     */
    orderBy?: tank_photosOrderByWithRelationInput | tank_photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tank_photos.
     */
    cursor?: tank_photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tank_photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tank_photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tank_photos.
     */
    distinct?: Tank_photosScalarFieldEnum | Tank_photosScalarFieldEnum[]
  }

  /**
   * tank_photos findFirstOrThrow
   */
  export type tank_photosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * Filter, which tank_photos to fetch.
     */
    where?: tank_photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tank_photos to fetch.
     */
    orderBy?: tank_photosOrderByWithRelationInput | tank_photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tank_photos.
     */
    cursor?: tank_photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tank_photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tank_photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tank_photos.
     */
    distinct?: Tank_photosScalarFieldEnum | Tank_photosScalarFieldEnum[]
  }

  /**
   * tank_photos findMany
   */
  export type tank_photosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * Filter, which tank_photos to fetch.
     */
    where?: tank_photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tank_photos to fetch.
     */
    orderBy?: tank_photosOrderByWithRelationInput | tank_photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tank_photos.
     */
    cursor?: tank_photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tank_photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tank_photos.
     */
    skip?: number
    distinct?: Tank_photosScalarFieldEnum | Tank_photosScalarFieldEnum[]
  }

  /**
   * tank_photos create
   */
  export type tank_photosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * The data needed to create a tank_photos.
     */
    data: XOR<tank_photosCreateInput, tank_photosUncheckedCreateInput>
  }

  /**
   * tank_photos createMany
   */
  export type tank_photosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tank_photos.
     */
    data: tank_photosCreateManyInput | tank_photosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tank_photos update
   */
  export type tank_photosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * The data needed to update a tank_photos.
     */
    data: XOR<tank_photosUpdateInput, tank_photosUncheckedUpdateInput>
    /**
     * Choose, which tank_photos to update.
     */
    where: tank_photosWhereUniqueInput
  }

  /**
   * tank_photos updateMany
   */
  export type tank_photosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tank_photos.
     */
    data: XOR<tank_photosUpdateManyMutationInput, tank_photosUncheckedUpdateManyInput>
    /**
     * Filter which tank_photos to update
     */
    where?: tank_photosWhereInput
    /**
     * Limit how many tank_photos to update.
     */
    limit?: number
  }

  /**
   * tank_photos upsert
   */
  export type tank_photosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * The filter to search for the tank_photos to update in case it exists.
     */
    where: tank_photosWhereUniqueInput
    /**
     * In case the tank_photos found by the `where` argument doesn't exist, create a new tank_photos with this data.
     */
    create: XOR<tank_photosCreateInput, tank_photosUncheckedCreateInput>
    /**
     * In case the tank_photos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tank_photosUpdateInput, tank_photosUncheckedUpdateInput>
  }

  /**
   * tank_photos delete
   */
  export type tank_photosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    /**
     * Filter which tank_photos to delete.
     */
    where: tank_photosWhereUniqueInput
  }

  /**
   * tank_photos deleteMany
   */
  export type tank_photosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tank_photos to delete
     */
    where?: tank_photosWhereInput
    /**
     * Limit how many tank_photos to delete.
     */
    limit?: number
  }

  /**
   * tank_photos without action
   */
  export type tank_photosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
  }


  /**
   * Model countries
   */

  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    country_id: number | null
  }

  export type CountriesSumAggregateOutputType = {
    country_id: number | null
  }

  export type CountriesMinAggregateOutputType = {
    country_id: number | null
    name: string | null
  }

  export type CountriesMaxAggregateOutputType = {
    country_id: number | null
    name: string | null
  }

  export type CountriesCountAggregateOutputType = {
    country_id: number
    name: number
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    country_id?: true
  }

  export type CountriesSumAggregateInputType = {
    country_id?: true
  }

  export type CountriesMinAggregateInputType = {
    country_id?: true
    name?: true
  }

  export type CountriesMaxAggregateInputType = {
    country_id?: true
    name?: true
  }

  export type CountriesCountAggregateInputType = {
    country_id?: true
    name?: true
    _all?: true
  }

  export type CountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to aggregate.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type countriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: countriesWhereInput
    orderBy?: countriesOrderByWithAggregationInput | countriesOrderByWithAggregationInput[]
    by: CountriesScalarFieldEnum[] | CountriesScalarFieldEnum
    having?: countriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _avg?: CountriesAvgAggregateInputType
    _sum?: CountriesSumAggregateInputType
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }

  export type CountriesGroupByOutputType = {
    country_id: number
    name: string
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends countriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type countriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    country_id?: boolean
    name?: boolean
    battleCountries?: boolean | countries$battleCountriesArgs<ExtArgs>
    tanks?: boolean | countries$tanksArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countries"]>



  export type countriesSelectScalar = {
    country_id?: boolean
    name?: boolean
  }

  export type countriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"country_id" | "name", ExtArgs["result"]["countries"]>
  export type countriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    battleCountries?: boolean | countries$battleCountriesArgs<ExtArgs>
    tanks?: boolean | countries$tanksArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $countriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "countries"
    objects: {
      battleCountries: Prisma.$battlelocation_countryPayload<ExtArgs>[]
      tanks: Prisma.$tanksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      country_id: number
      name: string
    }, ExtArgs["result"]["countries"]>
    composites: {}
  }

  type countriesGetPayload<S extends boolean | null | undefined | countriesDefaultArgs> = $Result.GetResult<Prisma.$countriesPayload, S>

  type countriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<countriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface countriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['countries'], meta: { name: 'countries' } }
    /**
     * Find zero or one Countries that matches the filter.
     * @param {countriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends countriesFindUniqueArgs>(args: SelectSubset<T, countriesFindUniqueArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Countries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {countriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends countriesFindUniqueOrThrowArgs>(args: SelectSubset<T, countriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends countriesFindFirstArgs>(args?: SelectSubset<T, countriesFindFirstArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends countriesFindFirstOrThrowArgs>(args?: SelectSubset<T, countriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `country_id`
     * const countriesWithCountry_idOnly = await prisma.countries.findMany({ select: { country_id: true } })
     * 
     */
    findMany<T extends countriesFindManyArgs>(args?: SelectSubset<T, countriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Countries.
     * @param {countriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
     */
    create<T extends countriesCreateArgs>(args: SelectSubset<T, countriesCreateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {countriesCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends countriesCreateManyArgs>(args?: SelectSubset<T, countriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Countries.
     * @param {countriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
     */
    delete<T extends countriesDeleteArgs>(args: SelectSubset<T, countriesDeleteArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Countries.
     * @param {countriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends countriesUpdateArgs>(args: SelectSubset<T, countriesUpdateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {countriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends countriesDeleteManyArgs>(args?: SelectSubset<T, countriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends countriesUpdateManyArgs>(args: SelectSubset<T, countriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Countries.
     * @param {countriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
     */
    upsert<T extends countriesUpsertArgs>(args: SelectSubset<T, countriesUpsertArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countriesCountArgs>(
      args?: Subset<T, countriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesGroupByArgs} args - Group by arguments.
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
      T extends countriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: countriesGroupByArgs['orderBy'] }
        : { orderBy?: countriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, countriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the countries model
   */
  readonly fields: countriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__countriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    battleCountries<T extends countries$battleCountriesArgs<ExtArgs> = {}>(args?: Subset<T, countries$battleCountriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlelocation_countryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tanks<T extends countries$tanksArgs<ExtArgs> = {}>(args?: Subset<T, countries$tanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the countries model
   */
  interface countriesFieldRefs {
    readonly country_id: FieldRef<"countries", 'Int'>
    readonly name: FieldRef<"countries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * countries findUnique
   */
  export type countriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findUniqueOrThrow
   */
  export type countriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findFirst
   */
  export type countriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findFirstOrThrow
   */
  export type countriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findMany
   */
  export type countriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries create
   */
  export type countriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * The data needed to create a countries.
     */
    data: XOR<countriesCreateInput, countriesUncheckedCreateInput>
  }

  /**
   * countries createMany
   */
  export type countriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many countries.
     */
    data: countriesCreateManyInput | countriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * countries update
   */
  export type countriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * The data needed to update a countries.
     */
    data: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
    /**
     * Choose, which countries to update.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries updateMany
   */
  export type countriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update countries.
     */
    data: XOR<countriesUpdateManyMutationInput, countriesUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * countries upsert
   */
  export type countriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * The filter to search for the countries to update in case it exists.
     */
    where: countriesWhereUniqueInput
    /**
     * In case the countries found by the `where` argument doesn't exist, create a new countries with this data.
     */
    create: XOR<countriesCreateInput, countriesUncheckedCreateInput>
    /**
     * In case the countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
  }

  /**
   * countries delete
   */
  export type countriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    /**
     * Filter which countries to delete.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries deleteMany
   */
  export type countriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to delete
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to delete.
     */
    limit?: number
  }

  /**
   * countries.battleCountries
   */
  export type countries$battleCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_country
     */
    select?: battlelocation_countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_country
     */
    omit?: battlelocation_countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_countryInclude<ExtArgs> | null
    where?: battlelocation_countryWhereInput
    orderBy?: battlelocation_countryOrderByWithRelationInput | battlelocation_countryOrderByWithRelationInput[]
    cursor?: battlelocation_countryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battlelocation_countryScalarFieldEnum | Battlelocation_countryScalarFieldEnum[]
  }

  /**
   * countries.tanks
   */
  export type countries$tanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    where?: tanksWhereInput
    orderBy?: tanksOrderByWithRelationInput | tanksOrderByWithRelationInput[]
    cursor?: tanksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TanksScalarFieldEnum | TanksScalarFieldEnum[]
  }

  /**
   * countries without action
   */
  export type countriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
  }


  /**
   * Model vehicle_types
   */

  export type AggregateVehicle_types = {
    _count: Vehicle_typesCountAggregateOutputType | null
    _avg: Vehicle_typesAvgAggregateOutputType | null
    _sum: Vehicle_typesSumAggregateOutputType | null
    _min: Vehicle_typesMinAggregateOutputType | null
    _max: Vehicle_typesMaxAggregateOutputType | null
  }

  export type Vehicle_typesAvgAggregateOutputType = {
    type_id: number | null
  }

  export type Vehicle_typesSumAggregateOutputType = {
    type_id: number | null
  }

  export type Vehicle_typesMinAggregateOutputType = {
    type_id: number | null
    name: string | null
  }

  export type Vehicle_typesMaxAggregateOutputType = {
    type_id: number | null
    name: string | null
  }

  export type Vehicle_typesCountAggregateOutputType = {
    type_id: number
    name: number
    _all: number
  }


  export type Vehicle_typesAvgAggregateInputType = {
    type_id?: true
  }

  export type Vehicle_typesSumAggregateInputType = {
    type_id?: true
  }

  export type Vehicle_typesMinAggregateInputType = {
    type_id?: true
    name?: true
  }

  export type Vehicle_typesMaxAggregateInputType = {
    type_id?: true
    name?: true
  }

  export type Vehicle_typesCountAggregateInputType = {
    type_id?: true
    name?: true
    _all?: true
  }

  export type Vehicle_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_types to aggregate.
     */
    where?: vehicle_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_types to fetch.
     */
    orderBy?: vehicle_typesOrderByWithRelationInput | vehicle_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehicle_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicle_types
    **/
    _count?: true | Vehicle_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_typesMaxAggregateInputType
  }

  export type GetVehicle_typesAggregateType<T extends Vehicle_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_types[P]>
      : GetScalarType<T[P], AggregateVehicle_types[P]>
  }




  export type vehicle_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicle_typesWhereInput
    orderBy?: vehicle_typesOrderByWithAggregationInput | vehicle_typesOrderByWithAggregationInput[]
    by: Vehicle_typesScalarFieldEnum[] | Vehicle_typesScalarFieldEnum
    having?: vehicle_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_typesCountAggregateInputType | true
    _avg?: Vehicle_typesAvgAggregateInputType
    _sum?: Vehicle_typesSumAggregateInputType
    _min?: Vehicle_typesMinAggregateInputType
    _max?: Vehicle_typesMaxAggregateInputType
  }

  export type Vehicle_typesGroupByOutputType = {
    type_id: number
    name: string
    _count: Vehicle_typesCountAggregateOutputType | null
    _avg: Vehicle_typesAvgAggregateOutputType | null
    _sum: Vehicle_typesSumAggregateOutputType | null
    _min: Vehicle_typesMinAggregateOutputType | null
    _max: Vehicle_typesMaxAggregateOutputType | null
  }

  type GetVehicle_typesGroupByPayload<T extends vehicle_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_typesGroupByOutputType[P]>
        }
      >
    >


  export type vehicle_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_id?: boolean
    name?: boolean
    tanks?: boolean | vehicle_types$tanksArgs<ExtArgs>
    _count?: boolean | Vehicle_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_types"]>



  export type vehicle_typesSelectScalar = {
    type_id?: boolean
    name?: boolean
  }

  export type vehicle_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"type_id" | "name", ExtArgs["result"]["vehicle_types"]>
  export type vehicle_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanks?: boolean | vehicle_types$tanksArgs<ExtArgs>
    _count?: boolean | Vehicle_typesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vehicle_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehicle_types"
    objects: {
      tanks: Prisma.$tanksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      type_id: number
      name: string
    }, ExtArgs["result"]["vehicle_types"]>
    composites: {}
  }

  type vehicle_typesGetPayload<S extends boolean | null | undefined | vehicle_typesDefaultArgs> = $Result.GetResult<Prisma.$vehicle_typesPayload, S>

  type vehicle_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vehicle_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vehicle_typesCountAggregateInputType | true
    }

  export interface vehicle_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle_types'], meta: { name: 'vehicle_types' } }
    /**
     * Find zero or one Vehicle_types that matches the filter.
     * @param {vehicle_typesFindUniqueArgs} args - Arguments to find a Vehicle_types
     * @example
     * // Get one Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehicle_typesFindUniqueArgs>(args: SelectSubset<T, vehicle_typesFindUniqueArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vehicle_typesFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_types
     * @example
     * // Get one Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehicle_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, vehicle_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_typesFindFirstArgs} args - Arguments to find a Vehicle_types
     * @example
     * // Get one Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehicle_typesFindFirstArgs>(args?: SelectSubset<T, vehicle_typesFindFirstArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_typesFindFirstOrThrowArgs} args - Arguments to find a Vehicle_types
     * @example
     * // Get one Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehicle_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, vehicle_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicle_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.findMany()
     * 
     * // Get first 10 Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.findMany({ take: 10 })
     * 
     * // Only select the `type_id`
     * const vehicle_typesWithType_idOnly = await prisma.vehicle_types.findMany({ select: { type_id: true } })
     * 
     */
    findMany<T extends vehicle_typesFindManyArgs>(args?: SelectSubset<T, vehicle_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle_types.
     * @param {vehicle_typesCreateArgs} args - Arguments to create a Vehicle_types.
     * @example
     * // Create one Vehicle_types
     * const Vehicle_types = await prisma.vehicle_types.create({
     *   data: {
     *     // ... data to create a Vehicle_types
     *   }
     * })
     * 
     */
    create<T extends vehicle_typesCreateArgs>(args: SelectSubset<T, vehicle_typesCreateArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicle_types.
     * @param {vehicle_typesCreateManyArgs} args - Arguments to create many Vehicle_types.
     * @example
     * // Create many Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehicle_typesCreateManyArgs>(args?: SelectSubset<T, vehicle_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle_types.
     * @param {vehicle_typesDeleteArgs} args - Arguments to delete one Vehicle_types.
     * @example
     * // Delete one Vehicle_types
     * const Vehicle_types = await prisma.vehicle_types.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_types
     *   }
     * })
     * 
     */
    delete<T extends vehicle_typesDeleteArgs>(args: SelectSubset<T, vehicle_typesDeleteArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle_types.
     * @param {vehicle_typesUpdateArgs} args - Arguments to update one Vehicle_types.
     * @example
     * // Update one Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehicle_typesUpdateArgs>(args: SelectSubset<T, vehicle_typesUpdateArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicle_types.
     * @param {vehicle_typesDeleteManyArgs} args - Arguments to filter Vehicle_types to delete.
     * @example
     * // Delete a few Vehicle_types
     * const { count } = await prisma.vehicle_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehicle_typesDeleteManyArgs>(args?: SelectSubset<T, vehicle_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehicle_typesUpdateManyArgs>(args: SelectSubset<T, vehicle_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_types.
     * @param {vehicle_typesUpsertArgs} args - Arguments to update or create a Vehicle_types.
     * @example
     * // Update or create a Vehicle_types
     * const vehicle_types = await prisma.vehicle_types.upsert({
     *   create: {
     *     // ... data to create a Vehicle_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_types we want to update
     *   }
     * })
     */
    upsert<T extends vehicle_typesUpsertArgs>(args: SelectSubset<T, vehicle_typesUpsertArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicle_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_typesCountArgs} args - Arguments to filter Vehicle_types to count.
     * @example
     * // Count the number of Vehicle_types
     * const count = await prisma.vehicle_types.count({
     *   where: {
     *     // ... the filter for the Vehicle_types we want to count
     *   }
     * })
    **/
    count<T extends vehicle_typesCountArgs>(
      args?: Subset<T, vehicle_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vehicle_typesAggregateArgs>(args: Subset<T, Vehicle_typesAggregateArgs>): Prisma.PrismaPromise<GetVehicle_typesAggregateType<T>>

    /**
     * Group by Vehicle_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_typesGroupByArgs} args - Group by arguments.
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
      T extends vehicle_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicle_typesGroupByArgs['orderBy'] }
        : { orderBy?: vehicle_typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vehicle_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehicle_types model
   */
  readonly fields: vehicle_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicle_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanks<T extends vehicle_types$tanksArgs<ExtArgs> = {}>(args?: Subset<T, vehicle_types$tanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the vehicle_types model
   */
  interface vehicle_typesFieldRefs {
    readonly type_id: FieldRef<"vehicle_types", 'Int'>
    readonly name: FieldRef<"vehicle_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vehicle_types findUnique
   */
  export type vehicle_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_types to fetch.
     */
    where: vehicle_typesWhereUniqueInput
  }

  /**
   * vehicle_types findUniqueOrThrow
   */
  export type vehicle_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_types to fetch.
     */
    where: vehicle_typesWhereUniqueInput
  }

  /**
   * vehicle_types findFirst
   */
  export type vehicle_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_types to fetch.
     */
    where?: vehicle_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_types to fetch.
     */
    orderBy?: vehicle_typesOrderByWithRelationInput | vehicle_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicle_types.
     */
    cursor?: vehicle_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicle_types.
     */
    distinct?: Vehicle_typesScalarFieldEnum | Vehicle_typesScalarFieldEnum[]
  }

  /**
   * vehicle_types findFirstOrThrow
   */
  export type vehicle_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_types to fetch.
     */
    where?: vehicle_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_types to fetch.
     */
    orderBy?: vehicle_typesOrderByWithRelationInput | vehicle_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicle_types.
     */
    cursor?: vehicle_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicle_types.
     */
    distinct?: Vehicle_typesScalarFieldEnum | Vehicle_typesScalarFieldEnum[]
  }

  /**
   * vehicle_types findMany
   */
  export type vehicle_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_types to fetch.
     */
    where?: vehicle_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_types to fetch.
     */
    orderBy?: vehicle_typesOrderByWithRelationInput | vehicle_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicle_types.
     */
    cursor?: vehicle_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_types.
     */
    skip?: number
    distinct?: Vehicle_typesScalarFieldEnum | Vehicle_typesScalarFieldEnum[]
  }

  /**
   * vehicle_types create
   */
  export type vehicle_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a vehicle_types.
     */
    data: XOR<vehicle_typesCreateInput, vehicle_typesUncheckedCreateInput>
  }

  /**
   * vehicle_types createMany
   */
  export type vehicle_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicle_types.
     */
    data: vehicle_typesCreateManyInput | vehicle_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicle_types update
   */
  export type vehicle_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a vehicle_types.
     */
    data: XOR<vehicle_typesUpdateInput, vehicle_typesUncheckedUpdateInput>
    /**
     * Choose, which vehicle_types to update.
     */
    where: vehicle_typesWhereUniqueInput
  }

  /**
   * vehicle_types updateMany
   */
  export type vehicle_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicle_types.
     */
    data: XOR<vehicle_typesUpdateManyMutationInput, vehicle_typesUncheckedUpdateManyInput>
    /**
     * Filter which vehicle_types to update
     */
    where?: vehicle_typesWhereInput
    /**
     * Limit how many vehicle_types to update.
     */
    limit?: number
  }

  /**
   * vehicle_types upsert
   */
  export type vehicle_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the vehicle_types to update in case it exists.
     */
    where: vehicle_typesWhereUniqueInput
    /**
     * In case the vehicle_types found by the `where` argument doesn't exist, create a new vehicle_types with this data.
     */
    create: XOR<vehicle_typesCreateInput, vehicle_typesUncheckedCreateInput>
    /**
     * In case the vehicle_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicle_typesUpdateInput, vehicle_typesUncheckedUpdateInput>
  }

  /**
   * vehicle_types delete
   */
  export type vehicle_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    /**
     * Filter which vehicle_types to delete.
     */
    where: vehicle_typesWhereUniqueInput
  }

  /**
   * vehicle_types deleteMany
   */
  export type vehicle_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_types to delete
     */
    where?: vehicle_typesWhereInput
    /**
     * Limit how many vehicle_types to delete.
     */
    limit?: number
  }

  /**
   * vehicle_types.tanks
   */
  export type vehicle_types$tanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    where?: tanksWhereInput
    orderBy?: tanksOrderByWithRelationInput | tanksOrderByWithRelationInput[]
    cursor?: tanksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TanksScalarFieldEnum | TanksScalarFieldEnum[]
  }

  /**
   * vehicle_types without action
   */
  export type vehicle_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
  }


  /**
   * Model tanks
   */

  export type AggregateTanks = {
    _count: TanksCountAggregateOutputType | null
    _avg: TanksAvgAggregateOutputType | null
    _sum: TanksSumAggregateOutputType | null
    _min: TanksMinAggregateOutputType | null
    _max: TanksMaxAggregateOutputType | null
  }

  export type TanksAvgAggregateOutputType = {
    tank_id: number | null
    country_id: number | null
    type_id: number | null
    weight_kg: number | null
    crew: number | null
    engine_power_hp: number | null
    top_speed_kmh: Decimal | null
    armor_front_mm: number | null
    armor_side_mm: number | null
    armor_rear_mm: number | null
    gun_caliber_mm: Decimal | null
    year_introduced: number | null
  }

  export type TanksSumAggregateOutputType = {
    tank_id: number | null
    country_id: number | null
    type_id: number | null
    weight_kg: number | null
    crew: number | null
    engine_power_hp: number | null
    top_speed_kmh: Decimal | null
    armor_front_mm: number | null
    armor_side_mm: number | null
    armor_rear_mm: number | null
    gun_caliber_mm: Decimal | null
    year_introduced: number | null
  }

  export type TanksMinAggregateOutputType = {
    tank_id: number | null
    name: string | null
    country_id: number | null
    type_id: number | null
    weight_kg: number | null
    crew: number | null
    engine_power_hp: number | null
    top_speed_kmh: Decimal | null
    armor_front_mm: number | null
    armor_side_mm: number | null
    armor_rear_mm: number | null
    gun_caliber_mm: Decimal | null
    year_introduced: number | null
    notes: string | null
  }

  export type TanksMaxAggregateOutputType = {
    tank_id: number | null
    name: string | null
    country_id: number | null
    type_id: number | null
    weight_kg: number | null
    crew: number | null
    engine_power_hp: number | null
    top_speed_kmh: Decimal | null
    armor_front_mm: number | null
    armor_side_mm: number | null
    armor_rear_mm: number | null
    gun_caliber_mm: Decimal | null
    year_introduced: number | null
    notes: string | null
  }

  export type TanksCountAggregateOutputType = {
    tank_id: number
    name: number
    country_id: number
    type_id: number
    weight_kg: number
    crew: number
    engine_power_hp: number
    top_speed_kmh: number
    armor_front_mm: number
    armor_side_mm: number
    armor_rear_mm: number
    gun_caliber_mm: number
    year_introduced: number
    notes: number
    _all: number
  }


  export type TanksAvgAggregateInputType = {
    tank_id?: true
    country_id?: true
    type_id?: true
    weight_kg?: true
    crew?: true
    engine_power_hp?: true
    top_speed_kmh?: true
    armor_front_mm?: true
    armor_side_mm?: true
    armor_rear_mm?: true
    gun_caliber_mm?: true
    year_introduced?: true
  }

  export type TanksSumAggregateInputType = {
    tank_id?: true
    country_id?: true
    type_id?: true
    weight_kg?: true
    crew?: true
    engine_power_hp?: true
    top_speed_kmh?: true
    armor_front_mm?: true
    armor_side_mm?: true
    armor_rear_mm?: true
    gun_caliber_mm?: true
    year_introduced?: true
  }

  export type TanksMinAggregateInputType = {
    tank_id?: true
    name?: true
    country_id?: true
    type_id?: true
    weight_kg?: true
    crew?: true
    engine_power_hp?: true
    top_speed_kmh?: true
    armor_front_mm?: true
    armor_side_mm?: true
    armor_rear_mm?: true
    gun_caliber_mm?: true
    year_introduced?: true
    notes?: true
  }

  export type TanksMaxAggregateInputType = {
    tank_id?: true
    name?: true
    country_id?: true
    type_id?: true
    weight_kg?: true
    crew?: true
    engine_power_hp?: true
    top_speed_kmh?: true
    armor_front_mm?: true
    armor_side_mm?: true
    armor_rear_mm?: true
    gun_caliber_mm?: true
    year_introduced?: true
    notes?: true
  }

  export type TanksCountAggregateInputType = {
    tank_id?: true
    name?: true
    country_id?: true
    type_id?: true
    weight_kg?: true
    crew?: true
    engine_power_hp?: true
    top_speed_kmh?: true
    armor_front_mm?: true
    armor_side_mm?: true
    armor_rear_mm?: true
    gun_caliber_mm?: true
    year_introduced?: true
    notes?: true
    _all?: true
  }

  export type TanksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tanks to aggregate.
     */
    where?: tanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tanks to fetch.
     */
    orderBy?: tanksOrderByWithRelationInput | tanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tanks
    **/
    _count?: true | TanksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TanksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TanksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TanksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TanksMaxAggregateInputType
  }

  export type GetTanksAggregateType<T extends TanksAggregateArgs> = {
        [P in keyof T & keyof AggregateTanks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTanks[P]>
      : GetScalarType<T[P], AggregateTanks[P]>
  }




  export type tanksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tanksWhereInput
    orderBy?: tanksOrderByWithAggregationInput | tanksOrderByWithAggregationInput[]
    by: TanksScalarFieldEnum[] | TanksScalarFieldEnum
    having?: tanksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TanksCountAggregateInputType | true
    _avg?: TanksAvgAggregateInputType
    _sum?: TanksSumAggregateInputType
    _min?: TanksMinAggregateInputType
    _max?: TanksMaxAggregateInputType
  }

  export type TanksGroupByOutputType = {
    tank_id: number
    name: string
    country_id: number | null
    type_id: number | null
    weight_kg: number | null
    crew: number | null
    engine_power_hp: number | null
    top_speed_kmh: Decimal | null
    armor_front_mm: number | null
    armor_side_mm: number | null
    armor_rear_mm: number | null
    gun_caliber_mm: Decimal | null
    year_introduced: number | null
    notes: string | null
    _count: TanksCountAggregateOutputType | null
    _avg: TanksAvgAggregateOutputType | null
    _sum: TanksSumAggregateOutputType | null
    _min: TanksMinAggregateOutputType | null
    _max: TanksMaxAggregateOutputType | null
  }

  type GetTanksGroupByPayload<T extends tanksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TanksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TanksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TanksGroupByOutputType[P]>
            : GetScalarType<T[P], TanksGroupByOutputType[P]>
        }
      >
    >


  export type tanksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tank_id?: boolean
    name?: boolean
    country_id?: boolean
    type_id?: boolean
    weight_kg?: boolean
    crew?: boolean
    engine_power_hp?: boolean
    top_speed_kmh?: boolean
    armor_front_mm?: boolean
    armor_side_mm?: boolean
    armor_rear_mm?: boolean
    gun_caliber_mm?: boolean
    year_introduced?: boolean
    notes?: boolean
    countries?: boolean | tanks$countriesArgs<ExtArgs>
    vehicle_types?: boolean | tanks$vehicle_typesArgs<ExtArgs>
    battleTanks?: boolean | tanks$battleTanksArgs<ExtArgs>
    favourite_tanks?: boolean | tanks$favourite_tanksArgs<ExtArgs>
    photos?: boolean | tanks$photosArgs<ExtArgs>
    _count?: boolean | TanksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanks"]>



  export type tanksSelectScalar = {
    tank_id?: boolean
    name?: boolean
    country_id?: boolean
    type_id?: boolean
    weight_kg?: boolean
    crew?: boolean
    engine_power_hp?: boolean
    top_speed_kmh?: boolean
    armor_front_mm?: boolean
    armor_side_mm?: boolean
    armor_rear_mm?: boolean
    gun_caliber_mm?: boolean
    year_introduced?: boolean
    notes?: boolean
  }

  export type tanksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tank_id" | "name" | "country_id" | "type_id" | "weight_kg" | "crew" | "engine_power_hp" | "top_speed_kmh" | "armor_front_mm" | "armor_side_mm" | "armor_rear_mm" | "gun_caliber_mm" | "year_introduced" | "notes", ExtArgs["result"]["tanks"]>
  export type tanksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    countries?: boolean | tanks$countriesArgs<ExtArgs>
    vehicle_types?: boolean | tanks$vehicle_typesArgs<ExtArgs>
    battleTanks?: boolean | tanks$battleTanksArgs<ExtArgs>
    favourite_tanks?: boolean | tanks$favourite_tanksArgs<ExtArgs>
    photos?: boolean | tanks$photosArgs<ExtArgs>
    _count?: boolean | TanksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tanksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tanks"
    objects: {
      countries: Prisma.$countriesPayload<ExtArgs> | null
      vehicle_types: Prisma.$vehicle_typesPayload<ExtArgs> | null
      battleTanks: Prisma.$battlelocation_tankPayload<ExtArgs>[]
      favourite_tanks: Prisma.$favourite_tanksPayload<ExtArgs>[]
      photos: Prisma.$tank_photosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tank_id: number
      name: string
      country_id: number | null
      type_id: number | null
      weight_kg: number | null
      crew: number | null
      engine_power_hp: number | null
      top_speed_kmh: Prisma.Decimal | null
      armor_front_mm: number | null
      armor_side_mm: number | null
      armor_rear_mm: number | null
      gun_caliber_mm: Prisma.Decimal | null
      year_introduced: number | null
      notes: string | null
    }, ExtArgs["result"]["tanks"]>
    composites: {}
  }

  type tanksGetPayload<S extends boolean | null | undefined | tanksDefaultArgs> = $Result.GetResult<Prisma.$tanksPayload, S>

  type tanksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tanksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TanksCountAggregateInputType | true
    }

  export interface tanksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tanks'], meta: { name: 'tanks' } }
    /**
     * Find zero or one Tanks that matches the filter.
     * @param {tanksFindUniqueArgs} args - Arguments to find a Tanks
     * @example
     * // Get one Tanks
     * const tanks = await prisma.tanks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tanksFindUniqueArgs>(args: SelectSubset<T, tanksFindUniqueArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tanks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tanksFindUniqueOrThrowArgs} args - Arguments to find a Tanks
     * @example
     * // Get one Tanks
     * const tanks = await prisma.tanks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tanksFindUniqueOrThrowArgs>(args: SelectSubset<T, tanksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tanksFindFirstArgs} args - Arguments to find a Tanks
     * @example
     * // Get one Tanks
     * const tanks = await prisma.tanks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tanksFindFirstArgs>(args?: SelectSubset<T, tanksFindFirstArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tanksFindFirstOrThrowArgs} args - Arguments to find a Tanks
     * @example
     * // Get one Tanks
     * const tanks = await prisma.tanks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tanksFindFirstOrThrowArgs>(args?: SelectSubset<T, tanksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tanks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tanksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tanks
     * const tanks = await prisma.tanks.findMany()
     * 
     * // Get first 10 Tanks
     * const tanks = await prisma.tanks.findMany({ take: 10 })
     * 
     * // Only select the `tank_id`
     * const tanksWithTank_idOnly = await prisma.tanks.findMany({ select: { tank_id: true } })
     * 
     */
    findMany<T extends tanksFindManyArgs>(args?: SelectSubset<T, tanksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tanks.
     * @param {tanksCreateArgs} args - Arguments to create a Tanks.
     * @example
     * // Create one Tanks
     * const Tanks = await prisma.tanks.create({
     *   data: {
     *     // ... data to create a Tanks
     *   }
     * })
     * 
     */
    create<T extends tanksCreateArgs>(args: SelectSubset<T, tanksCreateArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tanks.
     * @param {tanksCreateManyArgs} args - Arguments to create many Tanks.
     * @example
     * // Create many Tanks
     * const tanks = await prisma.tanks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tanksCreateManyArgs>(args?: SelectSubset<T, tanksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tanks.
     * @param {tanksDeleteArgs} args - Arguments to delete one Tanks.
     * @example
     * // Delete one Tanks
     * const Tanks = await prisma.tanks.delete({
     *   where: {
     *     // ... filter to delete one Tanks
     *   }
     * })
     * 
     */
    delete<T extends tanksDeleteArgs>(args: SelectSubset<T, tanksDeleteArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tanks.
     * @param {tanksUpdateArgs} args - Arguments to update one Tanks.
     * @example
     * // Update one Tanks
     * const tanks = await prisma.tanks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tanksUpdateArgs>(args: SelectSubset<T, tanksUpdateArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tanks.
     * @param {tanksDeleteManyArgs} args - Arguments to filter Tanks to delete.
     * @example
     * // Delete a few Tanks
     * const { count } = await prisma.tanks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tanksDeleteManyArgs>(args?: SelectSubset<T, tanksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tanksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tanks
     * const tanks = await prisma.tanks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tanksUpdateManyArgs>(args: SelectSubset<T, tanksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tanks.
     * @param {tanksUpsertArgs} args - Arguments to update or create a Tanks.
     * @example
     * // Update or create a Tanks
     * const tanks = await prisma.tanks.upsert({
     *   create: {
     *     // ... data to create a Tanks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tanks we want to update
     *   }
     * })
     */
    upsert<T extends tanksUpsertArgs>(args: SelectSubset<T, tanksUpsertArgs<ExtArgs>>): Prisma__tanksClient<$Result.GetResult<Prisma.$tanksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tanksCountArgs} args - Arguments to filter Tanks to count.
     * @example
     * // Count the number of Tanks
     * const count = await prisma.tanks.count({
     *   where: {
     *     // ... the filter for the Tanks we want to count
     *   }
     * })
    **/
    count<T extends tanksCountArgs>(
      args?: Subset<T, tanksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TanksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TanksAggregateArgs>(args: Subset<T, TanksAggregateArgs>): Prisma.PrismaPromise<GetTanksAggregateType<T>>

    /**
     * Group by Tanks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tanksGroupByArgs} args - Group by arguments.
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
      T extends tanksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tanksGroupByArgs['orderBy'] }
        : { orderBy?: tanksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tanksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTanksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tanks model
   */
  readonly fields: tanksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tanks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tanksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    countries<T extends tanks$countriesArgs<ExtArgs> = {}>(args?: Subset<T, tanks$countriesArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicle_types<T extends tanks$vehicle_typesArgs<ExtArgs> = {}>(args?: Subset<T, tanks$vehicle_typesArgs<ExtArgs>>): Prisma__vehicle_typesClient<$Result.GetResult<Prisma.$vehicle_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    battleTanks<T extends tanks$battleTanksArgs<ExtArgs> = {}>(args?: Subset<T, tanks$battleTanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$battlelocation_tankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourite_tanks<T extends tanks$favourite_tanksArgs<ExtArgs> = {}>(args?: Subset<T, tanks$favourite_tanksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favourite_tanksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends tanks$photosArgs<ExtArgs> = {}>(args?: Subset<T, tanks$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tank_photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tanks model
   */
  interface tanksFieldRefs {
    readonly tank_id: FieldRef<"tanks", 'Int'>
    readonly name: FieldRef<"tanks", 'String'>
    readonly country_id: FieldRef<"tanks", 'Int'>
    readonly type_id: FieldRef<"tanks", 'Int'>
    readonly weight_kg: FieldRef<"tanks", 'Int'>
    readonly crew: FieldRef<"tanks", 'Int'>
    readonly engine_power_hp: FieldRef<"tanks", 'Int'>
    readonly top_speed_kmh: FieldRef<"tanks", 'Decimal'>
    readonly armor_front_mm: FieldRef<"tanks", 'Int'>
    readonly armor_side_mm: FieldRef<"tanks", 'Int'>
    readonly armor_rear_mm: FieldRef<"tanks", 'Int'>
    readonly gun_caliber_mm: FieldRef<"tanks", 'Decimal'>
    readonly year_introduced: FieldRef<"tanks", 'Int'>
    readonly notes: FieldRef<"tanks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tanks findUnique
   */
  export type tanksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * Filter, which tanks to fetch.
     */
    where: tanksWhereUniqueInput
  }

  /**
   * tanks findUniqueOrThrow
   */
  export type tanksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * Filter, which tanks to fetch.
     */
    where: tanksWhereUniqueInput
  }

  /**
   * tanks findFirst
   */
  export type tanksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * Filter, which tanks to fetch.
     */
    where?: tanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tanks to fetch.
     */
    orderBy?: tanksOrderByWithRelationInput | tanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tanks.
     */
    cursor?: tanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tanks.
     */
    distinct?: TanksScalarFieldEnum | TanksScalarFieldEnum[]
  }

  /**
   * tanks findFirstOrThrow
   */
  export type tanksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * Filter, which tanks to fetch.
     */
    where?: tanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tanks to fetch.
     */
    orderBy?: tanksOrderByWithRelationInput | tanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tanks.
     */
    cursor?: tanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tanks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tanks.
     */
    distinct?: TanksScalarFieldEnum | TanksScalarFieldEnum[]
  }

  /**
   * tanks findMany
   */
  export type tanksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * Filter, which tanks to fetch.
     */
    where?: tanksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tanks to fetch.
     */
    orderBy?: tanksOrderByWithRelationInput | tanksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tanks.
     */
    cursor?: tanksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tanks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tanks.
     */
    skip?: number
    distinct?: TanksScalarFieldEnum | TanksScalarFieldEnum[]
  }

  /**
   * tanks create
   */
  export type tanksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * The data needed to create a tanks.
     */
    data: XOR<tanksCreateInput, tanksUncheckedCreateInput>
  }

  /**
   * tanks createMany
   */
  export type tanksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tanks.
     */
    data: tanksCreateManyInput | tanksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tanks update
   */
  export type tanksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * The data needed to update a tanks.
     */
    data: XOR<tanksUpdateInput, tanksUncheckedUpdateInput>
    /**
     * Choose, which tanks to update.
     */
    where: tanksWhereUniqueInput
  }

  /**
   * tanks updateMany
   */
  export type tanksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tanks.
     */
    data: XOR<tanksUpdateManyMutationInput, tanksUncheckedUpdateManyInput>
    /**
     * Filter which tanks to update
     */
    where?: tanksWhereInput
    /**
     * Limit how many tanks to update.
     */
    limit?: number
  }

  /**
   * tanks upsert
   */
  export type tanksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * The filter to search for the tanks to update in case it exists.
     */
    where: tanksWhereUniqueInput
    /**
     * In case the tanks found by the `where` argument doesn't exist, create a new tanks with this data.
     */
    create: XOR<tanksCreateInput, tanksUncheckedCreateInput>
    /**
     * In case the tanks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tanksUpdateInput, tanksUncheckedUpdateInput>
  }

  /**
   * tanks delete
   */
  export type tanksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
    /**
     * Filter which tanks to delete.
     */
    where: tanksWhereUniqueInput
  }

  /**
   * tanks deleteMany
   */
  export type tanksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tanks to delete
     */
    where?: tanksWhereInput
    /**
     * Limit how many tanks to delete.
     */
    limit?: number
  }

  /**
   * tanks.countries
   */
  export type tanks$countriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countriesInclude<ExtArgs> | null
    where?: countriesWhereInput
  }

  /**
   * tanks.vehicle_types
   */
  export type tanks$vehicle_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_types
     */
    select?: vehicle_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_types
     */
    omit?: vehicle_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_typesInclude<ExtArgs> | null
    where?: vehicle_typesWhereInput
  }

  /**
   * tanks.battleTanks
   */
  export type tanks$battleTanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the battlelocation_tank
     */
    select?: battlelocation_tankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the battlelocation_tank
     */
    omit?: battlelocation_tankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: battlelocation_tankInclude<ExtArgs> | null
    where?: battlelocation_tankWhereInput
    orderBy?: battlelocation_tankOrderByWithRelationInput | battlelocation_tankOrderByWithRelationInput[]
    cursor?: battlelocation_tankWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Battlelocation_tankScalarFieldEnum | Battlelocation_tankScalarFieldEnum[]
  }

  /**
   * tanks.favourite_tanks
   */
  export type tanks$favourite_tanksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourite_tanks
     */
    select?: favourite_tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourite_tanks
     */
    omit?: favourite_tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favourite_tanksInclude<ExtArgs> | null
    where?: favourite_tanksWhereInput
    orderBy?: favourite_tanksOrderByWithRelationInput | favourite_tanksOrderByWithRelationInput[]
    cursor?: favourite_tanksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Favourite_tanksScalarFieldEnum | Favourite_tanksScalarFieldEnum[]
  }

  /**
   * tanks.photos
   */
  export type tanks$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tank_photos
     */
    select?: tank_photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tank_photos
     */
    omit?: tank_photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tank_photosInclude<ExtArgs> | null
    where?: tank_photosWhereInput
    orderBy?: tank_photosOrderByWithRelationInput | tank_photosOrderByWithRelationInput[]
    cursor?: tank_photosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tank_photosScalarFieldEnum | Tank_photosScalarFieldEnum[]
  }

  /**
   * tanks without action
   */
  export type tanksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tanks
     */
    select?: tanksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tanks
     */
    omit?: tanksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tanksInclude<ExtArgs> | null
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


  export const BattlelocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    description: 'description'
  };

  export type BattlelocationScalarFieldEnum = (typeof BattlelocationScalarFieldEnum)[keyof typeof BattlelocationScalarFieldEnum]


  export const Battlelocation_countryScalarFieldEnum: {
    battlelocation_id: 'battlelocation_id',
    country_id: 'country_id'
  };

  export type Battlelocation_countryScalarFieldEnum = (typeof Battlelocation_countryScalarFieldEnum)[keyof typeof Battlelocation_countryScalarFieldEnum]


  export const Battlelocation_tankScalarFieldEnum: {
    battlelocation_id: 'battlelocation_id',
    tank_id: 'tank_id'
  };

  export type Battlelocation_tankScalarFieldEnum = (typeof Battlelocation_tankScalarFieldEnum)[keyof typeof Battlelocation_tankScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    nickname: 'nickname',
    password: 'password',
    email: 'email',
    role: 'role',
    avatar_url: 'avatar_url'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Favourite_tanksScalarFieldEnum: {
    fav_id: 'fav_id',
    user_id: 'user_id',
    tank_id: 'tank_id'
  };

  export type Favourite_tanksScalarFieldEnum = (typeof Favourite_tanksScalarFieldEnum)[keyof typeof Favourite_tanksScalarFieldEnum]


  export const PhotosScalarFieldEnum: {
    photo_id: 'photo_id',
    filename: 'filename',
    filepath: 'filepath'
  };

  export type PhotosScalarFieldEnum = (typeof PhotosScalarFieldEnum)[keyof typeof PhotosScalarFieldEnum]


  export const Tank_photosScalarFieldEnum: {
    id: 'id',
    tank_id: 'tank_id',
    photo_id: 'photo_id'
  };

  export type Tank_photosScalarFieldEnum = (typeof Tank_photosScalarFieldEnum)[keyof typeof Tank_photosScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    country_id: 'country_id',
    name: 'name'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const Vehicle_typesScalarFieldEnum: {
    type_id: 'type_id',
    name: 'name'
  };

  export type Vehicle_typesScalarFieldEnum = (typeof Vehicle_typesScalarFieldEnum)[keyof typeof Vehicle_typesScalarFieldEnum]


  export const TanksScalarFieldEnum: {
    tank_id: 'tank_id',
    name: 'name',
    country_id: 'country_id',
    type_id: 'type_id',
    weight_kg: 'weight_kg',
    crew: 'crew',
    engine_power_hp: 'engine_power_hp',
    top_speed_kmh: 'top_speed_kmh',
    armor_front_mm: 'armor_front_mm',
    armor_side_mm: 'armor_side_mm',
    armor_rear_mm: 'armor_rear_mm',
    gun_caliber_mm: 'gun_caliber_mm',
    year_introduced: 'year_introduced',
    notes: 'notes'
  };

  export type TanksScalarFieldEnum = (typeof TanksScalarFieldEnum)[keyof typeof TanksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const battlelocationOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type battlelocationOrderByRelevanceFieldEnum = (typeof battlelocationOrderByRelevanceFieldEnum)[keyof typeof battlelocationOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    nickname: 'nickname',
    password: 'password',
    email: 'email',
    role: 'role',
    avatar_url: 'avatar_url'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const photosOrderByRelevanceFieldEnum: {
    filename: 'filename',
    filepath: 'filepath'
  };

  export type photosOrderByRelevanceFieldEnum = (typeof photosOrderByRelevanceFieldEnum)[keyof typeof photosOrderByRelevanceFieldEnum]


  export const countriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type countriesOrderByRelevanceFieldEnum = (typeof countriesOrderByRelevanceFieldEnum)[keyof typeof countriesOrderByRelevanceFieldEnum]


  export const vehicle_typesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type vehicle_typesOrderByRelevanceFieldEnum = (typeof vehicle_typesOrderByRelevanceFieldEnum)[keyof typeof vehicle_typesOrderByRelevanceFieldEnum]


  export const tanksOrderByRelevanceFieldEnum: {
    name: 'name',
    notes: 'notes'
  };

  export type tanksOrderByRelevanceFieldEnum = (typeof tanksOrderByRelevanceFieldEnum)[keyof typeof tanksOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type battlelocationWhereInput = {
    AND?: battlelocationWhereInput | battlelocationWhereInput[]
    OR?: battlelocationWhereInput[]
    NOT?: battlelocationWhereInput | battlelocationWhereInput[]
    id?: IntFilter<"battlelocation"> | number
    name?: StringFilter<"battlelocation"> | string
    latitude?: DecimalNullableFilter<"battlelocation"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"battlelocation"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"battlelocation"> | string | null
    battleCountries?: Battlelocation_countryListRelationFilter
    battleTanks?: Battlelocation_tankListRelationFilter
  }

  export type battlelocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    battleCountries?: battlelocation_countryOrderByRelationAggregateInput
    battleTanks?: battlelocation_tankOrderByRelationAggregateInput
    _relevance?: battlelocationOrderByRelevanceInput
  }

  export type battlelocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: battlelocationWhereInput | battlelocationWhereInput[]
    OR?: battlelocationWhereInput[]
    NOT?: battlelocationWhereInput | battlelocationWhereInput[]
    name?: StringFilter<"battlelocation"> | string
    latitude?: DecimalNullableFilter<"battlelocation"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"battlelocation"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"battlelocation"> | string | null
    battleCountries?: Battlelocation_countryListRelationFilter
    battleTanks?: Battlelocation_tankListRelationFilter
  }, "id">

  export type battlelocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: battlelocationCountOrderByAggregateInput
    _avg?: battlelocationAvgOrderByAggregateInput
    _max?: battlelocationMaxOrderByAggregateInput
    _min?: battlelocationMinOrderByAggregateInput
    _sum?: battlelocationSumOrderByAggregateInput
  }

  export type battlelocationScalarWhereWithAggregatesInput = {
    AND?: battlelocationScalarWhereWithAggregatesInput | battlelocationScalarWhereWithAggregatesInput[]
    OR?: battlelocationScalarWhereWithAggregatesInput[]
    NOT?: battlelocationScalarWhereWithAggregatesInput | battlelocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"battlelocation"> | number
    name?: StringWithAggregatesFilter<"battlelocation"> | string
    latitude?: DecimalNullableWithAggregatesFilter<"battlelocation"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"battlelocation"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"battlelocation"> | string | null
  }

  export type battlelocation_countryWhereInput = {
    AND?: battlelocation_countryWhereInput | battlelocation_countryWhereInput[]
    OR?: battlelocation_countryWhereInput[]
    NOT?: battlelocation_countryWhereInput | battlelocation_countryWhereInput[]
    battlelocation_id?: IntFilter<"battlelocation_country"> | number
    country_id?: IntFilter<"battlelocation_country"> | number
    battlelocation?: XOR<BattlelocationScalarRelationFilter, battlelocationWhereInput>
    countries?: XOR<CountriesScalarRelationFilter, countriesWhereInput>
  }

  export type battlelocation_countryOrderByWithRelationInput = {
    battlelocation_id?: SortOrder
    country_id?: SortOrder
    battlelocation?: battlelocationOrderByWithRelationInput
    countries?: countriesOrderByWithRelationInput
  }

  export type battlelocation_countryWhereUniqueInput = Prisma.AtLeast<{
    battlelocation_id_country_id?: battlelocation_countryBattlelocation_idCountry_idCompoundUniqueInput
    AND?: battlelocation_countryWhereInput | battlelocation_countryWhereInput[]
    OR?: battlelocation_countryWhereInput[]
    NOT?: battlelocation_countryWhereInput | battlelocation_countryWhereInput[]
    battlelocation_id?: IntFilter<"battlelocation_country"> | number
    country_id?: IntFilter<"battlelocation_country"> | number
    battlelocation?: XOR<BattlelocationScalarRelationFilter, battlelocationWhereInput>
    countries?: XOR<CountriesScalarRelationFilter, countriesWhereInput>
  }, "battlelocation_id_country_id">

  export type battlelocation_countryOrderByWithAggregationInput = {
    battlelocation_id?: SortOrder
    country_id?: SortOrder
    _count?: battlelocation_countryCountOrderByAggregateInput
    _avg?: battlelocation_countryAvgOrderByAggregateInput
    _max?: battlelocation_countryMaxOrderByAggregateInput
    _min?: battlelocation_countryMinOrderByAggregateInput
    _sum?: battlelocation_countrySumOrderByAggregateInput
  }

  export type battlelocation_countryScalarWhereWithAggregatesInput = {
    AND?: battlelocation_countryScalarWhereWithAggregatesInput | battlelocation_countryScalarWhereWithAggregatesInput[]
    OR?: battlelocation_countryScalarWhereWithAggregatesInput[]
    NOT?: battlelocation_countryScalarWhereWithAggregatesInput | battlelocation_countryScalarWhereWithAggregatesInput[]
    battlelocation_id?: IntWithAggregatesFilter<"battlelocation_country"> | number
    country_id?: IntWithAggregatesFilter<"battlelocation_country"> | number
  }

  export type battlelocation_tankWhereInput = {
    AND?: battlelocation_tankWhereInput | battlelocation_tankWhereInput[]
    OR?: battlelocation_tankWhereInput[]
    NOT?: battlelocation_tankWhereInput | battlelocation_tankWhereInput[]
    battlelocation_id?: IntFilter<"battlelocation_tank"> | number
    tank_id?: IntFilter<"battlelocation_tank"> | number
    battlelocation?: XOR<BattlelocationScalarRelationFilter, battlelocationWhereInput>
    tanks?: XOR<TanksScalarRelationFilter, tanksWhereInput>
  }

  export type battlelocation_tankOrderByWithRelationInput = {
    battlelocation_id?: SortOrder
    tank_id?: SortOrder
    battlelocation?: battlelocationOrderByWithRelationInput
    tanks?: tanksOrderByWithRelationInput
  }

  export type battlelocation_tankWhereUniqueInput = Prisma.AtLeast<{
    battlelocation_id_tank_id?: battlelocation_tankBattlelocation_idTank_idCompoundUniqueInput
    AND?: battlelocation_tankWhereInput | battlelocation_tankWhereInput[]
    OR?: battlelocation_tankWhereInput[]
    NOT?: battlelocation_tankWhereInput | battlelocation_tankWhereInput[]
    battlelocation_id?: IntFilter<"battlelocation_tank"> | number
    tank_id?: IntFilter<"battlelocation_tank"> | number
    battlelocation?: XOR<BattlelocationScalarRelationFilter, battlelocationWhereInput>
    tanks?: XOR<TanksScalarRelationFilter, tanksWhereInput>
  }, "battlelocation_id_tank_id">

  export type battlelocation_tankOrderByWithAggregationInput = {
    battlelocation_id?: SortOrder
    tank_id?: SortOrder
    _count?: battlelocation_tankCountOrderByAggregateInput
    _avg?: battlelocation_tankAvgOrderByAggregateInput
    _max?: battlelocation_tankMaxOrderByAggregateInput
    _min?: battlelocation_tankMinOrderByAggregateInput
    _sum?: battlelocation_tankSumOrderByAggregateInput
  }

  export type battlelocation_tankScalarWhereWithAggregatesInput = {
    AND?: battlelocation_tankScalarWhereWithAggregatesInput | battlelocation_tankScalarWhereWithAggregatesInput[]
    OR?: battlelocation_tankScalarWhereWithAggregatesInput[]
    NOT?: battlelocation_tankScalarWhereWithAggregatesInput | battlelocation_tankScalarWhereWithAggregatesInput[]
    battlelocation_id?: IntWithAggregatesFilter<"battlelocation_tank"> | number
    tank_id?: IntWithAggregatesFilter<"battlelocation_tank"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    nickname?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    avatar_url?: StringNullableFilter<"users"> | string | null
    favourite_tanks?: Favourite_tanksListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    favourite_tanks?: favourite_tanksOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nickname?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    avatar_url?: StringNullableFilter<"users"> | string | null
    favourite_tanks?: Favourite_tanksListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
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
    user_id?: IntWithAggregatesFilter<"users"> | number
    nickname?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type favourite_tanksWhereInput = {
    AND?: favourite_tanksWhereInput | favourite_tanksWhereInput[]
    OR?: favourite_tanksWhereInput[]
    NOT?: favourite_tanksWhereInput | favourite_tanksWhereInput[]
    fav_id?: IntFilter<"favourite_tanks"> | number
    user_id?: IntFilter<"favourite_tanks"> | number
    tank_id?: IntFilter<"favourite_tanks"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tanks?: XOR<TanksScalarRelationFilter, tanksWhereInput>
  }

  export type favourite_tanksOrderByWithRelationInput = {
    fav_id?: SortOrder
    user_id?: SortOrder
    tank_id?: SortOrder
    users?: usersOrderByWithRelationInput
    tanks?: tanksOrderByWithRelationInput
  }

  export type favourite_tanksWhereUniqueInput = Prisma.AtLeast<{
    fav_id?: number
    user_id_tank_id?: favourite_tanksUser_idTank_idCompoundUniqueInput
    AND?: favourite_tanksWhereInput | favourite_tanksWhereInput[]
    OR?: favourite_tanksWhereInput[]
    NOT?: favourite_tanksWhereInput | favourite_tanksWhereInput[]
    user_id?: IntFilter<"favourite_tanks"> | number
    tank_id?: IntFilter<"favourite_tanks"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    tanks?: XOR<TanksScalarRelationFilter, tanksWhereInput>
  }, "fav_id" | "user_id_tank_id">

  export type favourite_tanksOrderByWithAggregationInput = {
    fav_id?: SortOrder
    user_id?: SortOrder
    tank_id?: SortOrder
    _count?: favourite_tanksCountOrderByAggregateInput
    _avg?: favourite_tanksAvgOrderByAggregateInput
    _max?: favourite_tanksMaxOrderByAggregateInput
    _min?: favourite_tanksMinOrderByAggregateInput
    _sum?: favourite_tanksSumOrderByAggregateInput
  }

  export type favourite_tanksScalarWhereWithAggregatesInput = {
    AND?: favourite_tanksScalarWhereWithAggregatesInput | favourite_tanksScalarWhereWithAggregatesInput[]
    OR?: favourite_tanksScalarWhereWithAggregatesInput[]
    NOT?: favourite_tanksScalarWhereWithAggregatesInput | favourite_tanksScalarWhereWithAggregatesInput[]
    fav_id?: IntWithAggregatesFilter<"favourite_tanks"> | number
    user_id?: IntWithAggregatesFilter<"favourite_tanks"> | number
    tank_id?: IntWithAggregatesFilter<"favourite_tanks"> | number
  }

  export type photosWhereInput = {
    AND?: photosWhereInput | photosWhereInput[]
    OR?: photosWhereInput[]
    NOT?: photosWhereInput | photosWhereInput[]
    photo_id?: IntFilter<"photos"> | number
    filename?: StringFilter<"photos"> | string
    filepath?: StringFilter<"photos"> | string
    tanks?: Tank_photosListRelationFilter
  }

  export type photosOrderByWithRelationInput = {
    photo_id?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    tanks?: tank_photosOrderByRelationAggregateInput
    _relevance?: photosOrderByRelevanceInput
  }

  export type photosWhereUniqueInput = Prisma.AtLeast<{
    photo_id?: number
    AND?: photosWhereInput | photosWhereInput[]
    OR?: photosWhereInput[]
    NOT?: photosWhereInput | photosWhereInput[]
    filename?: StringFilter<"photos"> | string
    filepath?: StringFilter<"photos"> | string
    tanks?: Tank_photosListRelationFilter
  }, "photo_id">

  export type photosOrderByWithAggregationInput = {
    photo_id?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    _count?: photosCountOrderByAggregateInput
    _avg?: photosAvgOrderByAggregateInput
    _max?: photosMaxOrderByAggregateInput
    _min?: photosMinOrderByAggregateInput
    _sum?: photosSumOrderByAggregateInput
  }

  export type photosScalarWhereWithAggregatesInput = {
    AND?: photosScalarWhereWithAggregatesInput | photosScalarWhereWithAggregatesInput[]
    OR?: photosScalarWhereWithAggregatesInput[]
    NOT?: photosScalarWhereWithAggregatesInput | photosScalarWhereWithAggregatesInput[]
    photo_id?: IntWithAggregatesFilter<"photos"> | number
    filename?: StringWithAggregatesFilter<"photos"> | string
    filepath?: StringWithAggregatesFilter<"photos"> | string
  }

  export type tank_photosWhereInput = {
    AND?: tank_photosWhereInput | tank_photosWhereInput[]
    OR?: tank_photosWhereInput[]
    NOT?: tank_photosWhereInput | tank_photosWhereInput[]
    id?: IntFilter<"tank_photos"> | number
    tank_id?: IntFilter<"tank_photos"> | number
    photo_id?: IntFilter<"tank_photos"> | number
    tanks?: XOR<TanksScalarRelationFilter, tanksWhereInput>
    photos?: XOR<PhotosScalarRelationFilter, photosWhereInput>
  }

  export type tank_photosOrderByWithRelationInput = {
    id?: SortOrder
    tank_id?: SortOrder
    photo_id?: SortOrder
    tanks?: tanksOrderByWithRelationInput
    photos?: photosOrderByWithRelationInput
  }

  export type tank_photosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tank_id_photo_id?: tank_photosTank_idPhoto_idCompoundUniqueInput
    AND?: tank_photosWhereInput | tank_photosWhereInput[]
    OR?: tank_photosWhereInput[]
    NOT?: tank_photosWhereInput | tank_photosWhereInput[]
    tank_id?: IntFilter<"tank_photos"> | number
    photo_id?: IntFilter<"tank_photos"> | number
    tanks?: XOR<TanksScalarRelationFilter, tanksWhereInput>
    photos?: XOR<PhotosScalarRelationFilter, photosWhereInput>
  }, "id" | "tank_id_photo_id">

  export type tank_photosOrderByWithAggregationInput = {
    id?: SortOrder
    tank_id?: SortOrder
    photo_id?: SortOrder
    _count?: tank_photosCountOrderByAggregateInput
    _avg?: tank_photosAvgOrderByAggregateInput
    _max?: tank_photosMaxOrderByAggregateInput
    _min?: tank_photosMinOrderByAggregateInput
    _sum?: tank_photosSumOrderByAggregateInput
  }

  export type tank_photosScalarWhereWithAggregatesInput = {
    AND?: tank_photosScalarWhereWithAggregatesInput | tank_photosScalarWhereWithAggregatesInput[]
    OR?: tank_photosScalarWhereWithAggregatesInput[]
    NOT?: tank_photosScalarWhereWithAggregatesInput | tank_photosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tank_photos"> | number
    tank_id?: IntWithAggregatesFilter<"tank_photos"> | number
    photo_id?: IntWithAggregatesFilter<"tank_photos"> | number
  }

  export type countriesWhereInput = {
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    country_id?: IntFilter<"countries"> | number
    name?: StringFilter<"countries"> | string
    battleCountries?: Battlelocation_countryListRelationFilter
    tanks?: TanksListRelationFilter
  }

  export type countriesOrderByWithRelationInput = {
    country_id?: SortOrder
    name?: SortOrder
    battleCountries?: battlelocation_countryOrderByRelationAggregateInput
    tanks?: tanksOrderByRelationAggregateInput
    _relevance?: countriesOrderByRelevanceInput
  }

  export type countriesWhereUniqueInput = Prisma.AtLeast<{
    country_id?: number
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    name?: StringFilter<"countries"> | string
    battleCountries?: Battlelocation_countryListRelationFilter
    tanks?: TanksListRelationFilter
  }, "country_id">

  export type countriesOrderByWithAggregationInput = {
    country_id?: SortOrder
    name?: SortOrder
    _count?: countriesCountOrderByAggregateInput
    _avg?: countriesAvgOrderByAggregateInput
    _max?: countriesMaxOrderByAggregateInput
    _min?: countriesMinOrderByAggregateInput
    _sum?: countriesSumOrderByAggregateInput
  }

  export type countriesScalarWhereWithAggregatesInput = {
    AND?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    OR?: countriesScalarWhereWithAggregatesInput[]
    NOT?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    country_id?: IntWithAggregatesFilter<"countries"> | number
    name?: StringWithAggregatesFilter<"countries"> | string
  }

  export type vehicle_typesWhereInput = {
    AND?: vehicle_typesWhereInput | vehicle_typesWhereInput[]
    OR?: vehicle_typesWhereInput[]
    NOT?: vehicle_typesWhereInput | vehicle_typesWhereInput[]
    type_id?: IntFilter<"vehicle_types"> | number
    name?: StringFilter<"vehicle_types"> | string
    tanks?: TanksListRelationFilter
  }

  export type vehicle_typesOrderByWithRelationInput = {
    type_id?: SortOrder
    name?: SortOrder
    tanks?: tanksOrderByRelationAggregateInput
    _relevance?: vehicle_typesOrderByRelevanceInput
  }

  export type vehicle_typesWhereUniqueInput = Prisma.AtLeast<{
    type_id?: number
    AND?: vehicle_typesWhereInput | vehicle_typesWhereInput[]
    OR?: vehicle_typesWhereInput[]
    NOT?: vehicle_typesWhereInput | vehicle_typesWhereInput[]
    name?: StringFilter<"vehicle_types"> | string
    tanks?: TanksListRelationFilter
  }, "type_id">

  export type vehicle_typesOrderByWithAggregationInput = {
    type_id?: SortOrder
    name?: SortOrder
    _count?: vehicle_typesCountOrderByAggregateInput
    _avg?: vehicle_typesAvgOrderByAggregateInput
    _max?: vehicle_typesMaxOrderByAggregateInput
    _min?: vehicle_typesMinOrderByAggregateInput
    _sum?: vehicle_typesSumOrderByAggregateInput
  }

  export type vehicle_typesScalarWhereWithAggregatesInput = {
    AND?: vehicle_typesScalarWhereWithAggregatesInput | vehicle_typesScalarWhereWithAggregatesInput[]
    OR?: vehicle_typesScalarWhereWithAggregatesInput[]
    NOT?: vehicle_typesScalarWhereWithAggregatesInput | vehicle_typesScalarWhereWithAggregatesInput[]
    type_id?: IntWithAggregatesFilter<"vehicle_types"> | number
    name?: StringWithAggregatesFilter<"vehicle_types"> | string
  }

  export type tanksWhereInput = {
    AND?: tanksWhereInput | tanksWhereInput[]
    OR?: tanksWhereInput[]
    NOT?: tanksWhereInput | tanksWhereInput[]
    tank_id?: IntFilter<"tanks"> | number
    name?: StringFilter<"tanks"> | string
    country_id?: IntNullableFilter<"tanks"> | number | null
    type_id?: IntNullableFilter<"tanks"> | number | null
    weight_kg?: IntNullableFilter<"tanks"> | number | null
    crew?: IntNullableFilter<"tanks"> | number | null
    engine_power_hp?: IntNullableFilter<"tanks"> | number | null
    top_speed_kmh?: DecimalNullableFilter<"tanks"> | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: IntNullableFilter<"tanks"> | number | null
    armor_side_mm?: IntNullableFilter<"tanks"> | number | null
    armor_rear_mm?: IntNullableFilter<"tanks"> | number | null
    gun_caliber_mm?: DecimalNullableFilter<"tanks"> | Decimal | DecimalJsLike | number | string | null
    year_introduced?: IntNullableFilter<"tanks"> | number | null
    notes?: StringNullableFilter<"tanks"> | string | null
    countries?: XOR<CountriesNullableScalarRelationFilter, countriesWhereInput> | null
    vehicle_types?: XOR<Vehicle_typesNullableScalarRelationFilter, vehicle_typesWhereInput> | null
    battleTanks?: Battlelocation_tankListRelationFilter
    favourite_tanks?: Favourite_tanksListRelationFilter
    photos?: Tank_photosListRelationFilter
  }

  export type tanksOrderByWithRelationInput = {
    tank_id?: SortOrder
    name?: SortOrder
    country_id?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    weight_kg?: SortOrderInput | SortOrder
    crew?: SortOrderInput | SortOrder
    engine_power_hp?: SortOrderInput | SortOrder
    top_speed_kmh?: SortOrderInput | SortOrder
    armor_front_mm?: SortOrderInput | SortOrder
    armor_side_mm?: SortOrderInput | SortOrder
    armor_rear_mm?: SortOrderInput | SortOrder
    gun_caliber_mm?: SortOrderInput | SortOrder
    year_introduced?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    countries?: countriesOrderByWithRelationInput
    vehicle_types?: vehicle_typesOrderByWithRelationInput
    battleTanks?: battlelocation_tankOrderByRelationAggregateInput
    favourite_tanks?: favourite_tanksOrderByRelationAggregateInput
    photos?: tank_photosOrderByRelationAggregateInput
    _relevance?: tanksOrderByRelevanceInput
  }

  export type tanksWhereUniqueInput = Prisma.AtLeast<{
    tank_id?: number
    AND?: tanksWhereInput | tanksWhereInput[]
    OR?: tanksWhereInput[]
    NOT?: tanksWhereInput | tanksWhereInput[]
    name?: StringFilter<"tanks"> | string
    country_id?: IntNullableFilter<"tanks"> | number | null
    type_id?: IntNullableFilter<"tanks"> | number | null
    weight_kg?: IntNullableFilter<"tanks"> | number | null
    crew?: IntNullableFilter<"tanks"> | number | null
    engine_power_hp?: IntNullableFilter<"tanks"> | number | null
    top_speed_kmh?: DecimalNullableFilter<"tanks"> | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: IntNullableFilter<"tanks"> | number | null
    armor_side_mm?: IntNullableFilter<"tanks"> | number | null
    armor_rear_mm?: IntNullableFilter<"tanks"> | number | null
    gun_caliber_mm?: DecimalNullableFilter<"tanks"> | Decimal | DecimalJsLike | number | string | null
    year_introduced?: IntNullableFilter<"tanks"> | number | null
    notes?: StringNullableFilter<"tanks"> | string | null
    countries?: XOR<CountriesNullableScalarRelationFilter, countriesWhereInput> | null
    vehicle_types?: XOR<Vehicle_typesNullableScalarRelationFilter, vehicle_typesWhereInput> | null
    battleTanks?: Battlelocation_tankListRelationFilter
    favourite_tanks?: Favourite_tanksListRelationFilter
    photos?: Tank_photosListRelationFilter
  }, "tank_id">

  export type tanksOrderByWithAggregationInput = {
    tank_id?: SortOrder
    name?: SortOrder
    country_id?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    weight_kg?: SortOrderInput | SortOrder
    crew?: SortOrderInput | SortOrder
    engine_power_hp?: SortOrderInput | SortOrder
    top_speed_kmh?: SortOrderInput | SortOrder
    armor_front_mm?: SortOrderInput | SortOrder
    armor_side_mm?: SortOrderInput | SortOrder
    armor_rear_mm?: SortOrderInput | SortOrder
    gun_caliber_mm?: SortOrderInput | SortOrder
    year_introduced?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: tanksCountOrderByAggregateInput
    _avg?: tanksAvgOrderByAggregateInput
    _max?: tanksMaxOrderByAggregateInput
    _min?: tanksMinOrderByAggregateInput
    _sum?: tanksSumOrderByAggregateInput
  }

  export type tanksScalarWhereWithAggregatesInput = {
    AND?: tanksScalarWhereWithAggregatesInput | tanksScalarWhereWithAggregatesInput[]
    OR?: tanksScalarWhereWithAggregatesInput[]
    NOT?: tanksScalarWhereWithAggregatesInput | tanksScalarWhereWithAggregatesInput[]
    tank_id?: IntWithAggregatesFilter<"tanks"> | number
    name?: StringWithAggregatesFilter<"tanks"> | string
    country_id?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    type_id?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    weight_kg?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    crew?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    engine_power_hp?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    top_speed_kmh?: DecimalNullableWithAggregatesFilter<"tanks"> | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    armor_side_mm?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    armor_rear_mm?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    gun_caliber_mm?: DecimalNullableWithAggregatesFilter<"tanks"> | Decimal | DecimalJsLike | number | string | null
    year_introduced?: IntNullableWithAggregatesFilter<"tanks"> | number | null
    notes?: StringNullableWithAggregatesFilter<"tanks"> | string | null
  }

  export type battlelocationCreateInput = {
    name: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    battleCountries?: battlelocation_countryCreateNestedManyWithoutBattlelocationInput
    battleTanks?: battlelocation_tankCreateNestedManyWithoutBattlelocationInput
  }

  export type battlelocationUncheckedCreateInput = {
    id?: number
    name: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    battleCountries?: battlelocation_countryUncheckedCreateNestedManyWithoutBattlelocationInput
    battleTanks?: battlelocation_tankUncheckedCreateNestedManyWithoutBattlelocationInput
  }

  export type battlelocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    battleCountries?: battlelocation_countryUpdateManyWithoutBattlelocationNestedInput
    battleTanks?: battlelocation_tankUpdateManyWithoutBattlelocationNestedInput
  }

  export type battlelocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    battleCountries?: battlelocation_countryUncheckedUpdateManyWithoutBattlelocationNestedInput
    battleTanks?: battlelocation_tankUncheckedUpdateManyWithoutBattlelocationNestedInput
  }

  export type battlelocationCreateManyInput = {
    id?: number
    name: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
  }

  export type battlelocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type battlelocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type battlelocation_countryCreateInput = {
    battlelocation: battlelocationCreateNestedOneWithoutBattleCountriesInput
    countries: countriesCreateNestedOneWithoutBattleCountriesInput
  }

  export type battlelocation_countryUncheckedCreateInput = {
    battlelocation_id: number
    country_id: number
  }

  export type battlelocation_countryUpdateInput = {
    battlelocation?: battlelocationUpdateOneRequiredWithoutBattleCountriesNestedInput
    countries?: countriesUpdateOneRequiredWithoutBattleCountriesNestedInput
  }

  export type battlelocation_countryUncheckedUpdateInput = {
    battlelocation_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_countryCreateManyInput = {
    battlelocation_id: number
    country_id: number
  }

  export type battlelocation_countryUpdateManyMutationInput = {

  }

  export type battlelocation_countryUncheckedUpdateManyInput = {
    battlelocation_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_tankCreateInput = {
    battlelocation: battlelocationCreateNestedOneWithoutBattleTanksInput
    tanks: tanksCreateNestedOneWithoutBattleTanksInput
  }

  export type battlelocation_tankUncheckedCreateInput = {
    battlelocation_id: number
    tank_id: number
  }

  export type battlelocation_tankUpdateInput = {
    battlelocation?: battlelocationUpdateOneRequiredWithoutBattleTanksNestedInput
    tanks?: tanksUpdateOneRequiredWithoutBattleTanksNestedInput
  }

  export type battlelocation_tankUncheckedUpdateInput = {
    battlelocation_id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_tankCreateManyInput = {
    battlelocation_id: number
    tank_id: number
  }

  export type battlelocation_tankUpdateManyMutationInput = {

  }

  export type battlelocation_tankUncheckedUpdateManyInput = {
    battlelocation_id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    nickname: string
    password: string
    email: string
    role?: string
    avatar_url?: string | null
    favourite_tanks?: favourite_tanksCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    nickname: string
    password: string
    email: string
    role?: string
    avatar_url?: string | null
    favourite_tanks?: favourite_tanksUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    favourite_tanks?: favourite_tanksUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    favourite_tanks?: favourite_tanksUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    nickname: string
    password: string
    email: string
    role?: string
    avatar_url?: string | null
  }

  export type usersUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favourite_tanksCreateInput = {
    users: usersCreateNestedOneWithoutFavourite_tanksInput
    tanks: tanksCreateNestedOneWithoutFavourite_tanksInput
  }

  export type favourite_tanksUncheckedCreateInput = {
    fav_id?: number
    user_id: number
    tank_id: number
  }

  export type favourite_tanksUpdateInput = {
    users?: usersUpdateOneRequiredWithoutFavourite_tanksNestedInput
    tanks?: tanksUpdateOneRequiredWithoutFavourite_tanksNestedInput
  }

  export type favourite_tanksUncheckedUpdateInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type favourite_tanksCreateManyInput = {
    fav_id?: number
    user_id: number
    tank_id: number
  }

  export type favourite_tanksUpdateManyMutationInput = {

  }

  export type favourite_tanksUncheckedUpdateManyInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type photosCreateInput = {
    filename: string
    filepath: string
    tanks?: tank_photosCreateNestedManyWithoutPhotosInput
  }

  export type photosUncheckedCreateInput = {
    photo_id?: number
    filename: string
    filepath: string
    tanks?: tank_photosUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type photosUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    tanks?: tank_photosUpdateManyWithoutPhotosNestedInput
  }

  export type photosUncheckedUpdateInput = {
    photo_id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    tanks?: tank_photosUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type photosCreateManyInput = {
    photo_id?: number
    filename: string
    filepath: string
  }

  export type photosUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
  }

  export type photosUncheckedUpdateManyInput = {
    photo_id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
  }

  export type tank_photosCreateInput = {
    tanks: tanksCreateNestedOneWithoutPhotosInput
    photos: photosCreateNestedOneWithoutTanksInput
  }

  export type tank_photosUncheckedCreateInput = {
    id?: number
    tank_id: number
    photo_id: number
  }

  export type tank_photosUpdateInput = {
    tanks?: tanksUpdateOneRequiredWithoutPhotosNestedInput
    photos?: photosUpdateOneRequiredWithoutTanksNestedInput
  }

  export type tank_photosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
  }

  export type tank_photosCreateManyInput = {
    id?: number
    tank_id: number
    photo_id: number
  }

  export type tank_photosUpdateManyMutationInput = {

  }

  export type tank_photosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
  }

  export type countriesCreateInput = {
    name: string
    battleCountries?: battlelocation_countryCreateNestedManyWithoutCountriesInput
    tanks?: tanksCreateNestedManyWithoutCountriesInput
  }

  export type countriesUncheckedCreateInput = {
    country_id?: number
    name: string
    battleCountries?: battlelocation_countryUncheckedCreateNestedManyWithoutCountriesInput
    tanks?: tanksUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type countriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    battleCountries?: battlelocation_countryUpdateManyWithoutCountriesNestedInput
    tanks?: tanksUpdateManyWithoutCountriesNestedInput
  }

  export type countriesUncheckedUpdateInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    battleCountries?: battlelocation_countryUncheckedUpdateManyWithoutCountriesNestedInput
    tanks?: tanksUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type countriesCreateManyInput = {
    country_id?: number
    name: string
  }

  export type countriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type countriesUncheckedUpdateManyInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type vehicle_typesCreateInput = {
    name: string
    tanks?: tanksCreateNestedManyWithoutVehicle_typesInput
  }

  export type vehicle_typesUncheckedCreateInput = {
    type_id?: number
    name: string
    tanks?: tanksUncheckedCreateNestedManyWithoutVehicle_typesInput
  }

  export type vehicle_typesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tanks?: tanksUpdateManyWithoutVehicle_typesNestedInput
  }

  export type vehicle_typesUncheckedUpdateInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tanks?: tanksUncheckedUpdateManyWithoutVehicle_typesNestedInput
  }

  export type vehicle_typesCreateManyInput = {
    type_id?: number
    name: string
  }

  export type vehicle_typesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type vehicle_typesUncheckedUpdateManyInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type tanksCreateInput = {
    name: string
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    countries?: countriesCreateNestedOneWithoutTanksInput
    vehicle_types?: vehicle_typesCreateNestedOneWithoutTanksInput
    battleTanks?: battlelocation_tankCreateNestedManyWithoutTanksInput
    favourite_tanks?: favourite_tanksCreateNestedManyWithoutTanksInput
    photos?: tank_photosCreateNestedManyWithoutTanksInput
  }

  export type tanksUncheckedCreateInput = {
    tank_id?: number
    name: string
    country_id?: number | null
    type_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    battleTanks?: battlelocation_tankUncheckedCreateNestedManyWithoutTanksInput
    favourite_tanks?: favourite_tanksUncheckedCreateNestedManyWithoutTanksInput
    photos?: tank_photosUncheckedCreateNestedManyWithoutTanksInput
  }

  export type tanksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    countries?: countriesUpdateOneWithoutTanksNestedInput
    vehicle_types?: vehicle_typesUpdateOneWithoutTanksNestedInput
    battleTanks?: battlelocation_tankUpdateManyWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUpdateManyWithoutTanksNestedInput
  }

  export type tanksUncheckedUpdateInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    battleTanks?: battlelocation_tankUncheckedUpdateManyWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUncheckedUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUncheckedUpdateManyWithoutTanksNestedInput
  }

  export type tanksCreateManyInput = {
    tank_id?: number
    name: string
    country_id?: number | null
    type_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
  }

  export type tanksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tanksUncheckedUpdateManyInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type Battlelocation_countryListRelationFilter = {
    every?: battlelocation_countryWhereInput
    some?: battlelocation_countryWhereInput
    none?: battlelocation_countryWhereInput
  }

  export type Battlelocation_tankListRelationFilter = {
    every?: battlelocation_tankWhereInput
    some?: battlelocation_tankWhereInput
    none?: battlelocation_tankWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type battlelocation_countryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type battlelocation_tankOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type battlelocationOrderByRelevanceInput = {
    fields: battlelocationOrderByRelevanceFieldEnum | battlelocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type battlelocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type battlelocationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type battlelocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type battlelocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type battlelocationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type BattlelocationScalarRelationFilter = {
    is?: battlelocationWhereInput
    isNot?: battlelocationWhereInput
  }

  export type CountriesScalarRelationFilter = {
    is?: countriesWhereInput
    isNot?: countriesWhereInput
  }

  export type battlelocation_countryBattlelocation_idCountry_idCompoundUniqueInput = {
    battlelocation_id: number
    country_id: number
  }

  export type battlelocation_countryCountOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    country_id?: SortOrder
  }

  export type battlelocation_countryAvgOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    country_id?: SortOrder
  }

  export type battlelocation_countryMaxOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    country_id?: SortOrder
  }

  export type battlelocation_countryMinOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    country_id?: SortOrder
  }

  export type battlelocation_countrySumOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    country_id?: SortOrder
  }

  export type TanksScalarRelationFilter = {
    is?: tanksWhereInput
    isNot?: tanksWhereInput
  }

  export type battlelocation_tankBattlelocation_idTank_idCompoundUniqueInput = {
    battlelocation_id: number
    tank_id: number
  }

  export type battlelocation_tankCountOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    tank_id?: SortOrder
  }

  export type battlelocation_tankAvgOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    tank_id?: SortOrder
  }

  export type battlelocation_tankMaxOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    tank_id?: SortOrder
  }

  export type battlelocation_tankMinOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    tank_id?: SortOrder
  }

  export type battlelocation_tankSumOrderByAggregateInput = {
    battlelocation_id?: SortOrder
    tank_id?: SortOrder
  }

  export type Favourite_tanksListRelationFilter = {
    every?: favourite_tanksWhereInput
    some?: favourite_tanksWhereInput
    none?: favourite_tanksWhereInput
  }

  export type favourite_tanksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    nickname?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type favourite_tanksUser_idTank_idCompoundUniqueInput = {
    user_id: number
    tank_id: number
  }

  export type favourite_tanksCountOrderByAggregateInput = {
    fav_id?: SortOrder
    user_id?: SortOrder
    tank_id?: SortOrder
  }

  export type favourite_tanksAvgOrderByAggregateInput = {
    fav_id?: SortOrder
    user_id?: SortOrder
    tank_id?: SortOrder
  }

  export type favourite_tanksMaxOrderByAggregateInput = {
    fav_id?: SortOrder
    user_id?: SortOrder
    tank_id?: SortOrder
  }

  export type favourite_tanksMinOrderByAggregateInput = {
    fav_id?: SortOrder
    user_id?: SortOrder
    tank_id?: SortOrder
  }

  export type favourite_tanksSumOrderByAggregateInput = {
    fav_id?: SortOrder
    user_id?: SortOrder
    tank_id?: SortOrder
  }

  export type Tank_photosListRelationFilter = {
    every?: tank_photosWhereInput
    some?: tank_photosWhereInput
    none?: tank_photosWhereInput
  }

  export type tank_photosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type photosOrderByRelevanceInput = {
    fields: photosOrderByRelevanceFieldEnum | photosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type photosCountOrderByAggregateInput = {
    photo_id?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
  }

  export type photosAvgOrderByAggregateInput = {
    photo_id?: SortOrder
  }

  export type photosMaxOrderByAggregateInput = {
    photo_id?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
  }

  export type photosMinOrderByAggregateInput = {
    photo_id?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
  }

  export type photosSumOrderByAggregateInput = {
    photo_id?: SortOrder
  }

  export type PhotosScalarRelationFilter = {
    is?: photosWhereInput
    isNot?: photosWhereInput
  }

  export type tank_photosTank_idPhoto_idCompoundUniqueInput = {
    tank_id: number
    photo_id: number
  }

  export type tank_photosCountOrderByAggregateInput = {
    id?: SortOrder
    tank_id?: SortOrder
    photo_id?: SortOrder
  }

  export type tank_photosAvgOrderByAggregateInput = {
    id?: SortOrder
    tank_id?: SortOrder
    photo_id?: SortOrder
  }

  export type tank_photosMaxOrderByAggregateInput = {
    id?: SortOrder
    tank_id?: SortOrder
    photo_id?: SortOrder
  }

  export type tank_photosMinOrderByAggregateInput = {
    id?: SortOrder
    tank_id?: SortOrder
    photo_id?: SortOrder
  }

  export type tank_photosSumOrderByAggregateInput = {
    id?: SortOrder
    tank_id?: SortOrder
    photo_id?: SortOrder
  }

  export type TanksListRelationFilter = {
    every?: tanksWhereInput
    some?: tanksWhereInput
    none?: tanksWhereInput
  }

  export type tanksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type countriesOrderByRelevanceInput = {
    fields: countriesOrderByRelevanceFieldEnum | countriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type countriesCountOrderByAggregateInput = {
    country_id?: SortOrder
    name?: SortOrder
  }

  export type countriesAvgOrderByAggregateInput = {
    country_id?: SortOrder
  }

  export type countriesMaxOrderByAggregateInput = {
    country_id?: SortOrder
    name?: SortOrder
  }

  export type countriesMinOrderByAggregateInput = {
    country_id?: SortOrder
    name?: SortOrder
  }

  export type countriesSumOrderByAggregateInput = {
    country_id?: SortOrder
  }

  export type vehicle_typesOrderByRelevanceInput = {
    fields: vehicle_typesOrderByRelevanceFieldEnum | vehicle_typesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vehicle_typesCountOrderByAggregateInput = {
    type_id?: SortOrder
    name?: SortOrder
  }

  export type vehicle_typesAvgOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type vehicle_typesMaxOrderByAggregateInput = {
    type_id?: SortOrder
    name?: SortOrder
  }

  export type vehicle_typesMinOrderByAggregateInput = {
    type_id?: SortOrder
    name?: SortOrder
  }

  export type vehicle_typesSumOrderByAggregateInput = {
    type_id?: SortOrder
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

  export type CountriesNullableScalarRelationFilter = {
    is?: countriesWhereInput | null
    isNot?: countriesWhereInput | null
  }

  export type Vehicle_typesNullableScalarRelationFilter = {
    is?: vehicle_typesWhereInput | null
    isNot?: vehicle_typesWhereInput | null
  }

  export type tanksOrderByRelevanceInput = {
    fields: tanksOrderByRelevanceFieldEnum | tanksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tanksCountOrderByAggregateInput = {
    tank_id?: SortOrder
    name?: SortOrder
    country_id?: SortOrder
    type_id?: SortOrder
    weight_kg?: SortOrder
    crew?: SortOrder
    engine_power_hp?: SortOrder
    top_speed_kmh?: SortOrder
    armor_front_mm?: SortOrder
    armor_side_mm?: SortOrder
    armor_rear_mm?: SortOrder
    gun_caliber_mm?: SortOrder
    year_introduced?: SortOrder
    notes?: SortOrder
  }

  export type tanksAvgOrderByAggregateInput = {
    tank_id?: SortOrder
    country_id?: SortOrder
    type_id?: SortOrder
    weight_kg?: SortOrder
    crew?: SortOrder
    engine_power_hp?: SortOrder
    top_speed_kmh?: SortOrder
    armor_front_mm?: SortOrder
    armor_side_mm?: SortOrder
    armor_rear_mm?: SortOrder
    gun_caliber_mm?: SortOrder
    year_introduced?: SortOrder
  }

  export type tanksMaxOrderByAggregateInput = {
    tank_id?: SortOrder
    name?: SortOrder
    country_id?: SortOrder
    type_id?: SortOrder
    weight_kg?: SortOrder
    crew?: SortOrder
    engine_power_hp?: SortOrder
    top_speed_kmh?: SortOrder
    armor_front_mm?: SortOrder
    armor_side_mm?: SortOrder
    armor_rear_mm?: SortOrder
    gun_caliber_mm?: SortOrder
    year_introduced?: SortOrder
    notes?: SortOrder
  }

  export type tanksMinOrderByAggregateInput = {
    tank_id?: SortOrder
    name?: SortOrder
    country_id?: SortOrder
    type_id?: SortOrder
    weight_kg?: SortOrder
    crew?: SortOrder
    engine_power_hp?: SortOrder
    top_speed_kmh?: SortOrder
    armor_front_mm?: SortOrder
    armor_side_mm?: SortOrder
    armor_rear_mm?: SortOrder
    gun_caliber_mm?: SortOrder
    year_introduced?: SortOrder
    notes?: SortOrder
  }

  export type tanksSumOrderByAggregateInput = {
    tank_id?: SortOrder
    country_id?: SortOrder
    type_id?: SortOrder
    weight_kg?: SortOrder
    crew?: SortOrder
    engine_power_hp?: SortOrder
    top_speed_kmh?: SortOrder
    armor_front_mm?: SortOrder
    armor_side_mm?: SortOrder
    armor_rear_mm?: SortOrder
    gun_caliber_mm?: SortOrder
    year_introduced?: SortOrder
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

  export type battlelocation_countryCreateNestedManyWithoutBattlelocationInput = {
    create?: XOR<battlelocation_countryCreateWithoutBattlelocationInput, battlelocation_countryUncheckedCreateWithoutBattlelocationInput> | battlelocation_countryCreateWithoutBattlelocationInput[] | battlelocation_countryUncheckedCreateWithoutBattlelocationInput[]
    connectOrCreate?: battlelocation_countryCreateOrConnectWithoutBattlelocationInput | battlelocation_countryCreateOrConnectWithoutBattlelocationInput[]
    createMany?: battlelocation_countryCreateManyBattlelocationInputEnvelope
    connect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
  }

  export type battlelocation_tankCreateNestedManyWithoutBattlelocationInput = {
    create?: XOR<battlelocation_tankCreateWithoutBattlelocationInput, battlelocation_tankUncheckedCreateWithoutBattlelocationInput> | battlelocation_tankCreateWithoutBattlelocationInput[] | battlelocation_tankUncheckedCreateWithoutBattlelocationInput[]
    connectOrCreate?: battlelocation_tankCreateOrConnectWithoutBattlelocationInput | battlelocation_tankCreateOrConnectWithoutBattlelocationInput[]
    createMany?: battlelocation_tankCreateManyBattlelocationInputEnvelope
    connect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
  }

  export type battlelocation_countryUncheckedCreateNestedManyWithoutBattlelocationInput = {
    create?: XOR<battlelocation_countryCreateWithoutBattlelocationInput, battlelocation_countryUncheckedCreateWithoutBattlelocationInput> | battlelocation_countryCreateWithoutBattlelocationInput[] | battlelocation_countryUncheckedCreateWithoutBattlelocationInput[]
    connectOrCreate?: battlelocation_countryCreateOrConnectWithoutBattlelocationInput | battlelocation_countryCreateOrConnectWithoutBattlelocationInput[]
    createMany?: battlelocation_countryCreateManyBattlelocationInputEnvelope
    connect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
  }

  export type battlelocation_tankUncheckedCreateNestedManyWithoutBattlelocationInput = {
    create?: XOR<battlelocation_tankCreateWithoutBattlelocationInput, battlelocation_tankUncheckedCreateWithoutBattlelocationInput> | battlelocation_tankCreateWithoutBattlelocationInput[] | battlelocation_tankUncheckedCreateWithoutBattlelocationInput[]
    connectOrCreate?: battlelocation_tankCreateOrConnectWithoutBattlelocationInput | battlelocation_tankCreateOrConnectWithoutBattlelocationInput[]
    createMany?: battlelocation_tankCreateManyBattlelocationInputEnvelope
    connect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type battlelocation_countryUpdateManyWithoutBattlelocationNestedInput = {
    create?: XOR<battlelocation_countryCreateWithoutBattlelocationInput, battlelocation_countryUncheckedCreateWithoutBattlelocationInput> | battlelocation_countryCreateWithoutBattlelocationInput[] | battlelocation_countryUncheckedCreateWithoutBattlelocationInput[]
    connectOrCreate?: battlelocation_countryCreateOrConnectWithoutBattlelocationInput | battlelocation_countryCreateOrConnectWithoutBattlelocationInput[]
    upsert?: battlelocation_countryUpsertWithWhereUniqueWithoutBattlelocationInput | battlelocation_countryUpsertWithWhereUniqueWithoutBattlelocationInput[]
    createMany?: battlelocation_countryCreateManyBattlelocationInputEnvelope
    set?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    disconnect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    delete?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    connect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    update?: battlelocation_countryUpdateWithWhereUniqueWithoutBattlelocationInput | battlelocation_countryUpdateWithWhereUniqueWithoutBattlelocationInput[]
    updateMany?: battlelocation_countryUpdateManyWithWhereWithoutBattlelocationInput | battlelocation_countryUpdateManyWithWhereWithoutBattlelocationInput[]
    deleteMany?: battlelocation_countryScalarWhereInput | battlelocation_countryScalarWhereInput[]
  }

  export type battlelocation_tankUpdateManyWithoutBattlelocationNestedInput = {
    create?: XOR<battlelocation_tankCreateWithoutBattlelocationInput, battlelocation_tankUncheckedCreateWithoutBattlelocationInput> | battlelocation_tankCreateWithoutBattlelocationInput[] | battlelocation_tankUncheckedCreateWithoutBattlelocationInput[]
    connectOrCreate?: battlelocation_tankCreateOrConnectWithoutBattlelocationInput | battlelocation_tankCreateOrConnectWithoutBattlelocationInput[]
    upsert?: battlelocation_tankUpsertWithWhereUniqueWithoutBattlelocationInput | battlelocation_tankUpsertWithWhereUniqueWithoutBattlelocationInput[]
    createMany?: battlelocation_tankCreateManyBattlelocationInputEnvelope
    set?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    disconnect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    delete?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    connect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    update?: battlelocation_tankUpdateWithWhereUniqueWithoutBattlelocationInput | battlelocation_tankUpdateWithWhereUniqueWithoutBattlelocationInput[]
    updateMany?: battlelocation_tankUpdateManyWithWhereWithoutBattlelocationInput | battlelocation_tankUpdateManyWithWhereWithoutBattlelocationInput[]
    deleteMany?: battlelocation_tankScalarWhereInput | battlelocation_tankScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type battlelocation_countryUncheckedUpdateManyWithoutBattlelocationNestedInput = {
    create?: XOR<battlelocation_countryCreateWithoutBattlelocationInput, battlelocation_countryUncheckedCreateWithoutBattlelocationInput> | battlelocation_countryCreateWithoutBattlelocationInput[] | battlelocation_countryUncheckedCreateWithoutBattlelocationInput[]
    connectOrCreate?: battlelocation_countryCreateOrConnectWithoutBattlelocationInput | battlelocation_countryCreateOrConnectWithoutBattlelocationInput[]
    upsert?: battlelocation_countryUpsertWithWhereUniqueWithoutBattlelocationInput | battlelocation_countryUpsertWithWhereUniqueWithoutBattlelocationInput[]
    createMany?: battlelocation_countryCreateManyBattlelocationInputEnvelope
    set?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    disconnect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    delete?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    connect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    update?: battlelocation_countryUpdateWithWhereUniqueWithoutBattlelocationInput | battlelocation_countryUpdateWithWhereUniqueWithoutBattlelocationInput[]
    updateMany?: battlelocation_countryUpdateManyWithWhereWithoutBattlelocationInput | battlelocation_countryUpdateManyWithWhereWithoutBattlelocationInput[]
    deleteMany?: battlelocation_countryScalarWhereInput | battlelocation_countryScalarWhereInput[]
  }

  export type battlelocation_tankUncheckedUpdateManyWithoutBattlelocationNestedInput = {
    create?: XOR<battlelocation_tankCreateWithoutBattlelocationInput, battlelocation_tankUncheckedCreateWithoutBattlelocationInput> | battlelocation_tankCreateWithoutBattlelocationInput[] | battlelocation_tankUncheckedCreateWithoutBattlelocationInput[]
    connectOrCreate?: battlelocation_tankCreateOrConnectWithoutBattlelocationInput | battlelocation_tankCreateOrConnectWithoutBattlelocationInput[]
    upsert?: battlelocation_tankUpsertWithWhereUniqueWithoutBattlelocationInput | battlelocation_tankUpsertWithWhereUniqueWithoutBattlelocationInput[]
    createMany?: battlelocation_tankCreateManyBattlelocationInputEnvelope
    set?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    disconnect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    delete?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    connect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    update?: battlelocation_tankUpdateWithWhereUniqueWithoutBattlelocationInput | battlelocation_tankUpdateWithWhereUniqueWithoutBattlelocationInput[]
    updateMany?: battlelocation_tankUpdateManyWithWhereWithoutBattlelocationInput | battlelocation_tankUpdateManyWithWhereWithoutBattlelocationInput[]
    deleteMany?: battlelocation_tankScalarWhereInput | battlelocation_tankScalarWhereInput[]
  }

  export type battlelocationCreateNestedOneWithoutBattleCountriesInput = {
    create?: XOR<battlelocationCreateWithoutBattleCountriesInput, battlelocationUncheckedCreateWithoutBattleCountriesInput>
    connectOrCreate?: battlelocationCreateOrConnectWithoutBattleCountriesInput
    connect?: battlelocationWhereUniqueInput
  }

  export type countriesCreateNestedOneWithoutBattleCountriesInput = {
    create?: XOR<countriesCreateWithoutBattleCountriesInput, countriesUncheckedCreateWithoutBattleCountriesInput>
    connectOrCreate?: countriesCreateOrConnectWithoutBattleCountriesInput
    connect?: countriesWhereUniqueInput
  }

  export type battlelocationUpdateOneRequiredWithoutBattleCountriesNestedInput = {
    create?: XOR<battlelocationCreateWithoutBattleCountriesInput, battlelocationUncheckedCreateWithoutBattleCountriesInput>
    connectOrCreate?: battlelocationCreateOrConnectWithoutBattleCountriesInput
    upsert?: battlelocationUpsertWithoutBattleCountriesInput
    connect?: battlelocationWhereUniqueInput
    update?: XOR<XOR<battlelocationUpdateToOneWithWhereWithoutBattleCountriesInput, battlelocationUpdateWithoutBattleCountriesInput>, battlelocationUncheckedUpdateWithoutBattleCountriesInput>
  }

  export type countriesUpdateOneRequiredWithoutBattleCountriesNestedInput = {
    create?: XOR<countriesCreateWithoutBattleCountriesInput, countriesUncheckedCreateWithoutBattleCountriesInput>
    connectOrCreate?: countriesCreateOrConnectWithoutBattleCountriesInput
    upsert?: countriesUpsertWithoutBattleCountriesInput
    connect?: countriesWhereUniqueInput
    update?: XOR<XOR<countriesUpdateToOneWithWhereWithoutBattleCountriesInput, countriesUpdateWithoutBattleCountriesInput>, countriesUncheckedUpdateWithoutBattleCountriesInput>
  }

  export type battlelocationCreateNestedOneWithoutBattleTanksInput = {
    create?: XOR<battlelocationCreateWithoutBattleTanksInput, battlelocationUncheckedCreateWithoutBattleTanksInput>
    connectOrCreate?: battlelocationCreateOrConnectWithoutBattleTanksInput
    connect?: battlelocationWhereUniqueInput
  }

  export type tanksCreateNestedOneWithoutBattleTanksInput = {
    create?: XOR<tanksCreateWithoutBattleTanksInput, tanksUncheckedCreateWithoutBattleTanksInput>
    connectOrCreate?: tanksCreateOrConnectWithoutBattleTanksInput
    connect?: tanksWhereUniqueInput
  }

  export type battlelocationUpdateOneRequiredWithoutBattleTanksNestedInput = {
    create?: XOR<battlelocationCreateWithoutBattleTanksInput, battlelocationUncheckedCreateWithoutBattleTanksInput>
    connectOrCreate?: battlelocationCreateOrConnectWithoutBattleTanksInput
    upsert?: battlelocationUpsertWithoutBattleTanksInput
    connect?: battlelocationWhereUniqueInput
    update?: XOR<XOR<battlelocationUpdateToOneWithWhereWithoutBattleTanksInput, battlelocationUpdateWithoutBattleTanksInput>, battlelocationUncheckedUpdateWithoutBattleTanksInput>
  }

  export type tanksUpdateOneRequiredWithoutBattleTanksNestedInput = {
    create?: XOR<tanksCreateWithoutBattleTanksInput, tanksUncheckedCreateWithoutBattleTanksInput>
    connectOrCreate?: tanksCreateOrConnectWithoutBattleTanksInput
    upsert?: tanksUpsertWithoutBattleTanksInput
    connect?: tanksWhereUniqueInput
    update?: XOR<XOR<tanksUpdateToOneWithWhereWithoutBattleTanksInput, tanksUpdateWithoutBattleTanksInput>, tanksUncheckedUpdateWithoutBattleTanksInput>
  }

  export type favourite_tanksCreateNestedManyWithoutUsersInput = {
    create?: XOR<favourite_tanksCreateWithoutUsersInput, favourite_tanksUncheckedCreateWithoutUsersInput> | favourite_tanksCreateWithoutUsersInput[] | favourite_tanksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: favourite_tanksCreateOrConnectWithoutUsersInput | favourite_tanksCreateOrConnectWithoutUsersInput[]
    createMany?: favourite_tanksCreateManyUsersInputEnvelope
    connect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
  }

  export type favourite_tanksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<favourite_tanksCreateWithoutUsersInput, favourite_tanksUncheckedCreateWithoutUsersInput> | favourite_tanksCreateWithoutUsersInput[] | favourite_tanksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: favourite_tanksCreateOrConnectWithoutUsersInput | favourite_tanksCreateOrConnectWithoutUsersInput[]
    createMany?: favourite_tanksCreateManyUsersInputEnvelope
    connect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
  }

  export type favourite_tanksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<favourite_tanksCreateWithoutUsersInput, favourite_tanksUncheckedCreateWithoutUsersInput> | favourite_tanksCreateWithoutUsersInput[] | favourite_tanksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: favourite_tanksCreateOrConnectWithoutUsersInput | favourite_tanksCreateOrConnectWithoutUsersInput[]
    upsert?: favourite_tanksUpsertWithWhereUniqueWithoutUsersInput | favourite_tanksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: favourite_tanksCreateManyUsersInputEnvelope
    set?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    disconnect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    delete?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    connect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    update?: favourite_tanksUpdateWithWhereUniqueWithoutUsersInput | favourite_tanksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: favourite_tanksUpdateManyWithWhereWithoutUsersInput | favourite_tanksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: favourite_tanksScalarWhereInput | favourite_tanksScalarWhereInput[]
  }

  export type favourite_tanksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<favourite_tanksCreateWithoutUsersInput, favourite_tanksUncheckedCreateWithoutUsersInput> | favourite_tanksCreateWithoutUsersInput[] | favourite_tanksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: favourite_tanksCreateOrConnectWithoutUsersInput | favourite_tanksCreateOrConnectWithoutUsersInput[]
    upsert?: favourite_tanksUpsertWithWhereUniqueWithoutUsersInput | favourite_tanksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: favourite_tanksCreateManyUsersInputEnvelope
    set?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    disconnect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    delete?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    connect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    update?: favourite_tanksUpdateWithWhereUniqueWithoutUsersInput | favourite_tanksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: favourite_tanksUpdateManyWithWhereWithoutUsersInput | favourite_tanksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: favourite_tanksScalarWhereInput | favourite_tanksScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutFavourite_tanksInput = {
    create?: XOR<usersCreateWithoutFavourite_tanksInput, usersUncheckedCreateWithoutFavourite_tanksInput>
    connectOrCreate?: usersCreateOrConnectWithoutFavourite_tanksInput
    connect?: usersWhereUniqueInput
  }

  export type tanksCreateNestedOneWithoutFavourite_tanksInput = {
    create?: XOR<tanksCreateWithoutFavourite_tanksInput, tanksUncheckedCreateWithoutFavourite_tanksInput>
    connectOrCreate?: tanksCreateOrConnectWithoutFavourite_tanksInput
    connect?: tanksWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutFavourite_tanksNestedInput = {
    create?: XOR<usersCreateWithoutFavourite_tanksInput, usersUncheckedCreateWithoutFavourite_tanksInput>
    connectOrCreate?: usersCreateOrConnectWithoutFavourite_tanksInput
    upsert?: usersUpsertWithoutFavourite_tanksInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFavourite_tanksInput, usersUpdateWithoutFavourite_tanksInput>, usersUncheckedUpdateWithoutFavourite_tanksInput>
  }

  export type tanksUpdateOneRequiredWithoutFavourite_tanksNestedInput = {
    create?: XOR<tanksCreateWithoutFavourite_tanksInput, tanksUncheckedCreateWithoutFavourite_tanksInput>
    connectOrCreate?: tanksCreateOrConnectWithoutFavourite_tanksInput
    upsert?: tanksUpsertWithoutFavourite_tanksInput
    connect?: tanksWhereUniqueInput
    update?: XOR<XOR<tanksUpdateToOneWithWhereWithoutFavourite_tanksInput, tanksUpdateWithoutFavourite_tanksInput>, tanksUncheckedUpdateWithoutFavourite_tanksInput>
  }

  export type tank_photosCreateNestedManyWithoutPhotosInput = {
    create?: XOR<tank_photosCreateWithoutPhotosInput, tank_photosUncheckedCreateWithoutPhotosInput> | tank_photosCreateWithoutPhotosInput[] | tank_photosUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: tank_photosCreateOrConnectWithoutPhotosInput | tank_photosCreateOrConnectWithoutPhotosInput[]
    createMany?: tank_photosCreateManyPhotosInputEnvelope
    connect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
  }

  export type tank_photosUncheckedCreateNestedManyWithoutPhotosInput = {
    create?: XOR<tank_photosCreateWithoutPhotosInput, tank_photosUncheckedCreateWithoutPhotosInput> | tank_photosCreateWithoutPhotosInput[] | tank_photosUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: tank_photosCreateOrConnectWithoutPhotosInput | tank_photosCreateOrConnectWithoutPhotosInput[]
    createMany?: tank_photosCreateManyPhotosInputEnvelope
    connect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
  }

  export type tank_photosUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<tank_photosCreateWithoutPhotosInput, tank_photosUncheckedCreateWithoutPhotosInput> | tank_photosCreateWithoutPhotosInput[] | tank_photosUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: tank_photosCreateOrConnectWithoutPhotosInput | tank_photosCreateOrConnectWithoutPhotosInput[]
    upsert?: tank_photosUpsertWithWhereUniqueWithoutPhotosInput | tank_photosUpsertWithWhereUniqueWithoutPhotosInput[]
    createMany?: tank_photosCreateManyPhotosInputEnvelope
    set?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    disconnect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    delete?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    connect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    update?: tank_photosUpdateWithWhereUniqueWithoutPhotosInput | tank_photosUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: tank_photosUpdateManyWithWhereWithoutPhotosInput | tank_photosUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: tank_photosScalarWhereInput | tank_photosScalarWhereInput[]
  }

  export type tank_photosUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<tank_photosCreateWithoutPhotosInput, tank_photosUncheckedCreateWithoutPhotosInput> | tank_photosCreateWithoutPhotosInput[] | tank_photosUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: tank_photosCreateOrConnectWithoutPhotosInput | tank_photosCreateOrConnectWithoutPhotosInput[]
    upsert?: tank_photosUpsertWithWhereUniqueWithoutPhotosInput | tank_photosUpsertWithWhereUniqueWithoutPhotosInput[]
    createMany?: tank_photosCreateManyPhotosInputEnvelope
    set?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    disconnect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    delete?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    connect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    update?: tank_photosUpdateWithWhereUniqueWithoutPhotosInput | tank_photosUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: tank_photosUpdateManyWithWhereWithoutPhotosInput | tank_photosUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: tank_photosScalarWhereInput | tank_photosScalarWhereInput[]
  }

  export type tanksCreateNestedOneWithoutPhotosInput = {
    create?: XOR<tanksCreateWithoutPhotosInput, tanksUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: tanksCreateOrConnectWithoutPhotosInput
    connect?: tanksWhereUniqueInput
  }

  export type photosCreateNestedOneWithoutTanksInput = {
    create?: XOR<photosCreateWithoutTanksInput, photosUncheckedCreateWithoutTanksInput>
    connectOrCreate?: photosCreateOrConnectWithoutTanksInput
    connect?: photosWhereUniqueInput
  }

  export type tanksUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<tanksCreateWithoutPhotosInput, tanksUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: tanksCreateOrConnectWithoutPhotosInput
    upsert?: tanksUpsertWithoutPhotosInput
    connect?: tanksWhereUniqueInput
    update?: XOR<XOR<tanksUpdateToOneWithWhereWithoutPhotosInput, tanksUpdateWithoutPhotosInput>, tanksUncheckedUpdateWithoutPhotosInput>
  }

  export type photosUpdateOneRequiredWithoutTanksNestedInput = {
    create?: XOR<photosCreateWithoutTanksInput, photosUncheckedCreateWithoutTanksInput>
    connectOrCreate?: photosCreateOrConnectWithoutTanksInput
    upsert?: photosUpsertWithoutTanksInput
    connect?: photosWhereUniqueInput
    update?: XOR<XOR<photosUpdateToOneWithWhereWithoutTanksInput, photosUpdateWithoutTanksInput>, photosUncheckedUpdateWithoutTanksInput>
  }

  export type battlelocation_countryCreateNestedManyWithoutCountriesInput = {
    create?: XOR<battlelocation_countryCreateWithoutCountriesInput, battlelocation_countryUncheckedCreateWithoutCountriesInput> | battlelocation_countryCreateWithoutCountriesInput[] | battlelocation_countryUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: battlelocation_countryCreateOrConnectWithoutCountriesInput | battlelocation_countryCreateOrConnectWithoutCountriesInput[]
    createMany?: battlelocation_countryCreateManyCountriesInputEnvelope
    connect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
  }

  export type tanksCreateNestedManyWithoutCountriesInput = {
    create?: XOR<tanksCreateWithoutCountriesInput, tanksUncheckedCreateWithoutCountriesInput> | tanksCreateWithoutCountriesInput[] | tanksUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: tanksCreateOrConnectWithoutCountriesInput | tanksCreateOrConnectWithoutCountriesInput[]
    createMany?: tanksCreateManyCountriesInputEnvelope
    connect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
  }

  export type battlelocation_countryUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<battlelocation_countryCreateWithoutCountriesInput, battlelocation_countryUncheckedCreateWithoutCountriesInput> | battlelocation_countryCreateWithoutCountriesInput[] | battlelocation_countryUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: battlelocation_countryCreateOrConnectWithoutCountriesInput | battlelocation_countryCreateOrConnectWithoutCountriesInput[]
    createMany?: battlelocation_countryCreateManyCountriesInputEnvelope
    connect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
  }

  export type tanksUncheckedCreateNestedManyWithoutCountriesInput = {
    create?: XOR<tanksCreateWithoutCountriesInput, tanksUncheckedCreateWithoutCountriesInput> | tanksCreateWithoutCountriesInput[] | tanksUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: tanksCreateOrConnectWithoutCountriesInput | tanksCreateOrConnectWithoutCountriesInput[]
    createMany?: tanksCreateManyCountriesInputEnvelope
    connect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
  }

  export type battlelocation_countryUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<battlelocation_countryCreateWithoutCountriesInput, battlelocation_countryUncheckedCreateWithoutCountriesInput> | battlelocation_countryCreateWithoutCountriesInput[] | battlelocation_countryUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: battlelocation_countryCreateOrConnectWithoutCountriesInput | battlelocation_countryCreateOrConnectWithoutCountriesInput[]
    upsert?: battlelocation_countryUpsertWithWhereUniqueWithoutCountriesInput | battlelocation_countryUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: battlelocation_countryCreateManyCountriesInputEnvelope
    set?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    disconnect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    delete?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    connect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    update?: battlelocation_countryUpdateWithWhereUniqueWithoutCountriesInput | battlelocation_countryUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: battlelocation_countryUpdateManyWithWhereWithoutCountriesInput | battlelocation_countryUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: battlelocation_countryScalarWhereInput | battlelocation_countryScalarWhereInput[]
  }

  export type tanksUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<tanksCreateWithoutCountriesInput, tanksUncheckedCreateWithoutCountriesInput> | tanksCreateWithoutCountriesInput[] | tanksUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: tanksCreateOrConnectWithoutCountriesInput | tanksCreateOrConnectWithoutCountriesInput[]
    upsert?: tanksUpsertWithWhereUniqueWithoutCountriesInput | tanksUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: tanksCreateManyCountriesInputEnvelope
    set?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    disconnect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    delete?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    connect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    update?: tanksUpdateWithWhereUniqueWithoutCountriesInput | tanksUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: tanksUpdateManyWithWhereWithoutCountriesInput | tanksUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: tanksScalarWhereInput | tanksScalarWhereInput[]
  }

  export type battlelocation_countryUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<battlelocation_countryCreateWithoutCountriesInput, battlelocation_countryUncheckedCreateWithoutCountriesInput> | battlelocation_countryCreateWithoutCountriesInput[] | battlelocation_countryUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: battlelocation_countryCreateOrConnectWithoutCountriesInput | battlelocation_countryCreateOrConnectWithoutCountriesInput[]
    upsert?: battlelocation_countryUpsertWithWhereUniqueWithoutCountriesInput | battlelocation_countryUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: battlelocation_countryCreateManyCountriesInputEnvelope
    set?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    disconnect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    delete?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    connect?: battlelocation_countryWhereUniqueInput | battlelocation_countryWhereUniqueInput[]
    update?: battlelocation_countryUpdateWithWhereUniqueWithoutCountriesInput | battlelocation_countryUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: battlelocation_countryUpdateManyWithWhereWithoutCountriesInput | battlelocation_countryUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: battlelocation_countryScalarWhereInput | battlelocation_countryScalarWhereInput[]
  }

  export type tanksUncheckedUpdateManyWithoutCountriesNestedInput = {
    create?: XOR<tanksCreateWithoutCountriesInput, tanksUncheckedCreateWithoutCountriesInput> | tanksCreateWithoutCountriesInput[] | tanksUncheckedCreateWithoutCountriesInput[]
    connectOrCreate?: tanksCreateOrConnectWithoutCountriesInput | tanksCreateOrConnectWithoutCountriesInput[]
    upsert?: tanksUpsertWithWhereUniqueWithoutCountriesInput | tanksUpsertWithWhereUniqueWithoutCountriesInput[]
    createMany?: tanksCreateManyCountriesInputEnvelope
    set?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    disconnect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    delete?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    connect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    update?: tanksUpdateWithWhereUniqueWithoutCountriesInput | tanksUpdateWithWhereUniqueWithoutCountriesInput[]
    updateMany?: tanksUpdateManyWithWhereWithoutCountriesInput | tanksUpdateManyWithWhereWithoutCountriesInput[]
    deleteMany?: tanksScalarWhereInput | tanksScalarWhereInput[]
  }

  export type tanksCreateNestedManyWithoutVehicle_typesInput = {
    create?: XOR<tanksCreateWithoutVehicle_typesInput, tanksUncheckedCreateWithoutVehicle_typesInput> | tanksCreateWithoutVehicle_typesInput[] | tanksUncheckedCreateWithoutVehicle_typesInput[]
    connectOrCreate?: tanksCreateOrConnectWithoutVehicle_typesInput | tanksCreateOrConnectWithoutVehicle_typesInput[]
    createMany?: tanksCreateManyVehicle_typesInputEnvelope
    connect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
  }

  export type tanksUncheckedCreateNestedManyWithoutVehicle_typesInput = {
    create?: XOR<tanksCreateWithoutVehicle_typesInput, tanksUncheckedCreateWithoutVehicle_typesInput> | tanksCreateWithoutVehicle_typesInput[] | tanksUncheckedCreateWithoutVehicle_typesInput[]
    connectOrCreate?: tanksCreateOrConnectWithoutVehicle_typesInput | tanksCreateOrConnectWithoutVehicle_typesInput[]
    createMany?: tanksCreateManyVehicle_typesInputEnvelope
    connect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
  }

  export type tanksUpdateManyWithoutVehicle_typesNestedInput = {
    create?: XOR<tanksCreateWithoutVehicle_typesInput, tanksUncheckedCreateWithoutVehicle_typesInput> | tanksCreateWithoutVehicle_typesInput[] | tanksUncheckedCreateWithoutVehicle_typesInput[]
    connectOrCreate?: tanksCreateOrConnectWithoutVehicle_typesInput | tanksCreateOrConnectWithoutVehicle_typesInput[]
    upsert?: tanksUpsertWithWhereUniqueWithoutVehicle_typesInput | tanksUpsertWithWhereUniqueWithoutVehicle_typesInput[]
    createMany?: tanksCreateManyVehicle_typesInputEnvelope
    set?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    disconnect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    delete?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    connect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    update?: tanksUpdateWithWhereUniqueWithoutVehicle_typesInput | tanksUpdateWithWhereUniqueWithoutVehicle_typesInput[]
    updateMany?: tanksUpdateManyWithWhereWithoutVehicle_typesInput | tanksUpdateManyWithWhereWithoutVehicle_typesInput[]
    deleteMany?: tanksScalarWhereInput | tanksScalarWhereInput[]
  }

  export type tanksUncheckedUpdateManyWithoutVehicle_typesNestedInput = {
    create?: XOR<tanksCreateWithoutVehicle_typesInput, tanksUncheckedCreateWithoutVehicle_typesInput> | tanksCreateWithoutVehicle_typesInput[] | tanksUncheckedCreateWithoutVehicle_typesInput[]
    connectOrCreate?: tanksCreateOrConnectWithoutVehicle_typesInput | tanksCreateOrConnectWithoutVehicle_typesInput[]
    upsert?: tanksUpsertWithWhereUniqueWithoutVehicle_typesInput | tanksUpsertWithWhereUniqueWithoutVehicle_typesInput[]
    createMany?: tanksCreateManyVehicle_typesInputEnvelope
    set?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    disconnect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    delete?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    connect?: tanksWhereUniqueInput | tanksWhereUniqueInput[]
    update?: tanksUpdateWithWhereUniqueWithoutVehicle_typesInput | tanksUpdateWithWhereUniqueWithoutVehicle_typesInput[]
    updateMany?: tanksUpdateManyWithWhereWithoutVehicle_typesInput | tanksUpdateManyWithWhereWithoutVehicle_typesInput[]
    deleteMany?: tanksScalarWhereInput | tanksScalarWhereInput[]
  }

  export type countriesCreateNestedOneWithoutTanksInput = {
    create?: XOR<countriesCreateWithoutTanksInput, countriesUncheckedCreateWithoutTanksInput>
    connectOrCreate?: countriesCreateOrConnectWithoutTanksInput
    connect?: countriesWhereUniqueInput
  }

  export type vehicle_typesCreateNestedOneWithoutTanksInput = {
    create?: XOR<vehicle_typesCreateWithoutTanksInput, vehicle_typesUncheckedCreateWithoutTanksInput>
    connectOrCreate?: vehicle_typesCreateOrConnectWithoutTanksInput
    connect?: vehicle_typesWhereUniqueInput
  }

  export type battlelocation_tankCreateNestedManyWithoutTanksInput = {
    create?: XOR<battlelocation_tankCreateWithoutTanksInput, battlelocation_tankUncheckedCreateWithoutTanksInput> | battlelocation_tankCreateWithoutTanksInput[] | battlelocation_tankUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: battlelocation_tankCreateOrConnectWithoutTanksInput | battlelocation_tankCreateOrConnectWithoutTanksInput[]
    createMany?: battlelocation_tankCreateManyTanksInputEnvelope
    connect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
  }

  export type favourite_tanksCreateNestedManyWithoutTanksInput = {
    create?: XOR<favourite_tanksCreateWithoutTanksInput, favourite_tanksUncheckedCreateWithoutTanksInput> | favourite_tanksCreateWithoutTanksInput[] | favourite_tanksUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: favourite_tanksCreateOrConnectWithoutTanksInput | favourite_tanksCreateOrConnectWithoutTanksInput[]
    createMany?: favourite_tanksCreateManyTanksInputEnvelope
    connect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
  }

  export type tank_photosCreateNestedManyWithoutTanksInput = {
    create?: XOR<tank_photosCreateWithoutTanksInput, tank_photosUncheckedCreateWithoutTanksInput> | tank_photosCreateWithoutTanksInput[] | tank_photosUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: tank_photosCreateOrConnectWithoutTanksInput | tank_photosCreateOrConnectWithoutTanksInput[]
    createMany?: tank_photosCreateManyTanksInputEnvelope
    connect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
  }

  export type battlelocation_tankUncheckedCreateNestedManyWithoutTanksInput = {
    create?: XOR<battlelocation_tankCreateWithoutTanksInput, battlelocation_tankUncheckedCreateWithoutTanksInput> | battlelocation_tankCreateWithoutTanksInput[] | battlelocation_tankUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: battlelocation_tankCreateOrConnectWithoutTanksInput | battlelocation_tankCreateOrConnectWithoutTanksInput[]
    createMany?: battlelocation_tankCreateManyTanksInputEnvelope
    connect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
  }

  export type favourite_tanksUncheckedCreateNestedManyWithoutTanksInput = {
    create?: XOR<favourite_tanksCreateWithoutTanksInput, favourite_tanksUncheckedCreateWithoutTanksInput> | favourite_tanksCreateWithoutTanksInput[] | favourite_tanksUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: favourite_tanksCreateOrConnectWithoutTanksInput | favourite_tanksCreateOrConnectWithoutTanksInput[]
    createMany?: favourite_tanksCreateManyTanksInputEnvelope
    connect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
  }

  export type tank_photosUncheckedCreateNestedManyWithoutTanksInput = {
    create?: XOR<tank_photosCreateWithoutTanksInput, tank_photosUncheckedCreateWithoutTanksInput> | tank_photosCreateWithoutTanksInput[] | tank_photosUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: tank_photosCreateOrConnectWithoutTanksInput | tank_photosCreateOrConnectWithoutTanksInput[]
    createMany?: tank_photosCreateManyTanksInputEnvelope
    connect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type countriesUpdateOneWithoutTanksNestedInput = {
    create?: XOR<countriesCreateWithoutTanksInput, countriesUncheckedCreateWithoutTanksInput>
    connectOrCreate?: countriesCreateOrConnectWithoutTanksInput
    upsert?: countriesUpsertWithoutTanksInput
    disconnect?: countriesWhereInput | boolean
    delete?: countriesWhereInput | boolean
    connect?: countriesWhereUniqueInput
    update?: XOR<XOR<countriesUpdateToOneWithWhereWithoutTanksInput, countriesUpdateWithoutTanksInput>, countriesUncheckedUpdateWithoutTanksInput>
  }

  export type vehicle_typesUpdateOneWithoutTanksNestedInput = {
    create?: XOR<vehicle_typesCreateWithoutTanksInput, vehicle_typesUncheckedCreateWithoutTanksInput>
    connectOrCreate?: vehicle_typesCreateOrConnectWithoutTanksInput
    upsert?: vehicle_typesUpsertWithoutTanksInput
    disconnect?: vehicle_typesWhereInput | boolean
    delete?: vehicle_typesWhereInput | boolean
    connect?: vehicle_typesWhereUniqueInput
    update?: XOR<XOR<vehicle_typesUpdateToOneWithWhereWithoutTanksInput, vehicle_typesUpdateWithoutTanksInput>, vehicle_typesUncheckedUpdateWithoutTanksInput>
  }

  export type battlelocation_tankUpdateManyWithoutTanksNestedInput = {
    create?: XOR<battlelocation_tankCreateWithoutTanksInput, battlelocation_tankUncheckedCreateWithoutTanksInput> | battlelocation_tankCreateWithoutTanksInput[] | battlelocation_tankUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: battlelocation_tankCreateOrConnectWithoutTanksInput | battlelocation_tankCreateOrConnectWithoutTanksInput[]
    upsert?: battlelocation_tankUpsertWithWhereUniqueWithoutTanksInput | battlelocation_tankUpsertWithWhereUniqueWithoutTanksInput[]
    createMany?: battlelocation_tankCreateManyTanksInputEnvelope
    set?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    disconnect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    delete?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    connect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    update?: battlelocation_tankUpdateWithWhereUniqueWithoutTanksInput | battlelocation_tankUpdateWithWhereUniqueWithoutTanksInput[]
    updateMany?: battlelocation_tankUpdateManyWithWhereWithoutTanksInput | battlelocation_tankUpdateManyWithWhereWithoutTanksInput[]
    deleteMany?: battlelocation_tankScalarWhereInput | battlelocation_tankScalarWhereInput[]
  }

  export type favourite_tanksUpdateManyWithoutTanksNestedInput = {
    create?: XOR<favourite_tanksCreateWithoutTanksInput, favourite_tanksUncheckedCreateWithoutTanksInput> | favourite_tanksCreateWithoutTanksInput[] | favourite_tanksUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: favourite_tanksCreateOrConnectWithoutTanksInput | favourite_tanksCreateOrConnectWithoutTanksInput[]
    upsert?: favourite_tanksUpsertWithWhereUniqueWithoutTanksInput | favourite_tanksUpsertWithWhereUniqueWithoutTanksInput[]
    createMany?: favourite_tanksCreateManyTanksInputEnvelope
    set?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    disconnect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    delete?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    connect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    update?: favourite_tanksUpdateWithWhereUniqueWithoutTanksInput | favourite_tanksUpdateWithWhereUniqueWithoutTanksInput[]
    updateMany?: favourite_tanksUpdateManyWithWhereWithoutTanksInput | favourite_tanksUpdateManyWithWhereWithoutTanksInput[]
    deleteMany?: favourite_tanksScalarWhereInput | favourite_tanksScalarWhereInput[]
  }

  export type tank_photosUpdateManyWithoutTanksNestedInput = {
    create?: XOR<tank_photosCreateWithoutTanksInput, tank_photosUncheckedCreateWithoutTanksInput> | tank_photosCreateWithoutTanksInput[] | tank_photosUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: tank_photosCreateOrConnectWithoutTanksInput | tank_photosCreateOrConnectWithoutTanksInput[]
    upsert?: tank_photosUpsertWithWhereUniqueWithoutTanksInput | tank_photosUpsertWithWhereUniqueWithoutTanksInput[]
    createMany?: tank_photosCreateManyTanksInputEnvelope
    set?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    disconnect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    delete?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    connect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    update?: tank_photosUpdateWithWhereUniqueWithoutTanksInput | tank_photosUpdateWithWhereUniqueWithoutTanksInput[]
    updateMany?: tank_photosUpdateManyWithWhereWithoutTanksInput | tank_photosUpdateManyWithWhereWithoutTanksInput[]
    deleteMany?: tank_photosScalarWhereInput | tank_photosScalarWhereInput[]
  }

  export type battlelocation_tankUncheckedUpdateManyWithoutTanksNestedInput = {
    create?: XOR<battlelocation_tankCreateWithoutTanksInput, battlelocation_tankUncheckedCreateWithoutTanksInput> | battlelocation_tankCreateWithoutTanksInput[] | battlelocation_tankUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: battlelocation_tankCreateOrConnectWithoutTanksInput | battlelocation_tankCreateOrConnectWithoutTanksInput[]
    upsert?: battlelocation_tankUpsertWithWhereUniqueWithoutTanksInput | battlelocation_tankUpsertWithWhereUniqueWithoutTanksInput[]
    createMany?: battlelocation_tankCreateManyTanksInputEnvelope
    set?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    disconnect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    delete?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    connect?: battlelocation_tankWhereUniqueInput | battlelocation_tankWhereUniqueInput[]
    update?: battlelocation_tankUpdateWithWhereUniqueWithoutTanksInput | battlelocation_tankUpdateWithWhereUniqueWithoutTanksInput[]
    updateMany?: battlelocation_tankUpdateManyWithWhereWithoutTanksInput | battlelocation_tankUpdateManyWithWhereWithoutTanksInput[]
    deleteMany?: battlelocation_tankScalarWhereInput | battlelocation_tankScalarWhereInput[]
  }

  export type favourite_tanksUncheckedUpdateManyWithoutTanksNestedInput = {
    create?: XOR<favourite_tanksCreateWithoutTanksInput, favourite_tanksUncheckedCreateWithoutTanksInput> | favourite_tanksCreateWithoutTanksInput[] | favourite_tanksUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: favourite_tanksCreateOrConnectWithoutTanksInput | favourite_tanksCreateOrConnectWithoutTanksInput[]
    upsert?: favourite_tanksUpsertWithWhereUniqueWithoutTanksInput | favourite_tanksUpsertWithWhereUniqueWithoutTanksInput[]
    createMany?: favourite_tanksCreateManyTanksInputEnvelope
    set?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    disconnect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    delete?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    connect?: favourite_tanksWhereUniqueInput | favourite_tanksWhereUniqueInput[]
    update?: favourite_tanksUpdateWithWhereUniqueWithoutTanksInput | favourite_tanksUpdateWithWhereUniqueWithoutTanksInput[]
    updateMany?: favourite_tanksUpdateManyWithWhereWithoutTanksInput | favourite_tanksUpdateManyWithWhereWithoutTanksInput[]
    deleteMany?: favourite_tanksScalarWhereInput | favourite_tanksScalarWhereInput[]
  }

  export type tank_photosUncheckedUpdateManyWithoutTanksNestedInput = {
    create?: XOR<tank_photosCreateWithoutTanksInput, tank_photosUncheckedCreateWithoutTanksInput> | tank_photosCreateWithoutTanksInput[] | tank_photosUncheckedCreateWithoutTanksInput[]
    connectOrCreate?: tank_photosCreateOrConnectWithoutTanksInput | tank_photosCreateOrConnectWithoutTanksInput[]
    upsert?: tank_photosUpsertWithWhereUniqueWithoutTanksInput | tank_photosUpsertWithWhereUniqueWithoutTanksInput[]
    createMany?: tank_photosCreateManyTanksInputEnvelope
    set?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    disconnect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    delete?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    connect?: tank_photosWhereUniqueInput | tank_photosWhereUniqueInput[]
    update?: tank_photosUpdateWithWhereUniqueWithoutTanksInput | tank_photosUpdateWithWhereUniqueWithoutTanksInput[]
    updateMany?: tank_photosUpdateManyWithWhereWithoutTanksInput | tank_photosUpdateManyWithWhereWithoutTanksInput[]
    deleteMany?: tank_photosScalarWhereInput | tank_photosScalarWhereInput[]
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type battlelocation_countryCreateWithoutBattlelocationInput = {
    countries: countriesCreateNestedOneWithoutBattleCountriesInput
  }

  export type battlelocation_countryUncheckedCreateWithoutBattlelocationInput = {
    country_id: number
  }

  export type battlelocation_countryCreateOrConnectWithoutBattlelocationInput = {
    where: battlelocation_countryWhereUniqueInput
    create: XOR<battlelocation_countryCreateWithoutBattlelocationInput, battlelocation_countryUncheckedCreateWithoutBattlelocationInput>
  }

  export type battlelocation_countryCreateManyBattlelocationInputEnvelope = {
    data: battlelocation_countryCreateManyBattlelocationInput | battlelocation_countryCreateManyBattlelocationInput[]
    skipDuplicates?: boolean
  }

  export type battlelocation_tankCreateWithoutBattlelocationInput = {
    tanks: tanksCreateNestedOneWithoutBattleTanksInput
  }

  export type battlelocation_tankUncheckedCreateWithoutBattlelocationInput = {
    tank_id: number
  }

  export type battlelocation_tankCreateOrConnectWithoutBattlelocationInput = {
    where: battlelocation_tankWhereUniqueInput
    create: XOR<battlelocation_tankCreateWithoutBattlelocationInput, battlelocation_tankUncheckedCreateWithoutBattlelocationInput>
  }

  export type battlelocation_tankCreateManyBattlelocationInputEnvelope = {
    data: battlelocation_tankCreateManyBattlelocationInput | battlelocation_tankCreateManyBattlelocationInput[]
    skipDuplicates?: boolean
  }

  export type battlelocation_countryUpsertWithWhereUniqueWithoutBattlelocationInput = {
    where: battlelocation_countryWhereUniqueInput
    update: XOR<battlelocation_countryUpdateWithoutBattlelocationInput, battlelocation_countryUncheckedUpdateWithoutBattlelocationInput>
    create: XOR<battlelocation_countryCreateWithoutBattlelocationInput, battlelocation_countryUncheckedCreateWithoutBattlelocationInput>
  }

  export type battlelocation_countryUpdateWithWhereUniqueWithoutBattlelocationInput = {
    where: battlelocation_countryWhereUniqueInput
    data: XOR<battlelocation_countryUpdateWithoutBattlelocationInput, battlelocation_countryUncheckedUpdateWithoutBattlelocationInput>
  }

  export type battlelocation_countryUpdateManyWithWhereWithoutBattlelocationInput = {
    where: battlelocation_countryScalarWhereInput
    data: XOR<battlelocation_countryUpdateManyMutationInput, battlelocation_countryUncheckedUpdateManyWithoutBattlelocationInput>
  }

  export type battlelocation_countryScalarWhereInput = {
    AND?: battlelocation_countryScalarWhereInput | battlelocation_countryScalarWhereInput[]
    OR?: battlelocation_countryScalarWhereInput[]
    NOT?: battlelocation_countryScalarWhereInput | battlelocation_countryScalarWhereInput[]
    battlelocation_id?: IntFilter<"battlelocation_country"> | number
    country_id?: IntFilter<"battlelocation_country"> | number
  }

  export type battlelocation_tankUpsertWithWhereUniqueWithoutBattlelocationInput = {
    where: battlelocation_tankWhereUniqueInput
    update: XOR<battlelocation_tankUpdateWithoutBattlelocationInput, battlelocation_tankUncheckedUpdateWithoutBattlelocationInput>
    create: XOR<battlelocation_tankCreateWithoutBattlelocationInput, battlelocation_tankUncheckedCreateWithoutBattlelocationInput>
  }

  export type battlelocation_tankUpdateWithWhereUniqueWithoutBattlelocationInput = {
    where: battlelocation_tankWhereUniqueInput
    data: XOR<battlelocation_tankUpdateWithoutBattlelocationInput, battlelocation_tankUncheckedUpdateWithoutBattlelocationInput>
  }

  export type battlelocation_tankUpdateManyWithWhereWithoutBattlelocationInput = {
    where: battlelocation_tankScalarWhereInput
    data: XOR<battlelocation_tankUpdateManyMutationInput, battlelocation_tankUncheckedUpdateManyWithoutBattlelocationInput>
  }

  export type battlelocation_tankScalarWhereInput = {
    AND?: battlelocation_tankScalarWhereInput | battlelocation_tankScalarWhereInput[]
    OR?: battlelocation_tankScalarWhereInput[]
    NOT?: battlelocation_tankScalarWhereInput | battlelocation_tankScalarWhereInput[]
    battlelocation_id?: IntFilter<"battlelocation_tank"> | number
    tank_id?: IntFilter<"battlelocation_tank"> | number
  }

  export type battlelocationCreateWithoutBattleCountriesInput = {
    name: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    battleTanks?: battlelocation_tankCreateNestedManyWithoutBattlelocationInput
  }

  export type battlelocationUncheckedCreateWithoutBattleCountriesInput = {
    id?: number
    name: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    battleTanks?: battlelocation_tankUncheckedCreateNestedManyWithoutBattlelocationInput
  }

  export type battlelocationCreateOrConnectWithoutBattleCountriesInput = {
    where: battlelocationWhereUniqueInput
    create: XOR<battlelocationCreateWithoutBattleCountriesInput, battlelocationUncheckedCreateWithoutBattleCountriesInput>
  }

  export type countriesCreateWithoutBattleCountriesInput = {
    name: string
    tanks?: tanksCreateNestedManyWithoutCountriesInput
  }

  export type countriesUncheckedCreateWithoutBattleCountriesInput = {
    country_id?: number
    name: string
    tanks?: tanksUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type countriesCreateOrConnectWithoutBattleCountriesInput = {
    where: countriesWhereUniqueInput
    create: XOR<countriesCreateWithoutBattleCountriesInput, countriesUncheckedCreateWithoutBattleCountriesInput>
  }

  export type battlelocationUpsertWithoutBattleCountriesInput = {
    update: XOR<battlelocationUpdateWithoutBattleCountriesInput, battlelocationUncheckedUpdateWithoutBattleCountriesInput>
    create: XOR<battlelocationCreateWithoutBattleCountriesInput, battlelocationUncheckedCreateWithoutBattleCountriesInput>
    where?: battlelocationWhereInput
  }

  export type battlelocationUpdateToOneWithWhereWithoutBattleCountriesInput = {
    where?: battlelocationWhereInput
    data: XOR<battlelocationUpdateWithoutBattleCountriesInput, battlelocationUncheckedUpdateWithoutBattleCountriesInput>
  }

  export type battlelocationUpdateWithoutBattleCountriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    battleTanks?: battlelocation_tankUpdateManyWithoutBattlelocationNestedInput
  }

  export type battlelocationUncheckedUpdateWithoutBattleCountriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    battleTanks?: battlelocation_tankUncheckedUpdateManyWithoutBattlelocationNestedInput
  }

  export type countriesUpsertWithoutBattleCountriesInput = {
    update: XOR<countriesUpdateWithoutBattleCountriesInput, countriesUncheckedUpdateWithoutBattleCountriesInput>
    create: XOR<countriesCreateWithoutBattleCountriesInput, countriesUncheckedCreateWithoutBattleCountriesInput>
    where?: countriesWhereInput
  }

  export type countriesUpdateToOneWithWhereWithoutBattleCountriesInput = {
    where?: countriesWhereInput
    data: XOR<countriesUpdateWithoutBattleCountriesInput, countriesUncheckedUpdateWithoutBattleCountriesInput>
  }

  export type countriesUpdateWithoutBattleCountriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tanks?: tanksUpdateManyWithoutCountriesNestedInput
  }

  export type countriesUncheckedUpdateWithoutBattleCountriesInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tanks?: tanksUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type battlelocationCreateWithoutBattleTanksInput = {
    name: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    battleCountries?: battlelocation_countryCreateNestedManyWithoutBattlelocationInput
  }

  export type battlelocationUncheckedCreateWithoutBattleTanksInput = {
    id?: number
    name: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    battleCountries?: battlelocation_countryUncheckedCreateNestedManyWithoutBattlelocationInput
  }

  export type battlelocationCreateOrConnectWithoutBattleTanksInput = {
    where: battlelocationWhereUniqueInput
    create: XOR<battlelocationCreateWithoutBattleTanksInput, battlelocationUncheckedCreateWithoutBattleTanksInput>
  }

  export type tanksCreateWithoutBattleTanksInput = {
    name: string
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    countries?: countriesCreateNestedOneWithoutTanksInput
    vehicle_types?: vehicle_typesCreateNestedOneWithoutTanksInput
    favourite_tanks?: favourite_tanksCreateNestedManyWithoutTanksInput
    photos?: tank_photosCreateNestedManyWithoutTanksInput
  }

  export type tanksUncheckedCreateWithoutBattleTanksInput = {
    tank_id?: number
    name: string
    country_id?: number | null
    type_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    favourite_tanks?: favourite_tanksUncheckedCreateNestedManyWithoutTanksInput
    photos?: tank_photosUncheckedCreateNestedManyWithoutTanksInput
  }

  export type tanksCreateOrConnectWithoutBattleTanksInput = {
    where: tanksWhereUniqueInput
    create: XOR<tanksCreateWithoutBattleTanksInput, tanksUncheckedCreateWithoutBattleTanksInput>
  }

  export type battlelocationUpsertWithoutBattleTanksInput = {
    update: XOR<battlelocationUpdateWithoutBattleTanksInput, battlelocationUncheckedUpdateWithoutBattleTanksInput>
    create: XOR<battlelocationCreateWithoutBattleTanksInput, battlelocationUncheckedCreateWithoutBattleTanksInput>
    where?: battlelocationWhereInput
  }

  export type battlelocationUpdateToOneWithWhereWithoutBattleTanksInput = {
    where?: battlelocationWhereInput
    data: XOR<battlelocationUpdateWithoutBattleTanksInput, battlelocationUncheckedUpdateWithoutBattleTanksInput>
  }

  export type battlelocationUpdateWithoutBattleTanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    battleCountries?: battlelocation_countryUpdateManyWithoutBattlelocationNestedInput
  }

  export type battlelocationUncheckedUpdateWithoutBattleTanksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    battleCountries?: battlelocation_countryUncheckedUpdateManyWithoutBattlelocationNestedInput
  }

  export type tanksUpsertWithoutBattleTanksInput = {
    update: XOR<tanksUpdateWithoutBattleTanksInput, tanksUncheckedUpdateWithoutBattleTanksInput>
    create: XOR<tanksCreateWithoutBattleTanksInput, tanksUncheckedCreateWithoutBattleTanksInput>
    where?: tanksWhereInput
  }

  export type tanksUpdateToOneWithWhereWithoutBattleTanksInput = {
    where?: tanksWhereInput
    data: XOR<tanksUpdateWithoutBattleTanksInput, tanksUncheckedUpdateWithoutBattleTanksInput>
  }

  export type tanksUpdateWithoutBattleTanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    countries?: countriesUpdateOneWithoutTanksNestedInput
    vehicle_types?: vehicle_typesUpdateOneWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUpdateManyWithoutTanksNestedInput
  }

  export type tanksUncheckedUpdateWithoutBattleTanksInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    favourite_tanks?: favourite_tanksUncheckedUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUncheckedUpdateManyWithoutTanksNestedInput
  }

  export type favourite_tanksCreateWithoutUsersInput = {
    tanks: tanksCreateNestedOneWithoutFavourite_tanksInput
  }

  export type favourite_tanksUncheckedCreateWithoutUsersInput = {
    fav_id?: number
    tank_id: number
  }

  export type favourite_tanksCreateOrConnectWithoutUsersInput = {
    where: favourite_tanksWhereUniqueInput
    create: XOR<favourite_tanksCreateWithoutUsersInput, favourite_tanksUncheckedCreateWithoutUsersInput>
  }

  export type favourite_tanksCreateManyUsersInputEnvelope = {
    data: favourite_tanksCreateManyUsersInput | favourite_tanksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type favourite_tanksUpsertWithWhereUniqueWithoutUsersInput = {
    where: favourite_tanksWhereUniqueInput
    update: XOR<favourite_tanksUpdateWithoutUsersInput, favourite_tanksUncheckedUpdateWithoutUsersInput>
    create: XOR<favourite_tanksCreateWithoutUsersInput, favourite_tanksUncheckedCreateWithoutUsersInput>
  }

  export type favourite_tanksUpdateWithWhereUniqueWithoutUsersInput = {
    where: favourite_tanksWhereUniqueInput
    data: XOR<favourite_tanksUpdateWithoutUsersInput, favourite_tanksUncheckedUpdateWithoutUsersInput>
  }

  export type favourite_tanksUpdateManyWithWhereWithoutUsersInput = {
    where: favourite_tanksScalarWhereInput
    data: XOR<favourite_tanksUpdateManyMutationInput, favourite_tanksUncheckedUpdateManyWithoutUsersInput>
  }

  export type favourite_tanksScalarWhereInput = {
    AND?: favourite_tanksScalarWhereInput | favourite_tanksScalarWhereInput[]
    OR?: favourite_tanksScalarWhereInput[]
    NOT?: favourite_tanksScalarWhereInput | favourite_tanksScalarWhereInput[]
    fav_id?: IntFilter<"favourite_tanks"> | number
    user_id?: IntFilter<"favourite_tanks"> | number
    tank_id?: IntFilter<"favourite_tanks"> | number
  }

  export type usersCreateWithoutFavourite_tanksInput = {
    nickname: string
    password: string
    email: string
    role?: string
    avatar_url?: string | null
  }

  export type usersUncheckedCreateWithoutFavourite_tanksInput = {
    user_id?: number
    nickname: string
    password: string
    email: string
    role?: string
    avatar_url?: string | null
  }

  export type usersCreateOrConnectWithoutFavourite_tanksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFavourite_tanksInput, usersUncheckedCreateWithoutFavourite_tanksInput>
  }

  export type tanksCreateWithoutFavourite_tanksInput = {
    name: string
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    countries?: countriesCreateNestedOneWithoutTanksInput
    vehicle_types?: vehicle_typesCreateNestedOneWithoutTanksInput
    battleTanks?: battlelocation_tankCreateNestedManyWithoutTanksInput
    photos?: tank_photosCreateNestedManyWithoutTanksInput
  }

  export type tanksUncheckedCreateWithoutFavourite_tanksInput = {
    tank_id?: number
    name: string
    country_id?: number | null
    type_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    battleTanks?: battlelocation_tankUncheckedCreateNestedManyWithoutTanksInput
    photos?: tank_photosUncheckedCreateNestedManyWithoutTanksInput
  }

  export type tanksCreateOrConnectWithoutFavourite_tanksInput = {
    where: tanksWhereUniqueInput
    create: XOR<tanksCreateWithoutFavourite_tanksInput, tanksUncheckedCreateWithoutFavourite_tanksInput>
  }

  export type usersUpsertWithoutFavourite_tanksInput = {
    update: XOR<usersUpdateWithoutFavourite_tanksInput, usersUncheckedUpdateWithoutFavourite_tanksInput>
    create: XOR<usersCreateWithoutFavourite_tanksInput, usersUncheckedCreateWithoutFavourite_tanksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFavourite_tanksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFavourite_tanksInput, usersUncheckedUpdateWithoutFavourite_tanksInput>
  }

  export type usersUpdateWithoutFavourite_tanksInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutFavourite_tanksInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tanksUpsertWithoutFavourite_tanksInput = {
    update: XOR<tanksUpdateWithoutFavourite_tanksInput, tanksUncheckedUpdateWithoutFavourite_tanksInput>
    create: XOR<tanksCreateWithoutFavourite_tanksInput, tanksUncheckedCreateWithoutFavourite_tanksInput>
    where?: tanksWhereInput
  }

  export type tanksUpdateToOneWithWhereWithoutFavourite_tanksInput = {
    where?: tanksWhereInput
    data: XOR<tanksUpdateWithoutFavourite_tanksInput, tanksUncheckedUpdateWithoutFavourite_tanksInput>
  }

  export type tanksUpdateWithoutFavourite_tanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    countries?: countriesUpdateOneWithoutTanksNestedInput
    vehicle_types?: vehicle_typesUpdateOneWithoutTanksNestedInput
    battleTanks?: battlelocation_tankUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUpdateManyWithoutTanksNestedInput
  }

  export type tanksUncheckedUpdateWithoutFavourite_tanksInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    battleTanks?: battlelocation_tankUncheckedUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUncheckedUpdateManyWithoutTanksNestedInput
  }

  export type tank_photosCreateWithoutPhotosInput = {
    tanks: tanksCreateNestedOneWithoutPhotosInput
  }

  export type tank_photosUncheckedCreateWithoutPhotosInput = {
    id?: number
    tank_id: number
  }

  export type tank_photosCreateOrConnectWithoutPhotosInput = {
    where: tank_photosWhereUniqueInput
    create: XOR<tank_photosCreateWithoutPhotosInput, tank_photosUncheckedCreateWithoutPhotosInput>
  }

  export type tank_photosCreateManyPhotosInputEnvelope = {
    data: tank_photosCreateManyPhotosInput | tank_photosCreateManyPhotosInput[]
    skipDuplicates?: boolean
  }

  export type tank_photosUpsertWithWhereUniqueWithoutPhotosInput = {
    where: tank_photosWhereUniqueInput
    update: XOR<tank_photosUpdateWithoutPhotosInput, tank_photosUncheckedUpdateWithoutPhotosInput>
    create: XOR<tank_photosCreateWithoutPhotosInput, tank_photosUncheckedCreateWithoutPhotosInput>
  }

  export type tank_photosUpdateWithWhereUniqueWithoutPhotosInput = {
    where: tank_photosWhereUniqueInput
    data: XOR<tank_photosUpdateWithoutPhotosInput, tank_photosUncheckedUpdateWithoutPhotosInput>
  }

  export type tank_photosUpdateManyWithWhereWithoutPhotosInput = {
    where: tank_photosScalarWhereInput
    data: XOR<tank_photosUpdateManyMutationInput, tank_photosUncheckedUpdateManyWithoutPhotosInput>
  }

  export type tank_photosScalarWhereInput = {
    AND?: tank_photosScalarWhereInput | tank_photosScalarWhereInput[]
    OR?: tank_photosScalarWhereInput[]
    NOT?: tank_photosScalarWhereInput | tank_photosScalarWhereInput[]
    id?: IntFilter<"tank_photos"> | number
    tank_id?: IntFilter<"tank_photos"> | number
    photo_id?: IntFilter<"tank_photos"> | number
  }

  export type tanksCreateWithoutPhotosInput = {
    name: string
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    countries?: countriesCreateNestedOneWithoutTanksInput
    vehicle_types?: vehicle_typesCreateNestedOneWithoutTanksInput
    battleTanks?: battlelocation_tankCreateNestedManyWithoutTanksInput
    favourite_tanks?: favourite_tanksCreateNestedManyWithoutTanksInput
  }

  export type tanksUncheckedCreateWithoutPhotosInput = {
    tank_id?: number
    name: string
    country_id?: number | null
    type_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    battleTanks?: battlelocation_tankUncheckedCreateNestedManyWithoutTanksInput
    favourite_tanks?: favourite_tanksUncheckedCreateNestedManyWithoutTanksInput
  }

  export type tanksCreateOrConnectWithoutPhotosInput = {
    where: tanksWhereUniqueInput
    create: XOR<tanksCreateWithoutPhotosInput, tanksUncheckedCreateWithoutPhotosInput>
  }

  export type photosCreateWithoutTanksInput = {
    filename: string
    filepath: string
  }

  export type photosUncheckedCreateWithoutTanksInput = {
    photo_id?: number
    filename: string
    filepath: string
  }

  export type photosCreateOrConnectWithoutTanksInput = {
    where: photosWhereUniqueInput
    create: XOR<photosCreateWithoutTanksInput, photosUncheckedCreateWithoutTanksInput>
  }

  export type tanksUpsertWithoutPhotosInput = {
    update: XOR<tanksUpdateWithoutPhotosInput, tanksUncheckedUpdateWithoutPhotosInput>
    create: XOR<tanksCreateWithoutPhotosInput, tanksUncheckedCreateWithoutPhotosInput>
    where?: tanksWhereInput
  }

  export type tanksUpdateToOneWithWhereWithoutPhotosInput = {
    where?: tanksWhereInput
    data: XOR<tanksUpdateWithoutPhotosInput, tanksUncheckedUpdateWithoutPhotosInput>
  }

  export type tanksUpdateWithoutPhotosInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    countries?: countriesUpdateOneWithoutTanksNestedInput
    vehicle_types?: vehicle_typesUpdateOneWithoutTanksNestedInput
    battleTanks?: battlelocation_tankUpdateManyWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUpdateManyWithoutTanksNestedInput
  }

  export type tanksUncheckedUpdateWithoutPhotosInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    battleTanks?: battlelocation_tankUncheckedUpdateManyWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUncheckedUpdateManyWithoutTanksNestedInput
  }

  export type photosUpsertWithoutTanksInput = {
    update: XOR<photosUpdateWithoutTanksInput, photosUncheckedUpdateWithoutTanksInput>
    create: XOR<photosCreateWithoutTanksInput, photosUncheckedCreateWithoutTanksInput>
    where?: photosWhereInput
  }

  export type photosUpdateToOneWithWhereWithoutTanksInput = {
    where?: photosWhereInput
    data: XOR<photosUpdateWithoutTanksInput, photosUncheckedUpdateWithoutTanksInput>
  }

  export type photosUpdateWithoutTanksInput = {
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
  }

  export type photosUncheckedUpdateWithoutTanksInput = {
    photo_id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
  }

  export type battlelocation_countryCreateWithoutCountriesInput = {
    battlelocation: battlelocationCreateNestedOneWithoutBattleCountriesInput
  }

  export type battlelocation_countryUncheckedCreateWithoutCountriesInput = {
    battlelocation_id: number
  }

  export type battlelocation_countryCreateOrConnectWithoutCountriesInput = {
    where: battlelocation_countryWhereUniqueInput
    create: XOR<battlelocation_countryCreateWithoutCountriesInput, battlelocation_countryUncheckedCreateWithoutCountriesInput>
  }

  export type battlelocation_countryCreateManyCountriesInputEnvelope = {
    data: battlelocation_countryCreateManyCountriesInput | battlelocation_countryCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type tanksCreateWithoutCountriesInput = {
    name: string
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    vehicle_types?: vehicle_typesCreateNestedOneWithoutTanksInput
    battleTanks?: battlelocation_tankCreateNestedManyWithoutTanksInput
    favourite_tanks?: favourite_tanksCreateNestedManyWithoutTanksInput
    photos?: tank_photosCreateNestedManyWithoutTanksInput
  }

  export type tanksUncheckedCreateWithoutCountriesInput = {
    tank_id?: number
    name: string
    type_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    battleTanks?: battlelocation_tankUncheckedCreateNestedManyWithoutTanksInput
    favourite_tanks?: favourite_tanksUncheckedCreateNestedManyWithoutTanksInput
    photos?: tank_photosUncheckedCreateNestedManyWithoutTanksInput
  }

  export type tanksCreateOrConnectWithoutCountriesInput = {
    where: tanksWhereUniqueInput
    create: XOR<tanksCreateWithoutCountriesInput, tanksUncheckedCreateWithoutCountriesInput>
  }

  export type tanksCreateManyCountriesInputEnvelope = {
    data: tanksCreateManyCountriesInput | tanksCreateManyCountriesInput[]
    skipDuplicates?: boolean
  }

  export type battlelocation_countryUpsertWithWhereUniqueWithoutCountriesInput = {
    where: battlelocation_countryWhereUniqueInput
    update: XOR<battlelocation_countryUpdateWithoutCountriesInput, battlelocation_countryUncheckedUpdateWithoutCountriesInput>
    create: XOR<battlelocation_countryCreateWithoutCountriesInput, battlelocation_countryUncheckedCreateWithoutCountriesInput>
  }

  export type battlelocation_countryUpdateWithWhereUniqueWithoutCountriesInput = {
    where: battlelocation_countryWhereUniqueInput
    data: XOR<battlelocation_countryUpdateWithoutCountriesInput, battlelocation_countryUncheckedUpdateWithoutCountriesInput>
  }

  export type battlelocation_countryUpdateManyWithWhereWithoutCountriesInput = {
    where: battlelocation_countryScalarWhereInput
    data: XOR<battlelocation_countryUpdateManyMutationInput, battlelocation_countryUncheckedUpdateManyWithoutCountriesInput>
  }

  export type tanksUpsertWithWhereUniqueWithoutCountriesInput = {
    where: tanksWhereUniqueInput
    update: XOR<tanksUpdateWithoutCountriesInput, tanksUncheckedUpdateWithoutCountriesInput>
    create: XOR<tanksCreateWithoutCountriesInput, tanksUncheckedCreateWithoutCountriesInput>
  }

  export type tanksUpdateWithWhereUniqueWithoutCountriesInput = {
    where: tanksWhereUniqueInput
    data: XOR<tanksUpdateWithoutCountriesInput, tanksUncheckedUpdateWithoutCountriesInput>
  }

  export type tanksUpdateManyWithWhereWithoutCountriesInput = {
    where: tanksScalarWhereInput
    data: XOR<tanksUpdateManyMutationInput, tanksUncheckedUpdateManyWithoutCountriesInput>
  }

  export type tanksScalarWhereInput = {
    AND?: tanksScalarWhereInput | tanksScalarWhereInput[]
    OR?: tanksScalarWhereInput[]
    NOT?: tanksScalarWhereInput | tanksScalarWhereInput[]
    tank_id?: IntFilter<"tanks"> | number
    name?: StringFilter<"tanks"> | string
    country_id?: IntNullableFilter<"tanks"> | number | null
    type_id?: IntNullableFilter<"tanks"> | number | null
    weight_kg?: IntNullableFilter<"tanks"> | number | null
    crew?: IntNullableFilter<"tanks"> | number | null
    engine_power_hp?: IntNullableFilter<"tanks"> | number | null
    top_speed_kmh?: DecimalNullableFilter<"tanks"> | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: IntNullableFilter<"tanks"> | number | null
    armor_side_mm?: IntNullableFilter<"tanks"> | number | null
    armor_rear_mm?: IntNullableFilter<"tanks"> | number | null
    gun_caliber_mm?: DecimalNullableFilter<"tanks"> | Decimal | DecimalJsLike | number | string | null
    year_introduced?: IntNullableFilter<"tanks"> | number | null
    notes?: StringNullableFilter<"tanks"> | string | null
  }

  export type tanksCreateWithoutVehicle_typesInput = {
    name: string
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    countries?: countriesCreateNestedOneWithoutTanksInput
    battleTanks?: battlelocation_tankCreateNestedManyWithoutTanksInput
    favourite_tanks?: favourite_tanksCreateNestedManyWithoutTanksInput
    photos?: tank_photosCreateNestedManyWithoutTanksInput
  }

  export type tanksUncheckedCreateWithoutVehicle_typesInput = {
    tank_id?: number
    name: string
    country_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
    battleTanks?: battlelocation_tankUncheckedCreateNestedManyWithoutTanksInput
    favourite_tanks?: favourite_tanksUncheckedCreateNestedManyWithoutTanksInput
    photos?: tank_photosUncheckedCreateNestedManyWithoutTanksInput
  }

  export type tanksCreateOrConnectWithoutVehicle_typesInput = {
    where: tanksWhereUniqueInput
    create: XOR<tanksCreateWithoutVehicle_typesInput, tanksUncheckedCreateWithoutVehicle_typesInput>
  }

  export type tanksCreateManyVehicle_typesInputEnvelope = {
    data: tanksCreateManyVehicle_typesInput | tanksCreateManyVehicle_typesInput[]
    skipDuplicates?: boolean
  }

  export type tanksUpsertWithWhereUniqueWithoutVehicle_typesInput = {
    where: tanksWhereUniqueInput
    update: XOR<tanksUpdateWithoutVehicle_typesInput, tanksUncheckedUpdateWithoutVehicle_typesInput>
    create: XOR<tanksCreateWithoutVehicle_typesInput, tanksUncheckedCreateWithoutVehicle_typesInput>
  }

  export type tanksUpdateWithWhereUniqueWithoutVehicle_typesInput = {
    where: tanksWhereUniqueInput
    data: XOR<tanksUpdateWithoutVehicle_typesInput, tanksUncheckedUpdateWithoutVehicle_typesInput>
  }

  export type tanksUpdateManyWithWhereWithoutVehicle_typesInput = {
    where: tanksScalarWhereInput
    data: XOR<tanksUpdateManyMutationInput, tanksUncheckedUpdateManyWithoutVehicle_typesInput>
  }

  export type countriesCreateWithoutTanksInput = {
    name: string
    battleCountries?: battlelocation_countryCreateNestedManyWithoutCountriesInput
  }

  export type countriesUncheckedCreateWithoutTanksInput = {
    country_id?: number
    name: string
    battleCountries?: battlelocation_countryUncheckedCreateNestedManyWithoutCountriesInput
  }

  export type countriesCreateOrConnectWithoutTanksInput = {
    where: countriesWhereUniqueInput
    create: XOR<countriesCreateWithoutTanksInput, countriesUncheckedCreateWithoutTanksInput>
  }

  export type vehicle_typesCreateWithoutTanksInput = {
    name: string
  }

  export type vehicle_typesUncheckedCreateWithoutTanksInput = {
    type_id?: number
    name: string
  }

  export type vehicle_typesCreateOrConnectWithoutTanksInput = {
    where: vehicle_typesWhereUniqueInput
    create: XOR<vehicle_typesCreateWithoutTanksInput, vehicle_typesUncheckedCreateWithoutTanksInput>
  }

  export type battlelocation_tankCreateWithoutTanksInput = {
    battlelocation: battlelocationCreateNestedOneWithoutBattleTanksInput
  }

  export type battlelocation_tankUncheckedCreateWithoutTanksInput = {
    battlelocation_id: number
  }

  export type battlelocation_tankCreateOrConnectWithoutTanksInput = {
    where: battlelocation_tankWhereUniqueInput
    create: XOR<battlelocation_tankCreateWithoutTanksInput, battlelocation_tankUncheckedCreateWithoutTanksInput>
  }

  export type battlelocation_tankCreateManyTanksInputEnvelope = {
    data: battlelocation_tankCreateManyTanksInput | battlelocation_tankCreateManyTanksInput[]
    skipDuplicates?: boolean
  }

  export type favourite_tanksCreateWithoutTanksInput = {
    users: usersCreateNestedOneWithoutFavourite_tanksInput
  }

  export type favourite_tanksUncheckedCreateWithoutTanksInput = {
    fav_id?: number
    user_id: number
  }

  export type favourite_tanksCreateOrConnectWithoutTanksInput = {
    where: favourite_tanksWhereUniqueInput
    create: XOR<favourite_tanksCreateWithoutTanksInput, favourite_tanksUncheckedCreateWithoutTanksInput>
  }

  export type favourite_tanksCreateManyTanksInputEnvelope = {
    data: favourite_tanksCreateManyTanksInput | favourite_tanksCreateManyTanksInput[]
    skipDuplicates?: boolean
  }

  export type tank_photosCreateWithoutTanksInput = {
    photos: photosCreateNestedOneWithoutTanksInput
  }

  export type tank_photosUncheckedCreateWithoutTanksInput = {
    id?: number
    photo_id: number
  }

  export type tank_photosCreateOrConnectWithoutTanksInput = {
    where: tank_photosWhereUniqueInput
    create: XOR<tank_photosCreateWithoutTanksInput, tank_photosUncheckedCreateWithoutTanksInput>
  }

  export type tank_photosCreateManyTanksInputEnvelope = {
    data: tank_photosCreateManyTanksInput | tank_photosCreateManyTanksInput[]
    skipDuplicates?: boolean
  }

  export type countriesUpsertWithoutTanksInput = {
    update: XOR<countriesUpdateWithoutTanksInput, countriesUncheckedUpdateWithoutTanksInput>
    create: XOR<countriesCreateWithoutTanksInput, countriesUncheckedCreateWithoutTanksInput>
    where?: countriesWhereInput
  }

  export type countriesUpdateToOneWithWhereWithoutTanksInput = {
    where?: countriesWhereInput
    data: XOR<countriesUpdateWithoutTanksInput, countriesUncheckedUpdateWithoutTanksInput>
  }

  export type countriesUpdateWithoutTanksInput = {
    name?: StringFieldUpdateOperationsInput | string
    battleCountries?: battlelocation_countryUpdateManyWithoutCountriesNestedInput
  }

  export type countriesUncheckedUpdateWithoutTanksInput = {
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    battleCountries?: battlelocation_countryUncheckedUpdateManyWithoutCountriesNestedInput
  }

  export type vehicle_typesUpsertWithoutTanksInput = {
    update: XOR<vehicle_typesUpdateWithoutTanksInput, vehicle_typesUncheckedUpdateWithoutTanksInput>
    create: XOR<vehicle_typesCreateWithoutTanksInput, vehicle_typesUncheckedCreateWithoutTanksInput>
    where?: vehicle_typesWhereInput
  }

  export type vehicle_typesUpdateToOneWithWhereWithoutTanksInput = {
    where?: vehicle_typesWhereInput
    data: XOR<vehicle_typesUpdateWithoutTanksInput, vehicle_typesUncheckedUpdateWithoutTanksInput>
  }

  export type vehicle_typesUpdateWithoutTanksInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type vehicle_typesUncheckedUpdateWithoutTanksInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type battlelocation_tankUpsertWithWhereUniqueWithoutTanksInput = {
    where: battlelocation_tankWhereUniqueInput
    update: XOR<battlelocation_tankUpdateWithoutTanksInput, battlelocation_tankUncheckedUpdateWithoutTanksInput>
    create: XOR<battlelocation_tankCreateWithoutTanksInput, battlelocation_tankUncheckedCreateWithoutTanksInput>
  }

  export type battlelocation_tankUpdateWithWhereUniqueWithoutTanksInput = {
    where: battlelocation_tankWhereUniqueInput
    data: XOR<battlelocation_tankUpdateWithoutTanksInput, battlelocation_tankUncheckedUpdateWithoutTanksInput>
  }

  export type battlelocation_tankUpdateManyWithWhereWithoutTanksInput = {
    where: battlelocation_tankScalarWhereInput
    data: XOR<battlelocation_tankUpdateManyMutationInput, battlelocation_tankUncheckedUpdateManyWithoutTanksInput>
  }

  export type favourite_tanksUpsertWithWhereUniqueWithoutTanksInput = {
    where: favourite_tanksWhereUniqueInput
    update: XOR<favourite_tanksUpdateWithoutTanksInput, favourite_tanksUncheckedUpdateWithoutTanksInput>
    create: XOR<favourite_tanksCreateWithoutTanksInput, favourite_tanksUncheckedCreateWithoutTanksInput>
  }

  export type favourite_tanksUpdateWithWhereUniqueWithoutTanksInput = {
    where: favourite_tanksWhereUniqueInput
    data: XOR<favourite_tanksUpdateWithoutTanksInput, favourite_tanksUncheckedUpdateWithoutTanksInput>
  }

  export type favourite_tanksUpdateManyWithWhereWithoutTanksInput = {
    where: favourite_tanksScalarWhereInput
    data: XOR<favourite_tanksUpdateManyMutationInput, favourite_tanksUncheckedUpdateManyWithoutTanksInput>
  }

  export type tank_photosUpsertWithWhereUniqueWithoutTanksInput = {
    where: tank_photosWhereUniqueInput
    update: XOR<tank_photosUpdateWithoutTanksInput, tank_photosUncheckedUpdateWithoutTanksInput>
    create: XOR<tank_photosCreateWithoutTanksInput, tank_photosUncheckedCreateWithoutTanksInput>
  }

  export type tank_photosUpdateWithWhereUniqueWithoutTanksInput = {
    where: tank_photosWhereUniqueInput
    data: XOR<tank_photosUpdateWithoutTanksInput, tank_photosUncheckedUpdateWithoutTanksInput>
  }

  export type tank_photosUpdateManyWithWhereWithoutTanksInput = {
    where: tank_photosScalarWhereInput
    data: XOR<tank_photosUpdateManyMutationInput, tank_photosUncheckedUpdateManyWithoutTanksInput>
  }

  export type battlelocation_countryCreateManyBattlelocationInput = {
    country_id: number
  }

  export type battlelocation_tankCreateManyBattlelocationInput = {
    tank_id: number
  }

  export type battlelocation_countryUpdateWithoutBattlelocationInput = {
    countries?: countriesUpdateOneRequiredWithoutBattleCountriesNestedInput
  }

  export type battlelocation_countryUncheckedUpdateWithoutBattlelocationInput = {
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_countryUncheckedUpdateManyWithoutBattlelocationInput = {
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_tankUpdateWithoutBattlelocationInput = {
    tanks?: tanksUpdateOneRequiredWithoutBattleTanksNestedInput
  }

  export type battlelocation_tankUncheckedUpdateWithoutBattlelocationInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_tankUncheckedUpdateManyWithoutBattlelocationInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type favourite_tanksCreateManyUsersInput = {
    fav_id?: number
    tank_id: number
  }

  export type favourite_tanksUpdateWithoutUsersInput = {
    tanks?: tanksUpdateOneRequiredWithoutFavourite_tanksNestedInput
  }

  export type favourite_tanksUncheckedUpdateWithoutUsersInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type favourite_tanksUncheckedUpdateManyWithoutUsersInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type tank_photosCreateManyPhotosInput = {
    id?: number
    tank_id: number
  }

  export type tank_photosUpdateWithoutPhotosInput = {
    tanks?: tanksUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type tank_photosUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type tank_photosUncheckedUpdateManyWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tank_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_countryCreateManyCountriesInput = {
    battlelocation_id: number
  }

  export type tanksCreateManyCountriesInput = {
    tank_id?: number
    name: string
    type_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
  }

  export type battlelocation_countryUpdateWithoutCountriesInput = {
    battlelocation?: battlelocationUpdateOneRequiredWithoutBattleCountriesNestedInput
  }

  export type battlelocation_countryUncheckedUpdateWithoutCountriesInput = {
    battlelocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_countryUncheckedUpdateManyWithoutCountriesInput = {
    battlelocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type tanksUpdateWithoutCountriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_types?: vehicle_typesUpdateOneWithoutTanksNestedInput
    battleTanks?: battlelocation_tankUpdateManyWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUpdateManyWithoutTanksNestedInput
  }

  export type tanksUncheckedUpdateWithoutCountriesInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    battleTanks?: battlelocation_tankUncheckedUpdateManyWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUncheckedUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUncheckedUpdateManyWithoutTanksNestedInput
  }

  export type tanksUncheckedUpdateManyWithoutCountriesInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tanksCreateManyVehicle_typesInput = {
    tank_id?: number
    name: string
    country_id?: number | null
    weight_kg?: number | null
    crew?: number | null
    engine_power_hp?: number | null
    top_speed_kmh?: Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: number | null
    armor_side_mm?: number | null
    armor_rear_mm?: number | null
    gun_caliber_mm?: Decimal | DecimalJsLike | number | string | null
    year_introduced?: number | null
    notes?: string | null
  }

  export type tanksUpdateWithoutVehicle_typesInput = {
    name?: StringFieldUpdateOperationsInput | string
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    countries?: countriesUpdateOneWithoutTanksNestedInput
    battleTanks?: battlelocation_tankUpdateManyWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUpdateManyWithoutTanksNestedInput
  }

  export type tanksUncheckedUpdateWithoutVehicle_typesInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    battleTanks?: battlelocation_tankUncheckedUpdateManyWithoutTanksNestedInput
    favourite_tanks?: favourite_tanksUncheckedUpdateManyWithoutTanksNestedInput
    photos?: tank_photosUncheckedUpdateManyWithoutTanksNestedInput
  }

  export type tanksUncheckedUpdateManyWithoutVehicle_typesInput = {
    tank_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    weight_kg?: NullableIntFieldUpdateOperationsInput | number | null
    crew?: NullableIntFieldUpdateOperationsInput | number | null
    engine_power_hp?: NullableIntFieldUpdateOperationsInput | number | null
    top_speed_kmh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    armor_front_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_side_mm?: NullableIntFieldUpdateOperationsInput | number | null
    armor_rear_mm?: NullableIntFieldUpdateOperationsInput | number | null
    gun_caliber_mm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    year_introduced?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type battlelocation_tankCreateManyTanksInput = {
    battlelocation_id: number
  }

  export type favourite_tanksCreateManyTanksInput = {
    fav_id?: number
    user_id: number
  }

  export type tank_photosCreateManyTanksInput = {
    id?: number
    photo_id: number
  }

  export type battlelocation_tankUpdateWithoutTanksInput = {
    battlelocation?: battlelocationUpdateOneRequiredWithoutBattleTanksNestedInput
  }

  export type battlelocation_tankUncheckedUpdateWithoutTanksInput = {
    battlelocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type battlelocation_tankUncheckedUpdateManyWithoutTanksInput = {
    battlelocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type favourite_tanksUpdateWithoutTanksInput = {
    users?: usersUpdateOneRequiredWithoutFavourite_tanksNestedInput
  }

  export type favourite_tanksUncheckedUpdateWithoutTanksInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type favourite_tanksUncheckedUpdateManyWithoutTanksInput = {
    fav_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type tank_photosUpdateWithoutTanksInput = {
    photos?: photosUpdateOneRequiredWithoutTanksNestedInput
  }

  export type tank_photosUncheckedUpdateWithoutTanksInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
  }

  export type tank_photosUncheckedUpdateManyWithoutTanksInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
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