
export type Nominal<K, T> = Readonly<T> & {
    __TYPE__: K
}

export type Id<T extends string> = Nominal<T, string>

export type IdCollection<T extends string> = Record<string, Id<T>>

export type Timestamp = number

export type ErrorHandler<T = void> = (error: Error) => T

export type Primitive =
    | bigint
    | boolean
    | null
    | number
    | string
    | symbol
    | undefined

export type PlainObject<T = Primitive> = Record<string, T>

export type JSONValue = Primitive | JSONObject | JSONArray

export interface JSONObject {
    [key: string]: JSONValue
}

export interface JSONArray extends Array<JSONValue> {}

export type StateVariable = JSONValue

export type UserInfo = {
    lastTextMessage: string
    username: string
    userEmail: string
    userId: string
}

export const defaultUserInfo: UserInfo = {
  lastTextMessage: '',
  username: 'not-set',
  userEmail: 'not-set',
  userId: '',
};

/*
 * To make the core agnostic from content,
 * we normalize all incoming state types to
 * GeneralizedState, as defined here.
 */
export type GeneralizedState = PlainObject<StateVariable>

export type GeneralizedStateInstance = Readonly<GeneralizedState>

export type GeneralizedStateUpdate = Partial<GeneralizedStateInstance>

export type UserIdNominalType = 'uuid'

export type UserId = Id<UserIdNominalType>

export type ConvoModuleIdNominalType = 'convo-module-id'

export type ConvoModuleId = Id<ConvoModuleIdNominalType>

export type ConvoSegmentIdNominalType = 'convo-segment-id'

export type ConvoSegmentId = Id<ConvoSegmentIdNominalType>

export type ModulePath = ConvoModuleId[]

export type ConvoSegmentPath = Readonly<{
    id: ConvoSegmentId

    // Path is considered relative if parent modules is undefined
    parentModules?: ModulePath
}>

export type AbsoluteConvoSegmentPath = Required<ConvoSegmentPath>

export type NavigationStoreState = {
    currentConvoSegmentPath: Required<ConvoSegmentPath>
}

export type VariableStoreState = {
    variables: GeneralizedState & UserInfo
}

export type EventRecordIdNominalType = 'event-record-id'

export type EventRecordId = Id<EventRecordIdNominalType>

// TODO: update this with real type
export type EventRecord = {}

export type UserHistoryState = {
    history: EventRecord[]
    revertedEvents: Set<EventRecordId>
}

export type StateDependentResult<
    T,
    S extends GeneralizedStateInstance = GeneralizedStateInstance
> = (state: S) => Readonly<T>

export type Stores = VariableStoreState & NavigationStoreState
