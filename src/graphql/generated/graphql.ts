import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Accordion = {
  __typename?: 'Accordion';
  contentDescription?: Maybe<RichText>;
  contentHeader?: Maybe<RichText>;
  contentImage?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
  videoBox?: Maybe<VideoBox>;
};


export type AccordionContentImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AccordionVideoBoxArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AccordionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AccordionWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccordionConnection = {
  __typename?: 'AccordionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AccordionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AccordionCreateInput = {
  contentDescription?: InputMaybe<Scalars['RichTextAST']>;
  contentHeader?: InputMaybe<Scalars['RichTextAST']>;
  contentImage?: InputMaybe<AssetCreateOneInlineInput>;
  videoBox?: InputMaybe<VideoBoxCreateOneInlineInput>;
};

export type AccordionCreateManyInlineInput = {
  /** Create and connect multiple existing Accordion documents */
  create?: InputMaybe<Array<AccordionCreateInput>>;
};

export type AccordionCreateOneInlineInput = {
  /** Create and connect one Accordion document */
  create?: InputMaybe<AccordionCreateInput>;
};

export type AccordionCreateWithPositionInput = {
  /** Document to create */
  data: AccordionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AccordionEdge = {
  __typename?: 'AccordionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Accordion;
};

/** Identifies documents */
export type AccordionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccordionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccordionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccordionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contentImage?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  videoBox?: InputMaybe<VideoBoxWhereInput>;
};

export enum AccordionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AccordionParent = LayoutBlockColumn;

export type AccordionParentConnectInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnConnectInput>;
};

export type AccordionParentCreateInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateInput>;
};

export type AccordionParentCreateManyInlineInput = {
  /** Create and connect multiple existing AccordionParent documents */
  create?: InputMaybe<Array<AccordionParentCreateInput>>;
};

export type AccordionParentCreateOneInlineInput = {
  /** Create and connect one AccordionParent document */
  create?: InputMaybe<AccordionParentCreateInput>;
};

export type AccordionParentCreateWithPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateWithPositionInput>;
};

export type AccordionParentUpdateInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateInput>;
};

export type AccordionParentUpdateManyInlineInput = {
  /** Create and connect multiple AccordionParent component instances */
  create?: InputMaybe<Array<AccordionParentCreateWithPositionInput>>;
  /** Delete multiple AccordionParent documents */
  delete?: InputMaybe<Array<AccordionParentWhereUniqueInput>>;
  /** Update multiple AccordionParent component instances */
  update?: InputMaybe<Array<AccordionParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AccordionParent component instances */
  upsert?: InputMaybe<Array<AccordionParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AccordionParentUpdateManyWithNestedWhereInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateManyWithNestedWhereInput>;
};

export type AccordionParentUpdateOneInlineInput = {
  /** Create and connect one AccordionParent document */
  create?: InputMaybe<AccordionParentCreateInput>;
  /** Delete currently connected AccordionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single AccordionParent document */
  update?: InputMaybe<AccordionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AccordionParent document */
  upsert?: InputMaybe<AccordionParentUpsertWithNestedWhereUniqueInput>;
};

export type AccordionParentUpdateWithNestedWhereUniqueAndPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type AccordionParentUpdateWithNestedWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueInput>;
};

export type AccordionParentUpsertWithNestedWhereUniqueAndPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type AccordionParentUpsertWithNestedWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueInput>;
};

export type AccordionParentWhereInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereInput>;
};

export type AccordionParentWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereUniqueInput>;
};

export type AccordionUpdateInput = {
  contentDescription?: InputMaybe<Scalars['RichTextAST']>;
  contentHeader?: InputMaybe<Scalars['RichTextAST']>;
  contentImage?: InputMaybe<AssetUpdateOneInlineInput>;
  videoBox?: InputMaybe<VideoBoxUpdateOneInlineInput>;
};

export type AccordionUpdateManyInlineInput = {
  /** Create and connect multiple Accordion component instances */
  create?: InputMaybe<Array<AccordionCreateWithPositionInput>>;
  /** Delete multiple Accordion documents */
  delete?: InputMaybe<Array<AccordionWhereUniqueInput>>;
  /** Update multiple Accordion component instances */
  update?: InputMaybe<Array<AccordionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Accordion component instances */
  upsert?: InputMaybe<Array<AccordionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AccordionUpdateManyInput = {
  contentDescription?: InputMaybe<Scalars['RichTextAST']>;
  contentHeader?: InputMaybe<Scalars['RichTextAST']>;
};

export type AccordionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AccordionUpdateManyInput;
  /** Document search */
  where: AccordionWhereInput;
};

export type AccordionUpdateOneInlineInput = {
  /** Create and connect one Accordion document */
  create?: InputMaybe<AccordionCreateInput>;
  /** Delete currently connected Accordion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Accordion document */
  update?: InputMaybe<AccordionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Accordion document */
  upsert?: InputMaybe<AccordionUpsertWithNestedWhereUniqueInput>;
};

export type AccordionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AccordionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AccordionWhereUniqueInput;
};

export type AccordionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AccordionUpdateInput;
  /** Unique document search */
  where: AccordionWhereUniqueInput;
};

export type AccordionUpsertInput = {
  /** Create document if it didn't exist */
  create: AccordionCreateInput;
  /** Update document if it exists */
  update: AccordionUpdateInput;
};

export type AccordionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AccordionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AccordionWhereUniqueInput;
};

export type AccordionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AccordionUpsertInput;
  /** Unique document search */
  where: AccordionWhereUniqueInput;
};

/** Identifies documents */
export type AccordionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccordionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccordionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccordionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contentImage?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  videoBox?: InputMaybe<VideoBoxWhereInput>;
};

/** References Accordion record uniquely */
export type AccordionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type Album = Node & {
  __typename?: 'Album';
  albumBuyLink?: Maybe<Scalars['String']>;
  albumCover?: Maybe<Asset>;
  albumJsonData?: Maybe<Scalars['Json']>;
  albumSlug?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Album>;
  featureHomePage?: Maybe<Scalars['Boolean']>;
  /** List of Album versions */
  history: Array<Version>;
  iFramePlayer?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  releaseDate?: Maybe<Scalars['Date']>;
  releaseType?: Maybe<ReleaseType>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  videoBox: Array<VideoBox>;
};


export type AlbumAlbumCoverArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AlbumCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AlbumDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AlbumHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type AlbumPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AlbumScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AlbumUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AlbumVideoBoxArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<VideoBoxOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoBoxWhereInput>;
};

export type AlbumConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AlbumWhereUniqueInput;
};

/** A connection to a list of items. */
export type AlbumConnection = {
  __typename?: 'AlbumConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AlbumEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AlbumCreateInput = {
  albumBuyLink?: InputMaybe<Scalars['String']>;
  albumCover?: InputMaybe<AssetCreateOneInlineInput>;
  albumJsonData?: InputMaybe<Scalars['Json']>;
  albumSlug?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  featureHomePage?: InputMaybe<Scalars['Boolean']>;
  iFramePlayer?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['Date']>;
  releaseType?: InputMaybe<ReleaseType>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoBox?: InputMaybe<VideoBoxCreateManyInlineInput>;
};

export type AlbumCreateManyInlineInput = {
  /** Connect multiple existing Album documents */
  connect?: InputMaybe<Array<AlbumWhereUniqueInput>>;
  /** Create and connect multiple existing Album documents */
  create?: InputMaybe<Array<AlbumCreateInput>>;
};

export type AlbumCreateOneInlineInput = {
  /** Connect one existing Album document */
  connect?: InputMaybe<AlbumWhereUniqueInput>;
  /** Create and connect one Album document */
  create?: InputMaybe<AlbumCreateInput>;
};

/** An edge in a connection. */
export type AlbumEdge = {
  __typename?: 'AlbumEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Album;
};

/** Identifies documents */
export type AlbumManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AlbumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AlbumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AlbumWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  albumBuyLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  albumBuyLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  albumBuyLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  albumBuyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  albumBuyLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  albumBuyLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  albumBuyLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  albumBuyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  albumBuyLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  albumBuyLink_starts_with?: InputMaybe<Scalars['String']>;
  albumCover?: InputMaybe<AssetWhereInput>;
  /** All values containing the given json path. */
  albumJsonData_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  albumJsonData_value_recursive?: InputMaybe<Scalars['Json']>;
  albumSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  albumSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  albumSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  albumSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  albumSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  albumSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  albumSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  albumSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  albumSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  albumSlug_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AlbumWhereStageInput>;
  documentInStages_none?: InputMaybe<AlbumWhereStageInput>;
  documentInStages_some?: InputMaybe<AlbumWhereStageInput>;
  featureHomePage?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  featureHomePage_not?: InputMaybe<Scalars['Boolean']>;
  iFramePlayer?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  iFramePlayer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  iFramePlayer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iFramePlayer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iFramePlayer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  iFramePlayer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  iFramePlayer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  iFramePlayer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  iFramePlayer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  iFramePlayer_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  releaseDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  releaseDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  releaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  releaseDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  releaseDate_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  releaseDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  releaseType?: InputMaybe<ReleaseType>;
  /** All values that are contained in given list. */
  releaseType_in?: InputMaybe<Array<InputMaybe<ReleaseType>>>;
  /** Any other value that exists and is not equal to the given value. */
  releaseType_not?: InputMaybe<ReleaseType>;
  /** All values that are not contained in given list. */
  releaseType_not_in?: InputMaybe<Array<InputMaybe<ReleaseType>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
};

export enum AlbumOrderByInput {
  AlbumBuyLinkAsc = 'albumBuyLink_ASC',
  AlbumBuyLinkDesc = 'albumBuyLink_DESC',
  AlbumSlugAsc = 'albumSlug_ASC',
  AlbumSlugDesc = 'albumSlug_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FeatureHomePageAsc = 'featureHomePage_ASC',
  FeatureHomePageDesc = 'featureHomePage_DESC',
  IFramePlayerAsc = 'iFramePlayer_ASC',
  IFramePlayerDesc = 'iFramePlayer_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseDateAsc = 'releaseDate_ASC',
  ReleaseDateDesc = 'releaseDate_DESC',
  ReleaseTypeAsc = 'releaseType_ASC',
  ReleaseTypeDesc = 'releaseType_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AlbumUpdateInput = {
  albumBuyLink?: InputMaybe<Scalars['String']>;
  albumCover?: InputMaybe<AssetUpdateOneInlineInput>;
  albumJsonData?: InputMaybe<Scalars['Json']>;
  albumSlug?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  featureHomePage?: InputMaybe<Scalars['Boolean']>;
  iFramePlayer?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['Date']>;
  releaseType?: InputMaybe<ReleaseType>;
  title?: InputMaybe<Scalars['String']>;
  videoBox?: InputMaybe<VideoBoxUpdateManyInlineInput>;
};

export type AlbumUpdateManyInlineInput = {
  /** Connect multiple existing Album documents */
  connect?: InputMaybe<Array<AlbumConnectInput>>;
  /** Create and connect multiple Album documents */
  create?: InputMaybe<Array<AlbumCreateInput>>;
  /** Delete multiple Album documents */
  delete?: InputMaybe<Array<AlbumWhereUniqueInput>>;
  /** Disconnect multiple Album documents */
  disconnect?: InputMaybe<Array<AlbumWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Album documents */
  set?: InputMaybe<Array<AlbumWhereUniqueInput>>;
  /** Update multiple Album documents */
  update?: InputMaybe<Array<AlbumUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Album documents */
  upsert?: InputMaybe<Array<AlbumUpsertWithNestedWhereUniqueInput>>;
};

export type AlbumUpdateManyInput = {
  albumBuyLink?: InputMaybe<Scalars['String']>;
  albumJsonData?: InputMaybe<Scalars['Json']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  featureHomePage?: InputMaybe<Scalars['Boolean']>;
  iFramePlayer?: InputMaybe<Scalars['String']>;
  releaseDate?: InputMaybe<Scalars['Date']>;
  releaseType?: InputMaybe<ReleaseType>;
  title?: InputMaybe<Scalars['String']>;
};

export type AlbumUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AlbumUpdateManyInput;
  /** Document search */
  where: AlbumWhereInput;
};

export type AlbumUpdateOneInlineInput = {
  /** Connect existing Album document */
  connect?: InputMaybe<AlbumWhereUniqueInput>;
  /** Create and connect one Album document */
  create?: InputMaybe<AlbumCreateInput>;
  /** Delete currently connected Album document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Album document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Album document */
  update?: InputMaybe<AlbumUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Album document */
  upsert?: InputMaybe<AlbumUpsertWithNestedWhereUniqueInput>;
};

export type AlbumUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AlbumUpdateInput;
  /** Unique document search */
  where: AlbumWhereUniqueInput;
};

export type AlbumUpsertInput = {
  /** Create document if it didn't exist */
  create: AlbumCreateInput;
  /** Update document if it exists */
  update: AlbumUpdateInput;
};

export type AlbumUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AlbumUpsertInput;
  /** Unique document search */
  where: AlbumWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AlbumWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AlbumWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AlbumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AlbumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AlbumWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  albumBuyLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  albumBuyLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  albumBuyLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  albumBuyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  albumBuyLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  albumBuyLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  albumBuyLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  albumBuyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  albumBuyLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  albumBuyLink_starts_with?: InputMaybe<Scalars['String']>;
  albumCover?: InputMaybe<AssetWhereInput>;
  /** All values containing the given json path. */
  albumJsonData_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  albumJsonData_value_recursive?: InputMaybe<Scalars['Json']>;
  albumSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  albumSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  albumSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  albumSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  albumSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  albumSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  albumSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  albumSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  albumSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  albumSlug_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AlbumWhereStageInput>;
  documentInStages_none?: InputMaybe<AlbumWhereStageInput>;
  documentInStages_some?: InputMaybe<AlbumWhereStageInput>;
  featureHomePage?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  featureHomePage_not?: InputMaybe<Scalars['Boolean']>;
  iFramePlayer?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  iFramePlayer_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  iFramePlayer_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iFramePlayer_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iFramePlayer_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  iFramePlayer_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  iFramePlayer_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  iFramePlayer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  iFramePlayer_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  iFramePlayer_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  releaseDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  releaseDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  releaseDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  releaseDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  releaseDate_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  releaseDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  releaseType?: InputMaybe<ReleaseType>;
  /** All values that are contained in given list. */
  releaseType_in?: InputMaybe<Array<InputMaybe<ReleaseType>>>;
  /** Any other value that exists and is not equal to the given value. */
  releaseType_not?: InputMaybe<ReleaseType>;
  /** All values that are not contained in given list. */
  releaseType_not_in?: InputMaybe<Array<InputMaybe<ReleaseType>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AlbumWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AlbumWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AlbumWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AlbumWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AlbumWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Album record uniquely */
export type AlbumWhereUniqueInput = {
  albumSlug?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  albumCoverAlbum: Array<Album>;
  avatarImageProfile: Array<Profile>;
  blogGalleryBlog: Array<Blog>;
  clientLogoLogoTable: Array<LogoTable>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  eventFlyerEvent: Array<Event>;
  eventGalleryEvent: Array<Event>;
  faviconSiteLibrary: Array<SiteLibrary>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  heroImagePage: Array<Page>;
  heroImageProfile: Array<Profile>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageBlog: Array<Blog>;
  imageGalleryProfile: Array<Profile>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  logoSiteLibrary: Array<SiteLibrary>;
  metaAppleTouchIconSiteLibrary: Array<SiteLibrary>;
  metaOgImageSiteLibrary: Array<SiteLibrary>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  navigationLogoNavigation: Array<Navigation>;
  portfolioGalleryProfile: Array<Profile>;
  profileLogoProfile: Array<Profile>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  secondaryLogoSiteLibrary: Array<SiteLibrary>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  testimonialAvatarTestimonial: Array<Testimonial>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetAlbumCoverAlbumArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AlbumOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlbumWhereInput>;
};


/** Asset system model */
export type AssetAvatarImageProfileArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


/** Asset system model */
export type AssetBlogGalleryBlogArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BlogOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogWhereInput>;
};


/** Asset system model */
export type AssetClientLogoLogoTableArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LogoTableOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogoTableWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetEventFlyerEventArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


/** Asset system model */
export type AssetEventGalleryEventArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


/** Asset system model */
export type AssetFaviconSiteLibraryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SiteLibraryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteLibraryWhereInput>;
};


/** Asset system model */
export type AssetHeroImagePageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};


/** Asset system model */
export type AssetHeroImageProfileArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageBlogArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<BlogOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogWhereInput>;
};


/** Asset system model */
export type AssetImageGalleryProfileArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetLogoSiteLibraryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SiteLibraryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteLibraryWhereInput>;
};


/** Asset system model */
export type AssetMetaAppleTouchIconSiteLibraryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SiteLibraryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteLibraryWhereInput>;
};


/** Asset system model */
export type AssetMetaOgImageSiteLibraryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SiteLibraryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteLibraryWhereInput>;
};


/** Asset system model */
export type AssetNavigationLogoNavigationArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationWhereInput>;
};


/** Asset system model */
export type AssetPortfolioGalleryProfileArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


/** Asset system model */
export type AssetProfileLogoProfileArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetSecondaryLogoSiteLibraryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SiteLibraryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteLibraryWhereInput>;
};


/** Asset system model */
export type AssetTestimonialAvatarTestimonialArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TestimonialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestimonialWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  albumCoverAlbum?: InputMaybe<AlbumCreateManyInlineInput>;
  avatarImageProfile?: InputMaybe<ProfileCreateManyInlineInput>;
  backgroundImageLayoutBlock?: InputMaybe<LayoutBlockCreateManyInlineInput>;
  backgroundImageLayoutSectionContent?: InputMaybe<LayoutBlockColumnCreateManyInlineInput>;
  blogGalleryBlog?: InputMaybe<BlogCreateManyInlineInput>;
  boxImageGridBox?: InputMaybe<GridBoxCreateManyInlineInput>;
  clientLogoLogoTable?: InputMaybe<LogoTableCreateManyInlineInput>;
  contactAvatarContactList?: InputMaybe<ContactListCreateManyInlineInput>;
  contentImageAccordionContent?: InputMaybe<AccordionCreateManyInlineInput>;
  contentImageTextContent?: InputMaybe<TextContentCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventFlyerEvent?: InputMaybe<EventCreateManyInlineInput>;
  eventGalleryEvent?: InputMaybe<EventCreateManyInlineInput>;
  faviconSiteLibrary?: InputMaybe<SiteLibraryCreateManyInlineInput>;
  fileName: Scalars['String'];
  footerImageFooterColumn?: InputMaybe<FooterColumnCreateManyInlineInput>;
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  heroImagePage?: InputMaybe<PageCreateManyInlineInput>;
  heroImageProfile?: InputMaybe<ProfileCreateManyInlineInput>;
  imageBlog?: InputMaybe<BlogCreateManyInlineInput>;
  imageGalleryProfile?: InputMaybe<ProfileCreateManyInlineInput>;
  imagePopup?: InputMaybe<PopupCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  logoSiteLibrary?: InputMaybe<SiteLibraryCreateManyInlineInput>;
  metaAppleTouchIconSiteLibrary?: InputMaybe<SiteLibraryCreateManyInlineInput>;
  metaOgImageSiteLibrary?: InputMaybe<SiteLibraryCreateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  navLogoNavigationItem?: InputMaybe<NavigationItemCreateManyInlineInput>;
  navigationLogoNavigation?: InputMaybe<NavigationCreateManyInlineInput>;
  parallaxImageLayoutSectionContent?: InputMaybe<LayoutBlockColumnCreateManyInlineInput>;
  portfolioGalleryProfile?: InputMaybe<ProfileCreateManyInlineInput>;
  profileLogoProfile?: InputMaybe<ProfileCreateManyInlineInput>;
  secondaryLogoSiteLibrary?: InputMaybe<SiteLibraryCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  sliderGalleryLayoutSectionContent?: InputMaybe<LayoutBlockColumnCreateManyInlineInput>;
  sliderMediaBackgroundHeroMediaSlider?: InputMaybe<HeroMediaSliderCreateManyInlineInput>;
  testimonialAvatarTestimonial?: InputMaybe<TestimonialCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  albumCoverAlbum_every?: InputMaybe<AlbumWhereInput>;
  albumCoverAlbum_none?: InputMaybe<AlbumWhereInput>;
  albumCoverAlbum_some?: InputMaybe<AlbumWhereInput>;
  avatarImageProfile_every?: InputMaybe<ProfileWhereInput>;
  avatarImageProfile_none?: InputMaybe<ProfileWhereInput>;
  avatarImageProfile_some?: InputMaybe<ProfileWhereInput>;
  blogGalleryBlog_every?: InputMaybe<BlogWhereInput>;
  blogGalleryBlog_none?: InputMaybe<BlogWhereInput>;
  blogGalleryBlog_some?: InputMaybe<BlogWhereInput>;
  clientLogoLogoTable_every?: InputMaybe<LogoTableWhereInput>;
  clientLogoLogoTable_none?: InputMaybe<LogoTableWhereInput>;
  clientLogoLogoTable_some?: InputMaybe<LogoTableWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  eventFlyerEvent_every?: InputMaybe<EventWhereInput>;
  eventFlyerEvent_none?: InputMaybe<EventWhereInput>;
  eventFlyerEvent_some?: InputMaybe<EventWhereInput>;
  eventGalleryEvent_every?: InputMaybe<EventWhereInput>;
  eventGalleryEvent_none?: InputMaybe<EventWhereInput>;
  eventGalleryEvent_some?: InputMaybe<EventWhereInput>;
  faviconSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  faviconSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  faviconSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  heroImagePage_every?: InputMaybe<PageWhereInput>;
  heroImagePage_none?: InputMaybe<PageWhereInput>;
  heroImagePage_some?: InputMaybe<PageWhereInput>;
  heroImageProfile_every?: InputMaybe<ProfileWhereInput>;
  heroImageProfile_none?: InputMaybe<ProfileWhereInput>;
  heroImageProfile_some?: InputMaybe<ProfileWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageBlog_every?: InputMaybe<BlogWhereInput>;
  imageBlog_none?: InputMaybe<BlogWhereInput>;
  imageBlog_some?: InputMaybe<BlogWhereInput>;
  imageGalleryProfile_every?: InputMaybe<ProfileWhereInput>;
  imageGalleryProfile_none?: InputMaybe<ProfileWhereInput>;
  imageGalleryProfile_some?: InputMaybe<ProfileWhereInput>;
  logoSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  logoSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  logoSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  metaAppleTouchIconSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  metaAppleTouchIconSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  metaAppleTouchIconSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  metaOgImageSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  metaOgImageSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  metaOgImageSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  navigationLogoNavigation_every?: InputMaybe<NavigationWhereInput>;
  navigationLogoNavigation_none?: InputMaybe<NavigationWhereInput>;
  navigationLogoNavigation_some?: InputMaybe<NavigationWhereInput>;
  portfolioGalleryProfile_every?: InputMaybe<ProfileWhereInput>;
  portfolioGalleryProfile_none?: InputMaybe<ProfileWhereInput>;
  portfolioGalleryProfile_some?: InputMaybe<ProfileWhereInput>;
  profileLogoProfile_every?: InputMaybe<ProfileWhereInput>;
  profileLogoProfile_none?: InputMaybe<ProfileWhereInput>;
  profileLogoProfile_some?: InputMaybe<ProfileWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  secondaryLogoSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  secondaryLogoSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  secondaryLogoSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  testimonialAvatarTestimonial_every?: InputMaybe<TestimonialWhereInput>;
  testimonialAvatarTestimonial_none?: InputMaybe<TestimonialWhereInput>;
  testimonialAvatarTestimonial_some?: InputMaybe<TestimonialWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  albumCoverAlbum?: InputMaybe<AlbumUpdateManyInlineInput>;
  avatarImageProfile?: InputMaybe<ProfileUpdateManyInlineInput>;
  backgroundImageLayoutBlock?: InputMaybe<LayoutBlockUpdateManyInlineInput>;
  backgroundImageLayoutSectionContent?: InputMaybe<LayoutBlockColumnUpdateManyInlineInput>;
  blogGalleryBlog?: InputMaybe<BlogUpdateManyInlineInput>;
  boxImageGridBox?: InputMaybe<GridBoxUpdateManyInlineInput>;
  clientLogoLogoTable?: InputMaybe<LogoTableUpdateManyInlineInput>;
  contactAvatarContactList?: InputMaybe<ContactListUpdateManyInlineInput>;
  contentImageAccordionContent?: InputMaybe<AccordionUpdateManyInlineInput>;
  contentImageTextContent?: InputMaybe<TextContentUpdateManyInlineInput>;
  eventFlyerEvent?: InputMaybe<EventUpdateManyInlineInput>;
  eventGalleryEvent?: InputMaybe<EventUpdateManyInlineInput>;
  faviconSiteLibrary?: InputMaybe<SiteLibraryUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  footerImageFooterColumn?: InputMaybe<FooterColumnUpdateManyInlineInput>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  heroImagePage?: InputMaybe<PageUpdateManyInlineInput>;
  heroImageProfile?: InputMaybe<ProfileUpdateManyInlineInput>;
  imageBlog?: InputMaybe<BlogUpdateManyInlineInput>;
  imageGalleryProfile?: InputMaybe<ProfileUpdateManyInlineInput>;
  imagePopup?: InputMaybe<PopupUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  logoSiteLibrary?: InputMaybe<SiteLibraryUpdateManyInlineInput>;
  metaAppleTouchIconSiteLibrary?: InputMaybe<SiteLibraryUpdateManyInlineInput>;
  metaOgImageSiteLibrary?: InputMaybe<SiteLibraryUpdateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  navLogoNavigationItem?: InputMaybe<NavigationItemUpdateManyInlineInput>;
  navigationLogoNavigation?: InputMaybe<NavigationUpdateManyInlineInput>;
  parallaxImageLayoutSectionContent?: InputMaybe<LayoutBlockColumnUpdateManyInlineInput>;
  portfolioGalleryProfile?: InputMaybe<ProfileUpdateManyInlineInput>;
  profileLogoProfile?: InputMaybe<ProfileUpdateManyInlineInput>;
  secondaryLogoSiteLibrary?: InputMaybe<SiteLibraryUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  sliderGalleryLayoutSectionContent?: InputMaybe<LayoutBlockColumnUpdateManyInlineInput>;
  sliderMediaBackgroundHeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateManyInlineInput>;
  testimonialAvatarTestimonial?: InputMaybe<TestimonialUpdateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  albumCoverAlbum_every?: InputMaybe<AlbumWhereInput>;
  albumCoverAlbum_none?: InputMaybe<AlbumWhereInput>;
  albumCoverAlbum_some?: InputMaybe<AlbumWhereInput>;
  avatarImageProfile_every?: InputMaybe<ProfileWhereInput>;
  avatarImageProfile_none?: InputMaybe<ProfileWhereInput>;
  avatarImageProfile_some?: InputMaybe<ProfileWhereInput>;
  blogGalleryBlog_every?: InputMaybe<BlogWhereInput>;
  blogGalleryBlog_none?: InputMaybe<BlogWhereInput>;
  blogGalleryBlog_some?: InputMaybe<BlogWhereInput>;
  clientLogoLogoTable_every?: InputMaybe<LogoTableWhereInput>;
  clientLogoLogoTable_none?: InputMaybe<LogoTableWhereInput>;
  clientLogoLogoTable_some?: InputMaybe<LogoTableWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  eventFlyerEvent_every?: InputMaybe<EventWhereInput>;
  eventFlyerEvent_none?: InputMaybe<EventWhereInput>;
  eventFlyerEvent_some?: InputMaybe<EventWhereInput>;
  eventGalleryEvent_every?: InputMaybe<EventWhereInput>;
  eventGalleryEvent_none?: InputMaybe<EventWhereInput>;
  eventGalleryEvent_some?: InputMaybe<EventWhereInput>;
  faviconSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  faviconSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  faviconSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  heroImagePage_every?: InputMaybe<PageWhereInput>;
  heroImagePage_none?: InputMaybe<PageWhereInput>;
  heroImagePage_some?: InputMaybe<PageWhereInput>;
  heroImageProfile_every?: InputMaybe<ProfileWhereInput>;
  heroImageProfile_none?: InputMaybe<ProfileWhereInput>;
  heroImageProfile_some?: InputMaybe<ProfileWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageBlog_every?: InputMaybe<BlogWhereInput>;
  imageBlog_none?: InputMaybe<BlogWhereInput>;
  imageBlog_some?: InputMaybe<BlogWhereInput>;
  imageGalleryProfile_every?: InputMaybe<ProfileWhereInput>;
  imageGalleryProfile_none?: InputMaybe<ProfileWhereInput>;
  imageGalleryProfile_some?: InputMaybe<ProfileWhereInput>;
  logoSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  logoSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  logoSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  metaAppleTouchIconSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  metaAppleTouchIconSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  metaAppleTouchIconSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  metaOgImageSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  metaOgImageSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  metaOgImageSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  navigationLogoNavigation_every?: InputMaybe<NavigationWhereInput>;
  navigationLogoNavigation_none?: InputMaybe<NavigationWhereInput>;
  navigationLogoNavigation_some?: InputMaybe<NavigationWhereInput>;
  portfolioGalleryProfile_every?: InputMaybe<ProfileWhereInput>;
  portfolioGalleryProfile_none?: InputMaybe<ProfileWhereInput>;
  portfolioGalleryProfile_some?: InputMaybe<ProfileWhereInput>;
  profileLogoProfile_every?: InputMaybe<ProfileWhereInput>;
  profileLogoProfile_none?: InputMaybe<ProfileWhereInput>;
  profileLogoProfile_some?: InputMaybe<ProfileWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  secondaryLogoSiteLibrary_every?: InputMaybe<SiteLibraryWhereInput>;
  secondaryLogoSiteLibrary_none?: InputMaybe<SiteLibraryWhereInput>;
  secondaryLogoSiteLibrary_some?: InputMaybe<SiteLibraryWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  testimonialAvatarTestimonial_every?: InputMaybe<TestimonialWhereInput>;
  testimonialAvatarTestimonial_none?: InputMaybe<TestimonialWhereInput>;
  testimonialAvatarTestimonial_some?: InputMaybe<TestimonialWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Blog Enteries */
export type Blog = Node & {
  __typename?: 'Blog';
  blogCallToActionLink?: Maybe<Scalars['String']>;
  blogCallToActionText?: Maybe<Scalars['String']>;
  blogCategory?: Maybe<BlogTags>;
  blogGallery: Array<Asset>;
  blogJson?: Maybe<Scalars['Json']>;
  blogSlug?: Maybe<Scalars['String']>;
  content?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date?: Maybe<Scalars['Date']>;
  /** Get the document in other stages */
  documentInStages: Array<Blog>;
  excerpt?: Maybe<Scalars['String']>;
  /** List of Blog versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  videoBox: Array<VideoBox>;
};


/** Blog Enteries */
export type BlogBlogGalleryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


/** Blog Enteries */
export type BlogCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Blog Enteries */
export type BlogDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Blog Enteries */
export type BlogHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Blog Enteries */
export type BlogImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Blog Enteries */
export type BlogPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Blog Enteries */
export type BlogScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Blog Enteries */
export type BlogUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Blog Enteries */
export type BlogVideoBoxArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<VideoBoxOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoBoxWhereInput>;
};

export type BlogConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BlogWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogConnection = {
  __typename?: 'BlogConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BlogEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlogCreateInput = {
  blogCallToActionLink?: InputMaybe<Scalars['String']>;
  blogCallToActionText?: InputMaybe<Scalars['String']>;
  blogCategory?: InputMaybe<BlogTags>;
  blogGallery?: InputMaybe<AssetCreateManyInlineInput>;
  blogJson?: InputMaybe<Scalars['Json']>;
  blogSlug?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['Date']>;
  excerpt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoBox?: InputMaybe<VideoBoxCreateManyInlineInput>;
};

export type BlogCreateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Create and connect multiple existing Blog documents */
  create?: InputMaybe<Array<BlogCreateInput>>;
};

export type BlogCreateOneInlineInput = {
  /** Connect one existing Blog document */
  connect?: InputMaybe<BlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create?: InputMaybe<BlogCreateInput>;
};

/** An edge in a connection. */
export type BlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Blog;
};

/** Identifies documents */
export type BlogManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  blogCallToActionLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blogCallToActionLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blogCallToActionLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blogCallToActionLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogCallToActionLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blogCallToActionLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blogCallToActionLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blogCallToActionLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  blogCallToActionLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blogCallToActionLink_starts_with?: InputMaybe<Scalars['String']>;
  blogCallToActionText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blogCallToActionText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blogCallToActionText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blogCallToActionText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogCallToActionText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blogCallToActionText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blogCallToActionText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blogCallToActionText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  blogCallToActionText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blogCallToActionText_starts_with?: InputMaybe<Scalars['String']>;
  blogCategory?: InputMaybe<BlogTags>;
  /** All values that are contained in given list. */
  blogCategory_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogCategory_not?: InputMaybe<BlogTags>;
  /** All values that are not contained in given list. */
  blogCategory_not_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  blogGallery_every?: InputMaybe<AssetWhereInput>;
  blogGallery_none?: InputMaybe<AssetWhereInput>;
  blogGallery_some?: InputMaybe<AssetWhereInput>;
  /** All values containing the given json path. */
  blogJson_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  blogJson_value_recursive?: InputMaybe<Scalars['Json']>;
  blogSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blogSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blogSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blogSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blogSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blogSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blogSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  blogSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blogSlug_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  documentInStages_every?: InputMaybe<BlogWhereStageInput>;
  documentInStages_none?: InputMaybe<BlogWhereStageInput>;
  documentInStages_some?: InputMaybe<BlogWhereStageInput>;
  excerpt?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
};

export enum BlogOrderByInput {
  BlogCallToActionLinkAsc = 'blogCallToActionLink_ASC',
  BlogCallToActionLinkDesc = 'blogCallToActionLink_DESC',
  BlogCallToActionTextAsc = 'blogCallToActionText_ASC',
  BlogCallToActionTextDesc = 'blogCallToActionText_DESC',
  BlogCategoryAsc = 'blogCategory_ASC',
  BlogCategoryDesc = 'blogCategory_DESC',
  BlogSlugAsc = 'blogSlug_ASC',
  BlogSlugDesc = 'blogSlug_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum BlogTags {
  Blog = 'blog',
  Music = 'music'
}

export type BlogUpdateInput = {
  blogCallToActionLink?: InputMaybe<Scalars['String']>;
  blogCallToActionText?: InputMaybe<Scalars['String']>;
  blogCategory?: InputMaybe<BlogTags>;
  blogGallery?: InputMaybe<AssetUpdateManyInlineInput>;
  blogJson?: InputMaybe<Scalars['Json']>;
  blogSlug?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  date?: InputMaybe<Scalars['Date']>;
  excerpt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  videoBox?: InputMaybe<VideoBoxUpdateManyInlineInput>;
};

export type BlogUpdateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect?: InputMaybe<Array<BlogConnectInput>>;
  /** Create and connect multiple Blog documents */
  create?: InputMaybe<Array<BlogCreateInput>>;
  /** Delete multiple Blog documents */
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Disconnect multiple Blog documents */
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Blog documents */
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Update multiple Blog documents */
  update?: InputMaybe<Array<BlogUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Blog documents */
  upsert?: InputMaybe<Array<BlogUpsertWithNestedWhereUniqueInput>>;
};

export type BlogUpdateManyInput = {
  blogCallToActionLink?: InputMaybe<Scalars['String']>;
  blogCallToActionText?: InputMaybe<Scalars['String']>;
  blogCategory?: InputMaybe<BlogTags>;
  blogJson?: InputMaybe<Scalars['Json']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  date?: InputMaybe<Scalars['Date']>;
  excerpt?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BlogUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BlogUpdateManyInput;
  /** Document search */
  where: BlogWhereInput;
};

export type BlogUpdateOneInlineInput = {
  /** Connect existing Blog document */
  connect?: InputMaybe<BlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create?: InputMaybe<BlogCreateInput>;
  /** Delete currently connected Blog document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Blog document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Blog document */
  update?: InputMaybe<BlogUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Blog document */
  upsert?: InputMaybe<BlogUpsertWithNestedWhereUniqueInput>;
};

export type BlogUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BlogUpdateInput;
  /** Unique document search */
  where: BlogWhereUniqueInput;
};

export type BlogUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogCreateInput;
  /** Update document if it exists */
  update: BlogUpdateInput;
};

export type BlogUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BlogUpsertInput;
  /** Unique document search */
  where: BlogWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type BlogWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type BlogWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  blogCallToActionLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blogCallToActionLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blogCallToActionLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blogCallToActionLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogCallToActionLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blogCallToActionLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blogCallToActionLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blogCallToActionLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  blogCallToActionLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blogCallToActionLink_starts_with?: InputMaybe<Scalars['String']>;
  blogCallToActionText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blogCallToActionText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blogCallToActionText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blogCallToActionText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogCallToActionText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blogCallToActionText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blogCallToActionText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blogCallToActionText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  blogCallToActionText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blogCallToActionText_starts_with?: InputMaybe<Scalars['String']>;
  blogCategory?: InputMaybe<BlogTags>;
  /** All values that are contained in given list. */
  blogCategory_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogCategory_not?: InputMaybe<BlogTags>;
  /** All values that are not contained in given list. */
  blogCategory_not_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  blogGallery_every?: InputMaybe<AssetWhereInput>;
  blogGallery_none?: InputMaybe<AssetWhereInput>;
  blogGallery_some?: InputMaybe<AssetWhereInput>;
  /** All values containing the given json path. */
  blogJson_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  blogJson_value_recursive?: InputMaybe<Scalars['Json']>;
  blogSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blogSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blogSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blogSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blogSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blogSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blogSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  blogSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blogSlug_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  documentInStages_every?: InputMaybe<BlogWhereStageInput>;
  documentInStages_none?: InputMaybe<BlogWhereStageInput>;
  documentInStages_some?: InputMaybe<BlogWhereStageInput>;
  excerpt?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  excerpt_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BlogWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BlogWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Blog record uniquely */
export type BlogWhereUniqueInput = {
  blogSlug?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type CallToAction = {
  __typename?: 'CallToAction';
  contentAlign?: Maybe<ContentAlign>;
  ctaClass?: Maybe<Scalars['String']>;
  ctaLabel?: Maybe<Scalars['String']>;
  ctaLink?: Maybe<Scalars['String']>;
  ctaPrimary?: Maybe<Scalars['Boolean']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

export type CallToActionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CallToActionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CallToActionConnection = {
  __typename?: 'CallToActionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CallToActionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CallToActionCreateInput = {
  contentAlign?: InputMaybe<ContentAlign>;
  ctaClass?: InputMaybe<Scalars['String']>;
  ctaLabel?: InputMaybe<Scalars['String']>;
  ctaLink?: InputMaybe<Scalars['String']>;
  ctaPrimary?: InputMaybe<Scalars['Boolean']>;
};

export type CallToActionCreateManyInlineInput = {
  /** Create and connect multiple existing CallToAction documents */
  create?: InputMaybe<Array<CallToActionCreateInput>>;
};

export type CallToActionCreateOneInlineInput = {
  /** Create and connect one CallToAction document */
  create?: InputMaybe<CallToActionCreateInput>;
};

export type CallToActionCreateWithPositionInput = {
  /** Document to create */
  data: CallToActionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CallToActionEdge = {
  __typename?: 'CallToActionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CallToAction;
};

/** Identifies documents */
export type CallToActionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  /** All values that are contained in given list. */
  contentAlign_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  /** Any other value that exists and is not equal to the given value. */
  contentAlign_not?: InputMaybe<ContentAlign>;
  /** All values that are not contained in given list. */
  contentAlign_not_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  ctaClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ctaClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ctaClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ctaClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ctaClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ctaClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ctaClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ctaClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ctaClass_starts_with?: InputMaybe<Scalars['String']>;
  ctaLabel?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ctaLabel_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ctaLabel_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ctaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLabel_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ctaLabel_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ctaLabel_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ctaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ctaLabel_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ctaLabel_starts_with?: InputMaybe<Scalars['String']>;
  ctaLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ctaLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ctaLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ctaLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ctaLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ctaLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ctaLink_starts_with?: InputMaybe<Scalars['String']>;
  ctaPrimary?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ctaPrimary_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum CallToActionOrderByInput {
  ContentAlignAsc = 'contentAlign_ASC',
  ContentAlignDesc = 'contentAlign_DESC',
  CtaClassAsc = 'ctaClass_ASC',
  CtaClassDesc = 'ctaClass_DESC',
  CtaLabelAsc = 'ctaLabel_ASC',
  CtaLabelDesc = 'ctaLabel_DESC',
  CtaLinkAsc = 'ctaLink_ASC',
  CtaLinkDesc = 'ctaLink_DESC',
  CtaPrimaryAsc = 'ctaPrimary_ASC',
  CtaPrimaryDesc = 'ctaPrimary_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CallToActionParent = HeroMediaSlider | LayoutBlockColumn;

export type CallToActionParentConnectInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderConnectInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnConnectInput>;
};

export type CallToActionParentCreateInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderCreateInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateInput>;
};

export type CallToActionParentCreateManyInlineInput = {
  /** Create and connect multiple existing CallToActionParent documents */
  create?: InputMaybe<Array<CallToActionParentCreateInput>>;
};

export type CallToActionParentCreateOneInlineInput = {
  /** Create and connect one CallToActionParent document */
  create?: InputMaybe<CallToActionParentCreateInput>;
};

export type CallToActionParentCreateWithPositionInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderCreateWithPositionInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateWithPositionInput>;
};

export type CallToActionParentUpdateInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateInput>;
};

export type CallToActionParentUpdateManyInlineInput = {
  /** Create and connect multiple CallToActionParent component instances */
  create?: InputMaybe<Array<CallToActionParentCreateWithPositionInput>>;
  /** Delete multiple CallToActionParent documents */
  delete?: InputMaybe<Array<CallToActionParentWhereUniqueInput>>;
  /** Update multiple CallToActionParent component instances */
  update?: InputMaybe<Array<CallToActionParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CallToActionParent component instances */
  upsert?: InputMaybe<Array<CallToActionParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CallToActionParentUpdateManyWithNestedWhereInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateManyWithNestedWhereInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateManyWithNestedWhereInput>;
};

export type CallToActionParentUpdateOneInlineInput = {
  /** Create and connect one CallToActionParent document */
  create?: InputMaybe<CallToActionParentCreateInput>;
  /** Delete currently connected CallToActionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single CallToActionParent document */
  update?: InputMaybe<CallToActionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CallToActionParent document */
  upsert?: InputMaybe<CallToActionParentUpsertWithNestedWhereUniqueInput>;
};

export type CallToActionParentUpdateWithNestedWhereUniqueAndPositionInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateWithNestedWhereUniqueAndPositionInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CallToActionParentUpdateWithNestedWhereUniqueInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateWithNestedWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueInput>;
};

export type CallToActionParentUpsertWithNestedWhereUniqueAndPositionInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpsertWithNestedWhereUniqueAndPositionInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CallToActionParentUpsertWithNestedWhereUniqueInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpsertWithNestedWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueInput>;
};

export type CallToActionParentWhereInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderWhereInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereInput>;
};

export type CallToActionParentWhereUniqueInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereUniqueInput>;
};

export type CallToActionUpdateInput = {
  contentAlign?: InputMaybe<ContentAlign>;
  ctaClass?: InputMaybe<Scalars['String']>;
  ctaLabel?: InputMaybe<Scalars['String']>;
  ctaLink?: InputMaybe<Scalars['String']>;
  ctaPrimary?: InputMaybe<Scalars['Boolean']>;
};

export type CallToActionUpdateManyInlineInput = {
  /** Create and connect multiple CallToAction component instances */
  create?: InputMaybe<Array<CallToActionCreateWithPositionInput>>;
  /** Delete multiple CallToAction documents */
  delete?: InputMaybe<Array<CallToActionWhereUniqueInput>>;
  /** Update multiple CallToAction component instances */
  update?: InputMaybe<Array<CallToActionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CallToAction component instances */
  upsert?: InputMaybe<Array<CallToActionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CallToActionUpdateManyInput = {
  contentAlign?: InputMaybe<ContentAlign>;
  ctaClass?: InputMaybe<Scalars['String']>;
  ctaLabel?: InputMaybe<Scalars['String']>;
  ctaLink?: InputMaybe<Scalars['String']>;
  ctaPrimary?: InputMaybe<Scalars['Boolean']>;
};

export type CallToActionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CallToActionUpdateManyInput;
  /** Document search */
  where: CallToActionWhereInput;
};

export type CallToActionUpdateOneInlineInput = {
  /** Create and connect one CallToAction document */
  create?: InputMaybe<CallToActionCreateInput>;
  /** Delete currently connected CallToAction document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single CallToAction document */
  update?: InputMaybe<CallToActionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CallToAction document */
  upsert?: InputMaybe<CallToActionUpsertWithNestedWhereUniqueInput>;
};

export type CallToActionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CallToActionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CallToActionWhereUniqueInput;
};

export type CallToActionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CallToActionUpdateInput;
  /** Unique document search */
  where: CallToActionWhereUniqueInput;
};

export type CallToActionUpsertInput = {
  /** Create document if it didn't exist */
  create: CallToActionCreateInput;
  /** Update document if it exists */
  update: CallToActionUpdateInput;
};

export type CallToActionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CallToActionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CallToActionWhereUniqueInput;
};

export type CallToActionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CallToActionUpsertInput;
  /** Unique document search */
  where: CallToActionWhereUniqueInput;
};

/** Identifies documents */
export type CallToActionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CallToActionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  /** All values that are contained in given list. */
  contentAlign_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  /** Any other value that exists and is not equal to the given value. */
  contentAlign_not?: InputMaybe<ContentAlign>;
  /** All values that are not contained in given list. */
  contentAlign_not_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  ctaClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ctaClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ctaClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ctaClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ctaClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ctaClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ctaClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ctaClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ctaClass_starts_with?: InputMaybe<Scalars['String']>;
  ctaLabel?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ctaLabel_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ctaLabel_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ctaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLabel_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ctaLabel_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ctaLabel_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ctaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ctaLabel_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ctaLabel_starts_with?: InputMaybe<Scalars['String']>;
  ctaLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ctaLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ctaLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ctaLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ctaLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ctaLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ctaLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ctaLink_starts_with?: InputMaybe<Scalars['String']>;
  ctaPrimary?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  ctaPrimary_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References CallToAction record uniquely */
export type CallToActionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type ContactForm = {
  __typename?: 'ContactForm';
  contactFormDescription?: Maybe<RichText>;
  contactFormTitle?: Maybe<Scalars['String']>;
  /** theme-bg-white */
  cssClass?: Maybe<Scalars['String']>;
  hubspotFormId?: Maybe<Scalars['String']>;
  hubspotPortalId?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  jotformUrl?: Maybe<Scalars['String']>;
  netlifyContactForm?: Maybe<Scalars['Boolean']>;
  netlifyFormFields: Array<NetlifyFormFields>;
  /** System stage field */
  stage: Stage;
};

export type ContactFormConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactFormWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactFormConnection = {
  __typename?: 'ContactFormConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactFormEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactFormCreateInput = {
  contactFormDescription?: InputMaybe<Scalars['RichTextAST']>;
  contactFormTitle?: InputMaybe<Scalars['String']>;
  cssClass?: InputMaybe<Scalars['String']>;
  hubspotFormId?: InputMaybe<Scalars['String']>;
  hubspotPortalId?: InputMaybe<Scalars['String']>;
  jotformUrl?: InputMaybe<Scalars['String']>;
  netlifyContactForm?: InputMaybe<Scalars['Boolean']>;
  netlifyFormFields?: InputMaybe<Array<NetlifyFormFields>>;
};

export type ContactFormCreateManyInlineInput = {
  /** Create and connect multiple existing ContactForm documents */
  create?: InputMaybe<Array<ContactFormCreateInput>>;
};

export type ContactFormCreateOneInlineInput = {
  /** Create and connect one ContactForm document */
  create?: InputMaybe<ContactFormCreateInput>;
};

export type ContactFormCreateWithPositionInput = {
  /** Document to create */
  data: ContactFormCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactFormEdge = {
  __typename?: 'ContactFormEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ContactForm;
};

/** Identifies documents */
export type ContactFormManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactFormTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactFormTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactFormTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactFormTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactFormTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactFormTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactFormTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactFormTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactFormTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactFormTitle_starts_with?: InputMaybe<Scalars['String']>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  hubspotFormId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hubspotFormId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hubspotFormId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hubspotFormId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  hubspotFormId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hubspotFormId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hubspotFormId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hubspotFormId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  hubspotFormId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hubspotFormId_starts_with?: InputMaybe<Scalars['String']>;
  hubspotPortalId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hubspotPortalId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hubspotPortalId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hubspotPortalId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  hubspotPortalId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hubspotPortalId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hubspotPortalId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hubspotPortalId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  hubspotPortalId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hubspotPortalId_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  jotformUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  jotformUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  jotformUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  jotformUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  jotformUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  jotformUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  jotformUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  jotformUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  jotformUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  jotformUrl_starts_with?: InputMaybe<Scalars['String']>;
  netlifyContactForm?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  netlifyContactForm_not?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  netlifyFormFields?: InputMaybe<Array<NetlifyFormFields>>;
  /** Matches if the field array contains *all* items provided to the filter */
  netlifyFormFields_contains_all?: InputMaybe<Array<NetlifyFormFields>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  netlifyFormFields_contains_none?: InputMaybe<Array<NetlifyFormFields>>;
  /** Matches if the field array contains at least one item provided to the filter */
  netlifyFormFields_contains_some?: InputMaybe<Array<NetlifyFormFields>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  netlifyFormFields_not?: InputMaybe<Array<NetlifyFormFields>>;
};

export enum ContactFormOrderByInput {
  ContactFormTitleAsc = 'contactFormTitle_ASC',
  ContactFormTitleDesc = 'contactFormTitle_DESC',
  CssClassAsc = 'cssClass_ASC',
  CssClassDesc = 'cssClass_DESC',
  HubspotFormIdAsc = 'hubspotFormId_ASC',
  HubspotFormIdDesc = 'hubspotFormId_DESC',
  HubspotPortalIdAsc = 'hubspotPortalId_ASC',
  HubspotPortalIdDesc = 'hubspotPortalId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  JotformUrlAsc = 'jotformUrl_ASC',
  JotformUrlDesc = 'jotformUrl_DESC',
  NetlifyContactFormAsc = 'netlifyContactForm_ASC',
  NetlifyContactFormDesc = 'netlifyContactForm_DESC',
  NetlifyFormFieldsAsc = 'netlifyFormFields_ASC',
  NetlifyFormFieldsDesc = 'netlifyFormFields_DESC'
}

export type ContactFormParent = LayoutBlockColumn;

export type ContactFormParentConnectInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnConnectInput>;
};

export type ContactFormParentCreateInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateInput>;
};

export type ContactFormParentCreateManyInlineInput = {
  /** Create and connect multiple existing ContactFormParent documents */
  create?: InputMaybe<Array<ContactFormParentCreateInput>>;
};

export type ContactFormParentCreateOneInlineInput = {
  /** Create and connect one ContactFormParent document */
  create?: InputMaybe<ContactFormParentCreateInput>;
};

export type ContactFormParentCreateWithPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateWithPositionInput>;
};

export type ContactFormParentUpdateInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateInput>;
};

export type ContactFormParentUpdateManyInlineInput = {
  /** Create and connect multiple ContactFormParent component instances */
  create?: InputMaybe<Array<ContactFormParentCreateWithPositionInput>>;
  /** Delete multiple ContactFormParent documents */
  delete?: InputMaybe<Array<ContactFormParentWhereUniqueInput>>;
  /** Update multiple ContactFormParent component instances */
  update?: InputMaybe<Array<ContactFormParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactFormParent component instances */
  upsert?: InputMaybe<Array<ContactFormParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactFormParentUpdateManyWithNestedWhereInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateManyWithNestedWhereInput>;
};

export type ContactFormParentUpdateOneInlineInput = {
  /** Create and connect one ContactFormParent document */
  create?: InputMaybe<ContactFormParentCreateInput>;
  /** Delete currently connected ContactFormParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactFormParent document */
  update?: InputMaybe<ContactFormParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactFormParent document */
  upsert?: InputMaybe<ContactFormParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormParentUpdateWithNestedWhereUniqueAndPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ContactFormParentUpdateWithNestedWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueInput>;
};

export type ContactFormParentUpsertWithNestedWhereUniqueAndPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ContactFormParentUpsertWithNestedWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormParentWhereInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereInput>;
};

export type ContactFormParentWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereUniqueInput>;
};

export type ContactFormUpdateInput = {
  contactFormDescription?: InputMaybe<Scalars['RichTextAST']>;
  contactFormTitle?: InputMaybe<Scalars['String']>;
  cssClass?: InputMaybe<Scalars['String']>;
  hubspotFormId?: InputMaybe<Scalars['String']>;
  hubspotPortalId?: InputMaybe<Scalars['String']>;
  jotformUrl?: InputMaybe<Scalars['String']>;
  netlifyContactForm?: InputMaybe<Scalars['Boolean']>;
  netlifyFormFields?: InputMaybe<Array<NetlifyFormFields>>;
};

export type ContactFormUpdateManyInlineInput = {
  /** Create and connect multiple ContactForm component instances */
  create?: InputMaybe<Array<ContactFormCreateWithPositionInput>>;
  /** Delete multiple ContactForm documents */
  delete?: InputMaybe<Array<ContactFormWhereUniqueInput>>;
  /** Update multiple ContactForm component instances */
  update?: InputMaybe<Array<ContactFormUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactForm component instances */
  upsert?: InputMaybe<Array<ContactFormUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactFormUpdateManyInput = {
  contactFormDescription?: InputMaybe<Scalars['RichTextAST']>;
  contactFormTitle?: InputMaybe<Scalars['String']>;
  cssClass?: InputMaybe<Scalars['String']>;
  hubspotFormId?: InputMaybe<Scalars['String']>;
  hubspotPortalId?: InputMaybe<Scalars['String']>;
  jotformUrl?: InputMaybe<Scalars['String']>;
  netlifyContactForm?: InputMaybe<Scalars['Boolean']>;
  netlifyFormFields?: InputMaybe<Array<NetlifyFormFields>>;
};

export type ContactFormUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactFormUpdateManyInput;
  /** Document search */
  where: ContactFormWhereInput;
};

export type ContactFormUpdateOneInlineInput = {
  /** Create and connect one ContactForm document */
  create?: InputMaybe<ContactFormCreateInput>;
  /** Delete currently connected ContactForm document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactForm document */
  update?: InputMaybe<ContactFormUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactForm document */
  upsert?: InputMaybe<ContactFormUpsertWithNestedWhereUniqueInput>;
};

export type ContactFormUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactFormUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactFormWhereUniqueInput;
};

export type ContactFormUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactFormUpdateInput;
  /** Unique document search */
  where: ContactFormWhereUniqueInput;
};

export type ContactFormUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactFormCreateInput;
  /** Update document if it exists */
  update: ContactFormUpdateInput;
};

export type ContactFormUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactFormUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactFormWhereUniqueInput;
};

export type ContactFormUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactFormUpsertInput;
  /** Unique document search */
  where: ContactFormWhereUniqueInput;
};

/** Identifies documents */
export type ContactFormWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactFormWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactFormTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactFormTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactFormTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactFormTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactFormTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactFormTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactFormTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactFormTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactFormTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactFormTitle_starts_with?: InputMaybe<Scalars['String']>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  hubspotFormId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hubspotFormId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hubspotFormId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hubspotFormId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  hubspotFormId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hubspotFormId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hubspotFormId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hubspotFormId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  hubspotFormId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hubspotFormId_starts_with?: InputMaybe<Scalars['String']>;
  hubspotPortalId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hubspotPortalId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hubspotPortalId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hubspotPortalId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  hubspotPortalId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hubspotPortalId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hubspotPortalId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hubspotPortalId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  hubspotPortalId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hubspotPortalId_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  jotformUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  jotformUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  jotformUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  jotformUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  jotformUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  jotformUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  jotformUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  jotformUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  jotformUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  jotformUrl_starts_with?: InputMaybe<Scalars['String']>;
  netlifyContactForm?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  netlifyContactForm_not?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  netlifyFormFields?: InputMaybe<Array<NetlifyFormFields>>;
  /** Matches if the field array contains *all* items provided to the filter */
  netlifyFormFields_contains_all?: InputMaybe<Array<NetlifyFormFields>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  netlifyFormFields_contains_none?: InputMaybe<Array<NetlifyFormFields>>;
  /** Matches if the field array contains at least one item provided to the filter */
  netlifyFormFields_contains_some?: InputMaybe<Array<NetlifyFormFields>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  netlifyFormFields_not?: InputMaybe<Array<NetlifyFormFields>>;
};

/** References ContactForm record uniquely */
export type ContactFormWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ContactList = {
  __typename?: 'ContactList';
  contactAddress?: Maybe<Scalars['String']>;
  contactAvatar?: Maybe<Asset>;
  contactEmail?: Maybe<Scalars['String']>;
  contactGoogleAddressLink?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};


export type ContactListContactAvatarArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContactListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactListWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactListConnection = {
  __typename?: 'ContactListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactListCreateInput = {
  contactAddress?: InputMaybe<Scalars['String']>;
  contactAvatar?: InputMaybe<AssetCreateOneInlineInput>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactGoogleAddressLink?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  contactTitle?: InputMaybe<Scalars['String']>;
};

export type ContactListCreateManyInlineInput = {
  /** Create and connect multiple existing ContactList documents */
  create?: InputMaybe<Array<ContactListCreateInput>>;
};

export type ContactListCreateOneInlineInput = {
  /** Create and connect one ContactList document */
  create?: InputMaybe<ContactListCreateInput>;
};

export type ContactListCreateWithPositionInput = {
  /** Document to create */
  data: ContactListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactListEdge = {
  __typename?: 'ContactListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ContactList;
};

/** Identifies documents */
export type ContactListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactAddress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactAddress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactAddress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactAddress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactAddress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactAddress_starts_with?: InputMaybe<Scalars['String']>;
  contactAvatar?: InputMaybe<AssetWhereInput>;
  contactEmail?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactEmail_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactEmail_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: InputMaybe<Scalars['String']>;
  contactGoogleAddressLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactGoogleAddressLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactGoogleAddressLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactGoogleAddressLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactGoogleAddressLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactGoogleAddressLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactGoogleAddressLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactGoogleAddressLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactGoogleAddressLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactGoogleAddressLink_starts_with?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactName_starts_with?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactPhone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactPhone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactPhone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactPhone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhone_starts_with?: InputMaybe<Scalars['String']>;
  contactTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactTitle_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum ContactListOrderByInput {
  ContactAddressAsc = 'contactAddress_ASC',
  ContactAddressDesc = 'contactAddress_DESC',
  ContactEmailAsc = 'contactEmail_ASC',
  ContactEmailDesc = 'contactEmail_DESC',
  ContactGoogleAddressLinkAsc = 'contactGoogleAddressLink_ASC',
  ContactGoogleAddressLinkDesc = 'contactGoogleAddressLink_DESC',
  ContactNameAsc = 'contactName_ASC',
  ContactNameDesc = 'contactName_DESC',
  ContactPhoneAsc = 'contactPhone_ASC',
  ContactPhoneDesc = 'contactPhone_DESC',
  ContactTitleAsc = 'contactTitle_ASC',
  ContactTitleDesc = 'contactTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ContactListParent = Profile;

export type ContactListParentConnectInput = {
  Profile?: InputMaybe<ProfileConnectInput>;
};

export type ContactListParentCreateInput = {
  Profile?: InputMaybe<ProfileCreateInput>;
};

export type ContactListParentCreateManyInlineInput = {
  /** Connect multiple existing ContactListParent documents */
  connect?: InputMaybe<Array<ContactListParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContactListParent documents */
  create?: InputMaybe<Array<ContactListParentCreateInput>>;
};

export type ContactListParentCreateOneInlineInput = {
  /** Connect one existing ContactListParent document */
  connect?: InputMaybe<ContactListParentWhereUniqueInput>;
  /** Create and connect one ContactListParent document */
  create?: InputMaybe<ContactListParentCreateInput>;
};

export type ContactListParentUpdateInput = {
  Profile?: InputMaybe<ProfileUpdateInput>;
};

export type ContactListParentUpdateManyInlineInput = {
  /** Connect multiple existing ContactListParent documents */
  connect?: InputMaybe<Array<ContactListParentConnectInput>>;
  /** Create and connect multiple ContactListParent documents */
  create?: InputMaybe<Array<ContactListParentCreateInput>>;
  /** Delete multiple ContactListParent documents */
  delete?: InputMaybe<Array<ContactListParentWhereUniqueInput>>;
  /** Disconnect multiple ContactListParent documents */
  disconnect?: InputMaybe<Array<ContactListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContactListParent documents */
  set?: InputMaybe<Array<ContactListParentWhereUniqueInput>>;
  /** Update multiple ContactListParent documents */
  update?: InputMaybe<Array<ContactListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactListParent documents */
  upsert?: InputMaybe<Array<ContactListParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContactListParentUpdateManyWithNestedWhereInput = {
  Profile?: InputMaybe<ProfileUpdateManyWithNestedWhereInput>;
};

export type ContactListParentUpdateOneInlineInput = {
  /** Connect existing ContactListParent document */
  connect?: InputMaybe<ContactListParentWhereUniqueInput>;
  /** Create and connect one ContactListParent document */
  create?: InputMaybe<ContactListParentCreateInput>;
  /** Delete currently connected ContactListParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ContactListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactListParent document */
  update?: InputMaybe<ContactListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactListParent document */
  upsert?: InputMaybe<ContactListParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactListParentUpdateWithNestedWhereUniqueInput = {
  Profile?: InputMaybe<ProfileUpdateWithNestedWhereUniqueInput>;
};

export type ContactListParentUpsertWithNestedWhereUniqueInput = {
  Profile?: InputMaybe<ProfileUpsertWithNestedWhereUniqueInput>;
};

export type ContactListParentWhereInput = {
  Profile?: InputMaybe<ProfileWhereInput>;
};

export type ContactListParentWhereUniqueInput = {
  Profile?: InputMaybe<ProfileWhereUniqueInput>;
};

export type ContactListUpdateInput = {
  contactAddress?: InputMaybe<Scalars['String']>;
  contactAvatar?: InputMaybe<AssetUpdateOneInlineInput>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactGoogleAddressLink?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  contactTitle?: InputMaybe<Scalars['String']>;
};

export type ContactListUpdateManyInlineInput = {
  /** Create and connect multiple ContactList component instances */
  create?: InputMaybe<Array<ContactListCreateWithPositionInput>>;
  /** Delete multiple ContactList documents */
  delete?: InputMaybe<Array<ContactListWhereUniqueInput>>;
  /** Update multiple ContactList component instances */
  update?: InputMaybe<Array<ContactListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactList component instances */
  upsert?: InputMaybe<Array<ContactListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactListUpdateManyInput = {
  contactAddress?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactGoogleAddressLink?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  contactTitle?: InputMaybe<Scalars['String']>;
};

export type ContactListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactListUpdateManyInput;
  /** Document search */
  where: ContactListWhereInput;
};

export type ContactListUpdateOneInlineInput = {
  /** Create and connect one ContactList document */
  create?: InputMaybe<ContactListCreateInput>;
  /** Delete currently connected ContactList document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactList document */
  update?: InputMaybe<ContactListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactList document */
  upsert?: InputMaybe<ContactListUpsertWithNestedWhereUniqueInput>;
};

export type ContactListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactListWhereUniqueInput;
};

export type ContactListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactListUpdateInput;
  /** Unique document search */
  where: ContactListWhereUniqueInput;
};

export type ContactListUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactListCreateInput;
  /** Update document if it exists */
  update: ContactListUpdateInput;
};

export type ContactListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactListWhereUniqueInput;
};

export type ContactListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactListUpsertInput;
  /** Unique document search */
  where: ContactListWhereUniqueInput;
};

/** Identifies documents */
export type ContactListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactAddress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactAddress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactAddress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactAddress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactAddress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactAddress_starts_with?: InputMaybe<Scalars['String']>;
  contactAvatar?: InputMaybe<AssetWhereInput>;
  contactEmail?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactEmail_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactEmail_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: InputMaybe<Scalars['String']>;
  contactGoogleAddressLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactGoogleAddressLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactGoogleAddressLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactGoogleAddressLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactGoogleAddressLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactGoogleAddressLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactGoogleAddressLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactGoogleAddressLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactGoogleAddressLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactGoogleAddressLink_starts_with?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactName_starts_with?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactPhone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactPhone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactPhone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactPhone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhone_starts_with?: InputMaybe<Scalars['String']>;
  contactTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactTitle_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References ContactList record uniquely */
export type ContactListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ContentAlign {
  Card = 'card',
  Center = 'center',
  Justify = 'justify',
  Left = 'left',
  Right = 'right'
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Event = Node & {
  __typename?: 'Event';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Event>;
  eventAddress?: Maybe<Scalars['String']>;
  eventAddressGoogleMapLink?: Maybe<Scalars['String']>;
  eventCityState?: Maybe<Scalars['String']>;
  eventDescription?: Maybe<RichText>;
  eventEndDateTime?: Maybe<Scalars['DateTime']>;
  eventFeatured?: Maybe<Scalars['Boolean']>;
  eventFlyer?: Maybe<Asset>;
  eventGallery: Array<Asset>;
  eventLinkButtonText?: Maybe<Scalars['String']>;
  eventShortDescription?: Maybe<Scalars['String']>;
  eventSlug?: Maybe<Scalars['String']>;
  eventStartDateTime?: Maybe<Scalars['DateTime']>;
  eventTicketLinkDestination?: Maybe<Scalars['String']>;
  eventTitle?: Maybe<Scalars['String']>;
  eventVenueName?: Maybe<Scalars['String']>;
  /** List of Event versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  videoBox: Array<VideoBox>;
};


export type EventCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type EventEventFlyerArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventEventGalleryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type EventHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type EventPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EventUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventVideoBoxArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<VideoBoxOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoBoxWhereInput>;
};

export type EventConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EventWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventConnection = {
  __typename?: 'EventConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventAddress?: InputMaybe<Scalars['String']>;
  eventAddressGoogleMapLink?: InputMaybe<Scalars['String']>;
  eventCityState?: InputMaybe<Scalars['String']>;
  eventDescription?: InputMaybe<Scalars['RichTextAST']>;
  eventEndDateTime?: InputMaybe<Scalars['DateTime']>;
  eventFeatured?: InputMaybe<Scalars['Boolean']>;
  eventFlyer?: InputMaybe<AssetCreateOneInlineInput>;
  eventGallery?: InputMaybe<AssetCreateManyInlineInput>;
  eventLinkButtonText?: InputMaybe<Scalars['String']>;
  eventShortDescription?: InputMaybe<Scalars['String']>;
  eventSlug?: InputMaybe<Scalars['String']>;
  eventStartDateTime?: InputMaybe<Scalars['DateTime']>;
  eventTicketLinkDestination?: InputMaybe<Scalars['String']>;
  eventTitle?: InputMaybe<Scalars['String']>;
  eventVenueName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoBox?: InputMaybe<VideoBoxCreateManyInlineInput>;
};

export type EventCreateManyInlineInput = {
  /** Connect multiple existing Event documents */
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  /** Create and connect multiple existing Event documents */
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventCreateOneInlineInput = {
  /** Connect one existing Event document */
  connect?: InputMaybe<EventWhereUniqueInput>;
  /** Create and connect one Event document */
  create?: InputMaybe<EventCreateInput>;
};

export enum EventDisplayType {
  Grid = 'Grid',
  None = 'None',
  Slider = 'Slider'
}

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Event;
};

/** Identifies documents */
export type EventManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EventWhereStageInput>;
  documentInStages_none?: InputMaybe<EventWhereStageInput>;
  documentInStages_some?: InputMaybe<EventWhereStageInput>;
  eventAddress?: InputMaybe<Scalars['String']>;
  eventAddressGoogleMapLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventAddressGoogleMapLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventAddressGoogleMapLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventAddressGoogleMapLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventAddressGoogleMapLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventAddressGoogleMapLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventAddressGoogleMapLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventAddressGoogleMapLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventAddressGoogleMapLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventAddressGoogleMapLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventAddress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventAddress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventAddress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventAddress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventAddress_starts_with?: InputMaybe<Scalars['String']>;
  eventCityState?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventCityState_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventCityState_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventCityState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventCityState_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventCityState_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventCityState_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventCityState_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventCityState_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventCityState_starts_with?: InputMaybe<Scalars['String']>;
  eventEndDateTime?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  eventEndDateTime_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  eventEndDateTime_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  eventEndDateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  eventEndDateTime_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  eventEndDateTime_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  eventEndDateTime_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  eventEndDateTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  eventFeatured?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  eventFeatured_not?: InputMaybe<Scalars['Boolean']>;
  eventFlyer?: InputMaybe<AssetWhereInput>;
  eventGallery_every?: InputMaybe<AssetWhereInput>;
  eventGallery_none?: InputMaybe<AssetWhereInput>;
  eventGallery_some?: InputMaybe<AssetWhereInput>;
  eventLinkButtonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventLinkButtonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventLinkButtonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventLinkButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventLinkButtonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventLinkButtonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventLinkButtonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventLinkButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventLinkButtonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventLinkButtonText_starts_with?: InputMaybe<Scalars['String']>;
  eventShortDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventShortDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventShortDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventShortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventShortDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventShortDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventShortDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventShortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventShortDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventShortDescription_starts_with?: InputMaybe<Scalars['String']>;
  eventSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventSlug_starts_with?: InputMaybe<Scalars['String']>;
  eventStartDateTime?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  eventStartDateTime_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  eventStartDateTime_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  eventStartDateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  eventStartDateTime_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  eventStartDateTime_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  eventStartDateTime_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  eventStartDateTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  eventTicketLinkDestination?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventTicketLinkDestination_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventTicketLinkDestination_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventTicketLinkDestination_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventTicketLinkDestination_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventTicketLinkDestination_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventTicketLinkDestination_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventTicketLinkDestination_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventTicketLinkDestination_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventTicketLinkDestination_starts_with?: InputMaybe<Scalars['String']>;
  eventTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventTitle_starts_with?: InputMaybe<Scalars['String']>;
  eventVenueName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventVenueName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventVenueName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventVenueName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventVenueName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventVenueName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventVenueName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventVenueName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventVenueName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventVenueName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
};

export enum EventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EventAddressGoogleMapLinkAsc = 'eventAddressGoogleMapLink_ASC',
  EventAddressGoogleMapLinkDesc = 'eventAddressGoogleMapLink_DESC',
  EventAddressAsc = 'eventAddress_ASC',
  EventAddressDesc = 'eventAddress_DESC',
  EventCityStateAsc = 'eventCityState_ASC',
  EventCityStateDesc = 'eventCityState_DESC',
  EventEndDateTimeAsc = 'eventEndDateTime_ASC',
  EventEndDateTimeDesc = 'eventEndDateTime_DESC',
  EventFeaturedAsc = 'eventFeatured_ASC',
  EventFeaturedDesc = 'eventFeatured_DESC',
  EventLinkButtonTextAsc = 'eventLinkButtonText_ASC',
  EventLinkButtonTextDesc = 'eventLinkButtonText_DESC',
  EventShortDescriptionAsc = 'eventShortDescription_ASC',
  EventShortDescriptionDesc = 'eventShortDescription_DESC',
  EventSlugAsc = 'eventSlug_ASC',
  EventSlugDesc = 'eventSlug_DESC',
  EventStartDateTimeAsc = 'eventStartDateTime_ASC',
  EventStartDateTimeDesc = 'eventStartDateTime_DESC',
  EventTicketLinkDestinationAsc = 'eventTicketLinkDestination_ASC',
  EventTicketLinkDestinationDesc = 'eventTicketLinkDestination_DESC',
  EventTitleAsc = 'eventTitle_ASC',
  EventTitleDesc = 'eventTitle_DESC',
  EventVenueNameAsc = 'eventVenueName_ASC',
  EventVenueNameDesc = 'eventVenueName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventUpdateInput = {
  eventAddress?: InputMaybe<Scalars['String']>;
  eventAddressGoogleMapLink?: InputMaybe<Scalars['String']>;
  eventCityState?: InputMaybe<Scalars['String']>;
  eventDescription?: InputMaybe<Scalars['RichTextAST']>;
  eventEndDateTime?: InputMaybe<Scalars['DateTime']>;
  eventFeatured?: InputMaybe<Scalars['Boolean']>;
  eventFlyer?: InputMaybe<AssetUpdateOneInlineInput>;
  eventGallery?: InputMaybe<AssetUpdateManyInlineInput>;
  eventLinkButtonText?: InputMaybe<Scalars['String']>;
  eventShortDescription?: InputMaybe<Scalars['String']>;
  eventSlug?: InputMaybe<Scalars['String']>;
  eventStartDateTime?: InputMaybe<Scalars['DateTime']>;
  eventTicketLinkDestination?: InputMaybe<Scalars['String']>;
  eventTitle?: InputMaybe<Scalars['String']>;
  eventVenueName?: InputMaybe<Scalars['String']>;
  videoBox?: InputMaybe<VideoBoxUpdateManyInlineInput>;
};

export type EventUpdateManyInlineInput = {
  /** Connect multiple existing Event documents */
  connect?: InputMaybe<Array<EventConnectInput>>;
  /** Create and connect multiple Event documents */
  create?: InputMaybe<Array<EventCreateInput>>;
  /** Delete multiple Event documents */
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  /** Disconnect multiple Event documents */
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Event documents */
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  /** Update multiple Event documents */
  update?: InputMaybe<Array<EventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Event documents */
  upsert?: InputMaybe<Array<EventUpsertWithNestedWhereUniqueInput>>;
};

export type EventUpdateManyInput = {
  eventAddress?: InputMaybe<Scalars['String']>;
  eventAddressGoogleMapLink?: InputMaybe<Scalars['String']>;
  eventCityState?: InputMaybe<Scalars['String']>;
  eventDescription?: InputMaybe<Scalars['RichTextAST']>;
  eventEndDateTime?: InputMaybe<Scalars['DateTime']>;
  eventFeatured?: InputMaybe<Scalars['Boolean']>;
  eventLinkButtonText?: InputMaybe<Scalars['String']>;
  eventShortDescription?: InputMaybe<Scalars['String']>;
  eventStartDateTime?: InputMaybe<Scalars['DateTime']>;
  eventTicketLinkDestination?: InputMaybe<Scalars['String']>;
  eventTitle?: InputMaybe<Scalars['String']>;
  eventVenueName?: InputMaybe<Scalars['String']>;
};

export type EventUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventUpdateManyInput;
  /** Document search */
  where: EventWhereInput;
};

export type EventUpdateOneInlineInput = {
  /** Connect existing Event document */
  connect?: InputMaybe<EventWhereUniqueInput>;
  /** Create and connect one Event document */
  create?: InputMaybe<EventCreateInput>;
  /** Delete currently connected Event document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Event document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Event document */
  update?: InputMaybe<EventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Event document */
  upsert?: InputMaybe<EventUpsertWithNestedWhereUniqueInput>;
};

export type EventUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventUpdateInput;
  /** Unique document search */
  where: EventWhereUniqueInput;
};

export type EventUpsertInput = {
  /** Create document if it didn't exist */
  create: EventCreateInput;
  /** Update document if it exists */
  update: EventUpdateInput;
};

export type EventUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventUpsertInput;
  /** Unique document search */
  where: EventWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EventWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type EventWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EventWhereStageInput>;
  documentInStages_none?: InputMaybe<EventWhereStageInput>;
  documentInStages_some?: InputMaybe<EventWhereStageInput>;
  eventAddress?: InputMaybe<Scalars['String']>;
  eventAddressGoogleMapLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventAddressGoogleMapLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventAddressGoogleMapLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventAddressGoogleMapLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventAddressGoogleMapLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventAddressGoogleMapLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventAddressGoogleMapLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventAddressGoogleMapLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventAddressGoogleMapLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventAddressGoogleMapLink_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventAddress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventAddress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventAddress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventAddress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventAddress_starts_with?: InputMaybe<Scalars['String']>;
  eventCityState?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventCityState_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventCityState_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventCityState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventCityState_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventCityState_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventCityState_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventCityState_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventCityState_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventCityState_starts_with?: InputMaybe<Scalars['String']>;
  eventEndDateTime?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  eventEndDateTime_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  eventEndDateTime_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  eventEndDateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  eventEndDateTime_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  eventEndDateTime_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  eventEndDateTime_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  eventEndDateTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  eventFeatured?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  eventFeatured_not?: InputMaybe<Scalars['Boolean']>;
  eventFlyer?: InputMaybe<AssetWhereInput>;
  eventGallery_every?: InputMaybe<AssetWhereInput>;
  eventGallery_none?: InputMaybe<AssetWhereInput>;
  eventGallery_some?: InputMaybe<AssetWhereInput>;
  eventLinkButtonText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventLinkButtonText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventLinkButtonText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventLinkButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventLinkButtonText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventLinkButtonText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventLinkButtonText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventLinkButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventLinkButtonText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventLinkButtonText_starts_with?: InputMaybe<Scalars['String']>;
  eventShortDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventShortDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventShortDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventShortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventShortDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventShortDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventShortDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventShortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventShortDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventShortDescription_starts_with?: InputMaybe<Scalars['String']>;
  eventSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventSlug_starts_with?: InputMaybe<Scalars['String']>;
  eventStartDateTime?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  eventStartDateTime_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  eventStartDateTime_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  eventStartDateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  eventStartDateTime_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  eventStartDateTime_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  eventStartDateTime_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  eventStartDateTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  eventTicketLinkDestination?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventTicketLinkDestination_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventTicketLinkDestination_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventTicketLinkDestination_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventTicketLinkDestination_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventTicketLinkDestination_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventTicketLinkDestination_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventTicketLinkDestination_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventTicketLinkDestination_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventTicketLinkDestination_starts_with?: InputMaybe<Scalars['String']>;
  eventTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventTitle_starts_with?: InputMaybe<Scalars['String']>;
  eventVenueName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  eventVenueName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  eventVenueName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  eventVenueName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventVenueName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  eventVenueName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  eventVenueName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  eventVenueName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  eventVenueName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  eventVenueName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EventWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EventWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Event record uniquely */
export type EventWhereUniqueInput = {
  eventSlug?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export enum FontFamily {
  Montserrat = 'Montserrat',
  OpenSans = 'Open_Sans',
  TimesNewRoman = 'Times_New_Roman',
  Verdana = 'Verdana'
}

export type FooterColumn = {
  __typename?: 'FooterColumn';
  footerColumnCssWrapper?: Maybe<Scalars['String']>;
  footerIframe?: Maybe<Scalars['String']>;
  footerImage?: Maybe<Asset>;
  footerLink: Array<NavigationItem>;
  footerText?: Maybe<RichText>;
  footerTitle?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  recentBlogByCategory?: Maybe<BlogTags>;
  /** System stage field */
  stage: Stage;
  wideColumn?: Maybe<Scalars['Boolean']>;
};


export type FooterColumnFooterImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FooterColumnFooterLinkArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemWhereInput>;
};

export type FooterColumnConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FooterColumnWhereUniqueInput;
};

/** A connection to a list of items. */
export type FooterColumnConnection = {
  __typename?: 'FooterColumnConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FooterColumnEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FooterColumnCreateInput = {
  footerColumnCssWrapper?: InputMaybe<Scalars['String']>;
  footerIframe?: InputMaybe<Scalars['String']>;
  footerImage?: InputMaybe<AssetCreateOneInlineInput>;
  footerLink?: InputMaybe<NavigationItemCreateManyInlineInput>;
  footerText?: InputMaybe<Scalars['RichTextAST']>;
  footerTitle?: InputMaybe<Scalars['String']>;
  recentBlogByCategory?: InputMaybe<BlogTags>;
  wideColumn?: InputMaybe<Scalars['Boolean']>;
};

export type FooterColumnCreateManyInlineInput = {
  /** Create and connect multiple existing FooterColumn documents */
  create?: InputMaybe<Array<FooterColumnCreateInput>>;
};

export type FooterColumnCreateOneInlineInput = {
  /** Create and connect one FooterColumn document */
  create?: InputMaybe<FooterColumnCreateInput>;
};

export type FooterColumnCreateWithPositionInput = {
  /** Document to create */
  data: FooterColumnCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FooterColumnEdge = {
  __typename?: 'FooterColumnEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FooterColumn;
};

/** Identifies documents */
export type FooterColumnManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterColumnWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterColumnWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterColumnWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  footerColumnCssWrapper?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  footerColumnCssWrapper_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  footerColumnCssWrapper_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  footerColumnCssWrapper_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  footerColumnCssWrapper_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  footerColumnCssWrapper_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  footerColumnCssWrapper_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  footerColumnCssWrapper_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  footerColumnCssWrapper_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  footerColumnCssWrapper_starts_with?: InputMaybe<Scalars['String']>;
  footerIframe?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  footerIframe_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  footerIframe_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  footerIframe_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  footerIframe_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  footerIframe_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  footerIframe_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  footerIframe_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  footerIframe_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  footerIframe_starts_with?: InputMaybe<Scalars['String']>;
  footerImage?: InputMaybe<AssetWhereInput>;
  footerLink_every?: InputMaybe<NavigationItemWhereInput>;
  footerLink_none?: InputMaybe<NavigationItemWhereInput>;
  footerLink_some?: InputMaybe<NavigationItemWhereInput>;
  footerTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  footerTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  footerTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  footerTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  footerTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  footerTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  footerTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  footerTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  footerTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  footerTitle_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  recentBlogByCategory?: InputMaybe<BlogTags>;
  /** All values that are contained in given list. */
  recentBlogByCategory_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  /** Any other value that exists and is not equal to the given value. */
  recentBlogByCategory_not?: InputMaybe<BlogTags>;
  /** All values that are not contained in given list. */
  recentBlogByCategory_not_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  wideColumn?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  wideColumn_not?: InputMaybe<Scalars['Boolean']>;
};

export enum FooterColumnOrderByInput {
  FooterColumnCssWrapperAsc = 'footerColumnCssWrapper_ASC',
  FooterColumnCssWrapperDesc = 'footerColumnCssWrapper_DESC',
  FooterIframeAsc = 'footerIframe_ASC',
  FooterIframeDesc = 'footerIframe_DESC',
  FooterTitleAsc = 'footerTitle_ASC',
  FooterTitleDesc = 'footerTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RecentBlogByCategoryAsc = 'recentBlogByCategory_ASC',
  RecentBlogByCategoryDesc = 'recentBlogByCategory_DESC',
  WideColumnAsc = 'wideColumn_ASC',
  WideColumnDesc = 'wideColumn_DESC'
}

export type FooterColumnParent = Navigation;

export type FooterColumnParentConnectInput = {
  Navigation?: InputMaybe<NavigationConnectInput>;
};

export type FooterColumnParentCreateInput = {
  Navigation?: InputMaybe<NavigationCreateInput>;
};

export type FooterColumnParentCreateManyInlineInput = {
  /** Connect multiple existing FooterColumnParent documents */
  connect?: InputMaybe<Array<FooterColumnParentWhereUniqueInput>>;
  /** Create and connect multiple existing FooterColumnParent documents */
  create?: InputMaybe<Array<FooterColumnParentCreateInput>>;
};

export type FooterColumnParentCreateOneInlineInput = {
  /** Connect one existing FooterColumnParent document */
  connect?: InputMaybe<FooterColumnParentWhereUniqueInput>;
  /** Create and connect one FooterColumnParent document */
  create?: InputMaybe<FooterColumnParentCreateInput>;
};

export type FooterColumnParentUpdateInput = {
  Navigation?: InputMaybe<NavigationUpdateInput>;
};

export type FooterColumnParentUpdateManyInlineInput = {
  /** Connect multiple existing FooterColumnParent documents */
  connect?: InputMaybe<Array<FooterColumnParentConnectInput>>;
  /** Create and connect multiple FooterColumnParent documents */
  create?: InputMaybe<Array<FooterColumnParentCreateInput>>;
  /** Delete multiple FooterColumnParent documents */
  delete?: InputMaybe<Array<FooterColumnParentWhereUniqueInput>>;
  /** Disconnect multiple FooterColumnParent documents */
  disconnect?: InputMaybe<Array<FooterColumnParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FooterColumnParent documents */
  set?: InputMaybe<Array<FooterColumnParentWhereUniqueInput>>;
  /** Update multiple FooterColumnParent documents */
  update?: InputMaybe<Array<FooterColumnParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FooterColumnParent documents */
  upsert?: InputMaybe<Array<FooterColumnParentUpsertWithNestedWhereUniqueInput>>;
};

export type FooterColumnParentUpdateManyWithNestedWhereInput = {
  Navigation?: InputMaybe<NavigationUpdateManyWithNestedWhereInput>;
};

export type FooterColumnParentUpdateOneInlineInput = {
  /** Connect existing FooterColumnParent document */
  connect?: InputMaybe<FooterColumnParentWhereUniqueInput>;
  /** Create and connect one FooterColumnParent document */
  create?: InputMaybe<FooterColumnParentCreateInput>;
  /** Delete currently connected FooterColumnParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FooterColumnParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FooterColumnParent document */
  update?: InputMaybe<FooterColumnParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FooterColumnParent document */
  upsert?: InputMaybe<FooterColumnParentUpsertWithNestedWhereUniqueInput>;
};

export type FooterColumnParentUpdateWithNestedWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
};

export type FooterColumnParentUpsertWithNestedWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type FooterColumnParentWhereInput = {
  Navigation?: InputMaybe<NavigationWhereInput>;
};

export type FooterColumnParentWhereUniqueInput = {
  Navigation?: InputMaybe<NavigationWhereUniqueInput>;
};

export type FooterColumnUpdateInput = {
  footerColumnCssWrapper?: InputMaybe<Scalars['String']>;
  footerIframe?: InputMaybe<Scalars['String']>;
  footerImage?: InputMaybe<AssetUpdateOneInlineInput>;
  footerLink?: InputMaybe<NavigationItemUpdateManyInlineInput>;
  footerText?: InputMaybe<Scalars['RichTextAST']>;
  footerTitle?: InputMaybe<Scalars['String']>;
  recentBlogByCategory?: InputMaybe<BlogTags>;
  wideColumn?: InputMaybe<Scalars['Boolean']>;
};

export type FooterColumnUpdateManyInlineInput = {
  /** Create and connect multiple FooterColumn component instances */
  create?: InputMaybe<Array<FooterColumnCreateWithPositionInput>>;
  /** Delete multiple FooterColumn documents */
  delete?: InputMaybe<Array<FooterColumnWhereUniqueInput>>;
  /** Update multiple FooterColumn component instances */
  update?: InputMaybe<Array<FooterColumnUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FooterColumn component instances */
  upsert?: InputMaybe<Array<FooterColumnUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FooterColumnUpdateManyInput = {
  footerColumnCssWrapper?: InputMaybe<Scalars['String']>;
  footerIframe?: InputMaybe<Scalars['String']>;
  footerText?: InputMaybe<Scalars['RichTextAST']>;
  footerTitle?: InputMaybe<Scalars['String']>;
  recentBlogByCategory?: InputMaybe<BlogTags>;
  wideColumn?: InputMaybe<Scalars['Boolean']>;
};

export type FooterColumnUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FooterColumnUpdateManyInput;
  /** Document search */
  where: FooterColumnWhereInput;
};

export type FooterColumnUpdateOneInlineInput = {
  /** Create and connect one FooterColumn document */
  create?: InputMaybe<FooterColumnCreateInput>;
  /** Delete currently connected FooterColumn document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FooterColumn document */
  update?: InputMaybe<FooterColumnUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FooterColumn document */
  upsert?: InputMaybe<FooterColumnUpsertWithNestedWhereUniqueInput>;
};

export type FooterColumnUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FooterColumnUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FooterColumnWhereUniqueInput;
};

export type FooterColumnUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FooterColumnUpdateInput;
  /** Unique document search */
  where: FooterColumnWhereUniqueInput;
};

export type FooterColumnUpsertInput = {
  /** Create document if it didn't exist */
  create: FooterColumnCreateInput;
  /** Update document if it exists */
  update: FooterColumnUpdateInput;
};

export type FooterColumnUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FooterColumnUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FooterColumnWhereUniqueInput;
};

export type FooterColumnUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FooterColumnUpsertInput;
  /** Unique document search */
  where: FooterColumnWhereUniqueInput;
};

/** Identifies documents */
export type FooterColumnWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterColumnWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterColumnWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterColumnWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  footerColumnCssWrapper?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  footerColumnCssWrapper_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  footerColumnCssWrapper_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  footerColumnCssWrapper_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  footerColumnCssWrapper_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  footerColumnCssWrapper_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  footerColumnCssWrapper_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  footerColumnCssWrapper_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  footerColumnCssWrapper_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  footerColumnCssWrapper_starts_with?: InputMaybe<Scalars['String']>;
  footerIframe?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  footerIframe_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  footerIframe_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  footerIframe_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  footerIframe_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  footerIframe_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  footerIframe_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  footerIframe_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  footerIframe_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  footerIframe_starts_with?: InputMaybe<Scalars['String']>;
  footerImage?: InputMaybe<AssetWhereInput>;
  footerLink_every?: InputMaybe<NavigationItemWhereInput>;
  footerLink_none?: InputMaybe<NavigationItemWhereInput>;
  footerLink_some?: InputMaybe<NavigationItemWhereInput>;
  footerTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  footerTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  footerTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  footerTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  footerTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  footerTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  footerTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  footerTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  footerTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  footerTitle_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  recentBlogByCategory?: InputMaybe<BlogTags>;
  /** All values that are contained in given list. */
  recentBlogByCategory_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  /** Any other value that exists and is not equal to the given value. */
  recentBlogByCategory_not?: InputMaybe<BlogTags>;
  /** All values that are not contained in given list. */
  recentBlogByCategory_not_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  wideColumn?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  wideColumn_not?: InputMaybe<Scalars['Boolean']>;
};

/** References FooterColumn record uniquely */
export type FooterColumnWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum GalleryLayout {
  Grid = 'grid',
  Slider = 'slider'
}

export type GridBox = {
  __typename?: 'GridBox';
  boxDescription?: Maybe<RichText>;
  boxImage?: Maybe<Asset>;
  boxLink?: Maybe<Scalars['String']>;
  boxTitle?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};


export type GridBoxBoxImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type GridBoxConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GridBoxWhereUniqueInput;
};

/** A connection to a list of items. */
export type GridBoxConnection = {
  __typename?: 'GridBoxConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GridBoxEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GridBoxCreateInput = {
  boxDescription?: InputMaybe<Scalars['RichTextAST']>;
  boxImage?: InputMaybe<AssetCreateOneInlineInput>;
  boxLink?: InputMaybe<Scalars['String']>;
  boxTitle?: InputMaybe<Scalars['String']>;
};

export type GridBoxCreateManyInlineInput = {
  /** Create and connect multiple existing GridBox documents */
  create?: InputMaybe<Array<GridBoxCreateInput>>;
};

export type GridBoxCreateOneInlineInput = {
  /** Create and connect one GridBox document */
  create?: InputMaybe<GridBoxCreateInput>;
};

export type GridBoxCreateWithPositionInput = {
  /** Document to create */
  data: GridBoxCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type GridBoxEdge = {
  __typename?: 'GridBoxEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GridBox;
};

/** Identifies documents */
export type GridBoxManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GridBoxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GridBoxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GridBoxWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  boxImage?: InputMaybe<AssetWhereInput>;
  boxLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  boxLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  boxLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  boxLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxLink_starts_with?: InputMaybe<Scalars['String']>;
  boxTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  boxTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  boxTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  boxTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxTitle_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum GridBoxOrderByInput {
  BoxLinkAsc = 'boxLink_ASC',
  BoxLinkDesc = 'boxLink_DESC',
  BoxTitleAsc = 'boxTitle_ASC',
  BoxTitleDesc = 'boxTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type GridBoxParent = LayoutBlockColumn;

export type GridBoxParentConnectInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnConnectInput>;
};

export type GridBoxParentCreateInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateInput>;
};

export type GridBoxParentCreateManyInlineInput = {
  /** Create and connect multiple existing GridBoxParent documents */
  create?: InputMaybe<Array<GridBoxParentCreateInput>>;
};

export type GridBoxParentCreateOneInlineInput = {
  /** Create and connect one GridBoxParent document */
  create?: InputMaybe<GridBoxParentCreateInput>;
};

export type GridBoxParentCreateWithPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateWithPositionInput>;
};

export type GridBoxParentUpdateInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateInput>;
};

export type GridBoxParentUpdateManyInlineInput = {
  /** Create and connect multiple GridBoxParent component instances */
  create?: InputMaybe<Array<GridBoxParentCreateWithPositionInput>>;
  /** Delete multiple GridBoxParent documents */
  delete?: InputMaybe<Array<GridBoxParentWhereUniqueInput>>;
  /** Update multiple GridBoxParent component instances */
  update?: InputMaybe<Array<GridBoxParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple GridBoxParent component instances */
  upsert?: InputMaybe<Array<GridBoxParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type GridBoxParentUpdateManyWithNestedWhereInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateManyWithNestedWhereInput>;
};

export type GridBoxParentUpdateOneInlineInput = {
  /** Create and connect one GridBoxParent document */
  create?: InputMaybe<GridBoxParentCreateInput>;
  /** Delete currently connected GridBoxParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single GridBoxParent document */
  update?: InputMaybe<GridBoxParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GridBoxParent document */
  upsert?: InputMaybe<GridBoxParentUpsertWithNestedWhereUniqueInput>;
};

export type GridBoxParentUpdateWithNestedWhereUniqueAndPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type GridBoxParentUpdateWithNestedWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueInput>;
};

export type GridBoxParentUpsertWithNestedWhereUniqueAndPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type GridBoxParentUpsertWithNestedWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueInput>;
};

export type GridBoxParentWhereInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereInput>;
};

export type GridBoxParentWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereUniqueInput>;
};

export type GridBoxUpdateInput = {
  boxDescription?: InputMaybe<Scalars['RichTextAST']>;
  boxImage?: InputMaybe<AssetUpdateOneInlineInput>;
  boxLink?: InputMaybe<Scalars['String']>;
  boxTitle?: InputMaybe<Scalars['String']>;
};

export type GridBoxUpdateManyInlineInput = {
  /** Create and connect multiple GridBox component instances */
  create?: InputMaybe<Array<GridBoxCreateWithPositionInput>>;
  /** Delete multiple GridBox documents */
  delete?: InputMaybe<Array<GridBoxWhereUniqueInput>>;
  /** Update multiple GridBox component instances */
  update?: InputMaybe<Array<GridBoxUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple GridBox component instances */
  upsert?: InputMaybe<Array<GridBoxUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type GridBoxUpdateManyInput = {
  boxDescription?: InputMaybe<Scalars['RichTextAST']>;
  boxLink?: InputMaybe<Scalars['String']>;
  boxTitle?: InputMaybe<Scalars['String']>;
};

export type GridBoxUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GridBoxUpdateManyInput;
  /** Document search */
  where: GridBoxWhereInput;
};

export type GridBoxUpdateOneInlineInput = {
  /** Create and connect one GridBox document */
  create?: InputMaybe<GridBoxCreateInput>;
  /** Delete currently connected GridBox document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single GridBox document */
  update?: InputMaybe<GridBoxUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GridBox document */
  upsert?: InputMaybe<GridBoxUpsertWithNestedWhereUniqueInput>;
};

export type GridBoxUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<GridBoxUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: GridBoxWhereUniqueInput;
};

export type GridBoxUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GridBoxUpdateInput;
  /** Unique document search */
  where: GridBoxWhereUniqueInput;
};

export type GridBoxUpsertInput = {
  /** Create document if it didn't exist */
  create: GridBoxCreateInput;
  /** Update document if it exists */
  update: GridBoxUpdateInput;
};

export type GridBoxUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<GridBoxUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: GridBoxWhereUniqueInput;
};

export type GridBoxUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GridBoxUpsertInput;
  /** Unique document search */
  where: GridBoxWhereUniqueInput;
};

/** Identifies documents */
export type GridBoxWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GridBoxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GridBoxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GridBoxWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  boxImage?: InputMaybe<AssetWhereInput>;
  boxLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  boxLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  boxLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  boxLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxLink_starts_with?: InputMaybe<Scalars['String']>;
  boxTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  boxTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  boxTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  boxTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxTitle_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References GridBox record uniquely */
export type GridBoxWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type HeroMediaSlider = {
  __typename?: 'HeroMediaSlider';
  callToAction: Array<CallToAction>;
  displaySocialMedia?: Maybe<Scalars['Boolean']>;
  /** The unique identifier */
  id: Scalars['ID'];
  mediaType?: Maybe<MediaType>;
  sliderCssWrapper?: Maybe<Scalars['String']>;
  sliderMediaBackground?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  textContent?: Maybe<TextContent>;
  youtubeVideoId?: Maybe<Scalars['String']>;
};


export type HeroMediaSliderCallToActionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CallToActionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type HeroMediaSliderSliderMediaBackgroundArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroMediaSliderTextContentArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HeroMediaSliderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroMediaSliderWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroMediaSliderConnection = {
  __typename?: 'HeroMediaSliderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroMediaSliderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroMediaSliderCreateInput = {
  callToAction?: InputMaybe<CallToActionCreateManyInlineInput>;
  displaySocialMedia?: InputMaybe<Scalars['Boolean']>;
  mediaType?: InputMaybe<MediaType>;
  sliderCssWrapper?: InputMaybe<Scalars['String']>;
  sliderMediaBackground?: InputMaybe<AssetCreateOneInlineInput>;
  textContent?: InputMaybe<TextContentCreateOneInlineInput>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
};

export type HeroMediaSliderCreateManyInlineInput = {
  /** Create and connect multiple existing HeroMediaSlider documents */
  create?: InputMaybe<Array<HeroMediaSliderCreateInput>>;
};

export type HeroMediaSliderCreateOneInlineInput = {
  /** Create and connect one HeroMediaSlider document */
  create?: InputMaybe<HeroMediaSliderCreateInput>;
};

export type HeroMediaSliderCreateWithPositionInput = {
  /** Document to create */
  data: HeroMediaSliderCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroMediaSliderEdge = {
  __typename?: 'HeroMediaSliderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: HeroMediaSlider;
};

/** Identifies documents */
export type HeroMediaSliderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroMediaSliderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroMediaSliderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroMediaSliderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  callToAction_every?: InputMaybe<CallToActionWhereInput>;
  callToAction_none?: InputMaybe<CallToActionWhereInput>;
  callToAction_some?: InputMaybe<CallToActionWhereInput>;
  displaySocialMedia?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  displaySocialMedia_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mediaType?: InputMaybe<MediaType>;
  /** All values that are contained in given list. */
  mediaType_in?: InputMaybe<Array<InputMaybe<MediaType>>>;
  /** Any other value that exists and is not equal to the given value. */
  mediaType_not?: InputMaybe<MediaType>;
  /** All values that are not contained in given list. */
  mediaType_not_in?: InputMaybe<Array<InputMaybe<MediaType>>>;
  sliderCssWrapper?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  sliderCssWrapper_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  sliderCssWrapper_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sliderCssWrapper_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sliderCssWrapper_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  sliderCssWrapper_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  sliderCssWrapper_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  sliderCssWrapper_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  sliderCssWrapper_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  sliderCssWrapper_starts_with?: InputMaybe<Scalars['String']>;
  sliderMediaBackground?: InputMaybe<AssetWhereInput>;
  textContent?: InputMaybe<TextContentWhereInput>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeVideoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeVideoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeVideoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeVideoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeVideoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeVideoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeVideoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeVideoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeVideoId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum HeroMediaSliderOrderByInput {
  DisplaySocialMediaAsc = 'displaySocialMedia_ASC',
  DisplaySocialMediaDesc = 'displaySocialMedia_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MediaTypeAsc = 'mediaType_ASC',
  MediaTypeDesc = 'mediaType_DESC',
  SliderCssWrapperAsc = 'sliderCssWrapper_ASC',
  SliderCssWrapperDesc = 'sliderCssWrapper_DESC',
  YoutubeVideoIdAsc = 'youtubeVideoId_ASC',
  YoutubeVideoIdDesc = 'youtubeVideoId_DESC'
}

export type HeroMediaSliderParent = LayoutBlockColumn;

export type HeroMediaSliderParentConnectInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnConnectInput>;
};

export type HeroMediaSliderParentCreateInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateInput>;
};

export type HeroMediaSliderParentCreateManyInlineInput = {
  /** Create and connect multiple existing HeroMediaSliderParent documents */
  create?: InputMaybe<Array<HeroMediaSliderParentCreateInput>>;
};

export type HeroMediaSliderParentCreateOneInlineInput = {
  /** Create and connect one HeroMediaSliderParent document */
  create?: InputMaybe<HeroMediaSliderParentCreateInput>;
};

export type HeroMediaSliderParentCreateWithPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateWithPositionInput>;
};

export type HeroMediaSliderParentUpdateInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateInput>;
};

export type HeroMediaSliderParentUpdateManyInlineInput = {
  /** Create and connect multiple HeroMediaSliderParent component instances */
  create?: InputMaybe<Array<HeroMediaSliderParentCreateWithPositionInput>>;
  /** Delete multiple HeroMediaSliderParent documents */
  delete?: InputMaybe<Array<HeroMediaSliderParentWhereUniqueInput>>;
  /** Update multiple HeroMediaSliderParent component instances */
  update?: InputMaybe<Array<HeroMediaSliderParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HeroMediaSliderParent component instances */
  upsert?: InputMaybe<Array<HeroMediaSliderParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroMediaSliderParentUpdateManyWithNestedWhereInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateManyWithNestedWhereInput>;
};

export type HeroMediaSliderParentUpdateOneInlineInput = {
  /** Create and connect one HeroMediaSliderParent document */
  create?: InputMaybe<HeroMediaSliderParentCreateInput>;
  /** Delete currently connected HeroMediaSliderParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single HeroMediaSliderParent document */
  update?: InputMaybe<HeroMediaSliderParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroMediaSliderParent document */
  upsert?: InputMaybe<HeroMediaSliderParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroMediaSliderParentUpdateWithNestedWhereUniqueAndPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type HeroMediaSliderParentUpdateWithNestedWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueInput>;
};

export type HeroMediaSliderParentUpsertWithNestedWhereUniqueAndPositionInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type HeroMediaSliderParentUpsertWithNestedWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueInput>;
};

export type HeroMediaSliderParentWhereInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereInput>;
};

export type HeroMediaSliderParentWhereUniqueInput = {
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereUniqueInput>;
};

export type HeroMediaSliderUpdateInput = {
  callToAction?: InputMaybe<CallToActionUpdateManyInlineInput>;
  displaySocialMedia?: InputMaybe<Scalars['Boolean']>;
  mediaType?: InputMaybe<MediaType>;
  sliderCssWrapper?: InputMaybe<Scalars['String']>;
  sliderMediaBackground?: InputMaybe<AssetUpdateOneInlineInput>;
  textContent?: InputMaybe<TextContentUpdateOneInlineInput>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
};

export type HeroMediaSliderUpdateManyInlineInput = {
  /** Create and connect multiple HeroMediaSlider component instances */
  create?: InputMaybe<Array<HeroMediaSliderCreateWithPositionInput>>;
  /** Delete multiple HeroMediaSlider documents */
  delete?: InputMaybe<Array<HeroMediaSliderWhereUniqueInput>>;
  /** Update multiple HeroMediaSlider component instances */
  update?: InputMaybe<Array<HeroMediaSliderUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple HeroMediaSlider component instances */
  upsert?: InputMaybe<Array<HeroMediaSliderUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroMediaSliderUpdateManyInput = {
  displaySocialMedia?: InputMaybe<Scalars['Boolean']>;
  mediaType?: InputMaybe<MediaType>;
  sliderCssWrapper?: InputMaybe<Scalars['String']>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
};

export type HeroMediaSliderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroMediaSliderUpdateManyInput;
  /** Document search */
  where: HeroMediaSliderWhereInput;
};

export type HeroMediaSliderUpdateOneInlineInput = {
  /** Create and connect one HeroMediaSlider document */
  create?: InputMaybe<HeroMediaSliderCreateInput>;
  /** Delete currently connected HeroMediaSlider document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single HeroMediaSlider document */
  update?: InputMaybe<HeroMediaSliderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroMediaSlider document */
  upsert?: InputMaybe<HeroMediaSliderUpsertWithNestedWhereUniqueInput>;
};

export type HeroMediaSliderUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroMediaSliderUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroMediaSliderWhereUniqueInput;
};

export type HeroMediaSliderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroMediaSliderUpdateInput;
  /** Unique document search */
  where: HeroMediaSliderWhereUniqueInput;
};

export type HeroMediaSliderUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroMediaSliderCreateInput;
  /** Update document if it exists */
  update: HeroMediaSliderUpdateInput;
};

export type HeroMediaSliderUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroMediaSliderUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroMediaSliderWhereUniqueInput;
};

export type HeroMediaSliderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroMediaSliderUpsertInput;
  /** Unique document search */
  where: HeroMediaSliderWhereUniqueInput;
};

/** Identifies documents */
export type HeroMediaSliderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroMediaSliderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroMediaSliderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroMediaSliderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  callToAction_every?: InputMaybe<CallToActionWhereInput>;
  callToAction_none?: InputMaybe<CallToActionWhereInput>;
  callToAction_some?: InputMaybe<CallToActionWhereInput>;
  displaySocialMedia?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  displaySocialMedia_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mediaType?: InputMaybe<MediaType>;
  /** All values that are contained in given list. */
  mediaType_in?: InputMaybe<Array<InputMaybe<MediaType>>>;
  /** Any other value that exists and is not equal to the given value. */
  mediaType_not?: InputMaybe<MediaType>;
  /** All values that are not contained in given list. */
  mediaType_not_in?: InputMaybe<Array<InputMaybe<MediaType>>>;
  sliderCssWrapper?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  sliderCssWrapper_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  sliderCssWrapper_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sliderCssWrapper_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sliderCssWrapper_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  sliderCssWrapper_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  sliderCssWrapper_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  sliderCssWrapper_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  sliderCssWrapper_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  sliderCssWrapper_starts_with?: InputMaybe<Scalars['String']>;
  sliderMediaBackground?: InputMaybe<AssetWhereInput>;
  textContent?: InputMaybe<TextContentWhereInput>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeVideoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeVideoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeVideoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeVideoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeVideoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeVideoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeVideoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeVideoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeVideoId_starts_with?: InputMaybe<Scalars['String']>;
};

/** References HeroMediaSlider record uniquely */
export type HeroMediaSliderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

export enum ImageStyle {
  Border = 'border',
  Circle = 'circle',
  Large = 'large',
  Medium = 'medium',
  Rounded = 'rounded',
  Small = 'small'
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type LayoutBlock = {
  __typename?: 'LayoutBlock';
  backgroundColor?: Maybe<Color>;
  backgroundImage?: Maybe<Asset>;
  cssClass?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  layoutBlockColumns: Array<LayoutBlockColumn>;
  /** System stage field */
  stage: Stage;
};


export type LayoutBlockBackgroundImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LayoutBlockLayoutBlockColumnsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LayoutBlockColumnOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutBlockColumnWhereInput>;
};

export type LayoutBlockColumn = {
  __typename?: 'LayoutBlockColumn';
  accordions: Array<Accordion>;
  backgroundImage?: Maybe<Asset>;
  blogCategory?: Maybe<BlogTags>;
  blogSectionTitle?: Maybe<Scalars['String']>;
  callToAction: Array<CallToAction>;
  contactForm: Array<ContactForm>;
  cssClass?: Maybe<Scalars['String']>;
  displayAllMusic?: Maybe<Scalars['Boolean']>;
  displayFeaturedMusic?: Maybe<Scalars['Boolean']>;
  displayInstagramSectionUsername?: Maybe<Scalars['String']>;
  displayProduct?: Maybe<ProductType>;
  eventDisplayLayout?: Maybe<EventDisplayType>;
  gallery: Array<Asset>;
  galleryLayout?: Maybe<GalleryLayout>;
  gridBox: Array<GridBox>;
  heroMediaSlider: Array<HeroMediaSlider>;
  hideBlockColumn?: Maybe<Scalars['Boolean']>;
  htmlId?: Maybe<Scalars['String']>;
  iFrameCode?: Maybe<Scalars['String']>;
  iFrameTitle?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  logoTableQuery?: Maybe<LogoTableItem>;
  mailchimpLink?: Maybe<Scalars['String']>;
  mailchimpSubtitle?: Maybe<Scalars['String']>;
  mailchimpTitle?: Maybe<Scalars['String']>;
  parallaxImage?: Maybe<Asset>;
  profileLayoutStyle?: Maybe<ProfileLayoutStyle>;
  profileSectionTitle?: Maybe<Scalars['String']>;
  profilesQuery?: Maybe<ProfilesSelect>;
  /** System stage field */
  stage: Stage;
  standOutText?: Maybe<Scalars['String']>;
  stripePricingTableId?: Maybe<Scalars['String']>;
  testimonialsQuery?: Maybe<TestimonialType>;
  textContent: Array<TextContent>;
  videoBox: Array<VideoBox>;
};


export type LayoutBlockColumnAccordionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AccordionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccordionWhereInput>;
};


export type LayoutBlockColumnBackgroundImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LayoutBlockColumnCallToActionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CallToActionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CallToActionWhereInput>;
};


export type LayoutBlockColumnContactFormArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ContactFormOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactFormWhereInput>;
};


export type LayoutBlockColumnGalleryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type LayoutBlockColumnGridBoxArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<GridBoxOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GridBoxWhereInput>;
};


export type LayoutBlockColumnHeroMediaSliderArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<HeroMediaSliderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroMediaSliderWhereInput>;
};


export type LayoutBlockColumnParallaxImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LayoutBlockColumnTextContentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TextContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextContentWhereInput>;
};


export type LayoutBlockColumnVideoBoxArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<VideoBoxOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoBoxWhereInput>;
};

export type LayoutBlockColumnConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LayoutBlockColumnWhereUniqueInput;
};

/** A connection to a list of items. */
export type LayoutBlockColumnConnection = {
  __typename?: 'LayoutBlockColumnConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LayoutBlockColumnEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LayoutBlockColumnCreateInput = {
  accordions?: InputMaybe<AccordionCreateManyInlineInput>;
  backgroundImage?: InputMaybe<AssetCreateOneInlineInput>;
  blogCategory?: InputMaybe<BlogTags>;
  blogSectionTitle?: InputMaybe<Scalars['String']>;
  callToAction?: InputMaybe<CallToActionCreateManyInlineInput>;
  contactForm?: InputMaybe<ContactFormCreateManyInlineInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  displayAllMusic?: InputMaybe<Scalars['Boolean']>;
  displayFeaturedMusic?: InputMaybe<Scalars['Boolean']>;
  displayInstagramSectionUsername?: InputMaybe<Scalars['String']>;
  displayProduct?: InputMaybe<ProductType>;
  eventDisplayLayout?: InputMaybe<EventDisplayType>;
  gallery?: InputMaybe<AssetCreateManyInlineInput>;
  galleryLayout?: InputMaybe<GalleryLayout>;
  gridBox?: InputMaybe<GridBoxCreateManyInlineInput>;
  heroMediaSlider?: InputMaybe<HeroMediaSliderCreateManyInlineInput>;
  hideBlockColumn?: InputMaybe<Scalars['Boolean']>;
  htmlId?: InputMaybe<Scalars['String']>;
  iFrameCode?: InputMaybe<Scalars['String']>;
  iFrameTitle?: InputMaybe<Scalars['String']>;
  logoTableQuery?: InputMaybe<LogoTableItem>;
  mailchimpLink?: InputMaybe<Scalars['String']>;
  mailchimpSubtitle?: InputMaybe<Scalars['String']>;
  mailchimpTitle?: InputMaybe<Scalars['String']>;
  parallaxImage?: InputMaybe<AssetCreateOneInlineInput>;
  profileLayoutStyle?: InputMaybe<ProfileLayoutStyle>;
  profileSectionTitle?: InputMaybe<Scalars['String']>;
  profilesQuery?: InputMaybe<ProfilesSelect>;
  standOutText?: InputMaybe<Scalars['String']>;
  stripePricingTableId?: InputMaybe<Scalars['String']>;
  testimonialsQuery?: InputMaybe<TestimonialType>;
  textContent?: InputMaybe<TextContentCreateManyInlineInput>;
  videoBox?: InputMaybe<VideoBoxCreateManyInlineInput>;
};

export type LayoutBlockColumnCreateManyInlineInput = {
  /** Create and connect multiple existing LayoutBlockColumn documents */
  create?: InputMaybe<Array<LayoutBlockColumnCreateInput>>;
};

export type LayoutBlockColumnCreateOneInlineInput = {
  /** Create and connect one LayoutBlockColumn document */
  create?: InputMaybe<LayoutBlockColumnCreateInput>;
};

export type LayoutBlockColumnCreateWithPositionInput = {
  /** Document to create */
  data: LayoutBlockColumnCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LayoutBlockColumnEdge = {
  __typename?: 'LayoutBlockColumnEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LayoutBlockColumn;
};

/** Identifies documents */
export type LayoutBlockColumnManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LayoutBlockColumnWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LayoutBlockColumnWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LayoutBlockColumnWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  accordions_every?: InputMaybe<AccordionWhereInput>;
  accordions_none?: InputMaybe<AccordionWhereInput>;
  accordions_some?: InputMaybe<AccordionWhereInput>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  blogCategory?: InputMaybe<BlogTags>;
  /** All values that are contained in given list. */
  blogCategory_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogCategory_not?: InputMaybe<BlogTags>;
  /** All values that are not contained in given list. */
  blogCategory_not_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  blogSectionTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blogSectionTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blogSectionTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blogSectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogSectionTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blogSectionTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blogSectionTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blogSectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  blogSectionTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blogSectionTitle_starts_with?: InputMaybe<Scalars['String']>;
  callToAction_every?: InputMaybe<CallToActionWhereInput>;
  callToAction_none?: InputMaybe<CallToActionWhereInput>;
  callToAction_some?: InputMaybe<CallToActionWhereInput>;
  contactForm_every?: InputMaybe<ContactFormWhereInput>;
  contactForm_none?: InputMaybe<ContactFormWhereInput>;
  contactForm_some?: InputMaybe<ContactFormWhereInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  displayAllMusic?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  displayAllMusic_not?: InputMaybe<Scalars['Boolean']>;
  displayFeaturedMusic?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  displayFeaturedMusic_not?: InputMaybe<Scalars['Boolean']>;
  displayInstagramSectionUsername?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  displayInstagramSectionUsername_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayInstagramSectionUsername_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayInstagramSectionUsername_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  displayInstagramSectionUsername_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayInstagramSectionUsername_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayInstagramSectionUsername_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayInstagramSectionUsername_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayInstagramSectionUsername_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayInstagramSectionUsername_starts_with?: InputMaybe<Scalars['String']>;
  displayProduct?: InputMaybe<ProductType>;
  /** All values that are contained in given list. */
  displayProduct_in?: InputMaybe<Array<InputMaybe<ProductType>>>;
  /** Any other value that exists and is not equal to the given value. */
  displayProduct_not?: InputMaybe<ProductType>;
  /** All values that are not contained in given list. */
  displayProduct_not_in?: InputMaybe<Array<InputMaybe<ProductType>>>;
  eventDisplayLayout?: InputMaybe<EventDisplayType>;
  /** All values that are contained in given list. */
  eventDisplayLayout_in?: InputMaybe<Array<InputMaybe<EventDisplayType>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventDisplayLayout_not?: InputMaybe<EventDisplayType>;
  /** All values that are not contained in given list. */
  eventDisplayLayout_not_in?: InputMaybe<Array<InputMaybe<EventDisplayType>>>;
  galleryLayout?: InputMaybe<GalleryLayout>;
  /** All values that are contained in given list. */
  galleryLayout_in?: InputMaybe<Array<InputMaybe<GalleryLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  galleryLayout_not?: InputMaybe<GalleryLayout>;
  /** All values that are not contained in given list. */
  galleryLayout_not_in?: InputMaybe<Array<InputMaybe<GalleryLayout>>>;
  gallery_every?: InputMaybe<AssetWhereInput>;
  gallery_none?: InputMaybe<AssetWhereInput>;
  gallery_some?: InputMaybe<AssetWhereInput>;
  gridBox_every?: InputMaybe<GridBoxWhereInput>;
  gridBox_none?: InputMaybe<GridBoxWhereInput>;
  gridBox_some?: InputMaybe<GridBoxWhereInput>;
  heroMediaSlider_every?: InputMaybe<HeroMediaSliderWhereInput>;
  heroMediaSlider_none?: InputMaybe<HeroMediaSliderWhereInput>;
  heroMediaSlider_some?: InputMaybe<HeroMediaSliderWhereInput>;
  hideBlockColumn?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  hideBlockColumn_not?: InputMaybe<Scalars['Boolean']>;
  htmlId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  htmlId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  htmlId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  htmlId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  htmlId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  htmlId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  htmlId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  htmlId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  htmlId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  htmlId_starts_with?: InputMaybe<Scalars['String']>;
  iFrameCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  iFrameCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  iFrameCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iFrameCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iFrameCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  iFrameCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  iFrameCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  iFrameCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  iFrameCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  iFrameCode_starts_with?: InputMaybe<Scalars['String']>;
  iFrameTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  iFrameTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  iFrameTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iFrameTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iFrameTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  iFrameTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  iFrameTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  iFrameTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  iFrameTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  iFrameTitle_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  logoTableQuery?: InputMaybe<LogoTableItem>;
  /** All values that are contained in given list. */
  logoTableQuery_in?: InputMaybe<Array<InputMaybe<LogoTableItem>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoTableQuery_not?: InputMaybe<LogoTableItem>;
  /** All values that are not contained in given list. */
  logoTableQuery_not_in?: InputMaybe<Array<InputMaybe<LogoTableItem>>>;
  mailchimpLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mailchimpLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mailchimpLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mailchimpLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mailchimpLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mailchimpLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mailchimpLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mailchimpLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mailchimpLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mailchimpLink_starts_with?: InputMaybe<Scalars['String']>;
  mailchimpSubtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mailchimpSubtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mailchimpSubtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mailchimpSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mailchimpSubtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mailchimpSubtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mailchimpSubtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mailchimpSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mailchimpSubtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mailchimpSubtitle_starts_with?: InputMaybe<Scalars['String']>;
  mailchimpTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mailchimpTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mailchimpTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mailchimpTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mailchimpTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mailchimpTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mailchimpTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mailchimpTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mailchimpTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mailchimpTitle_starts_with?: InputMaybe<Scalars['String']>;
  parallaxImage?: InputMaybe<AssetWhereInput>;
  profileLayoutStyle?: InputMaybe<ProfileLayoutStyle>;
  /** All values that are contained in given list. */
  profileLayoutStyle_in?: InputMaybe<Array<InputMaybe<ProfileLayoutStyle>>>;
  /** Any other value that exists and is not equal to the given value. */
  profileLayoutStyle_not?: InputMaybe<ProfileLayoutStyle>;
  /** All values that are not contained in given list. */
  profileLayoutStyle_not_in?: InputMaybe<Array<InputMaybe<ProfileLayoutStyle>>>;
  profileSectionTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  profileSectionTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  profileSectionTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  profileSectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  profileSectionTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  profileSectionTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  profileSectionTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  profileSectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  profileSectionTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  profileSectionTitle_starts_with?: InputMaybe<Scalars['String']>;
  profilesQuery?: InputMaybe<ProfilesSelect>;
  /** All values that are contained in given list. */
  profilesQuery_in?: InputMaybe<Array<InputMaybe<ProfilesSelect>>>;
  /** Any other value that exists and is not equal to the given value. */
  profilesQuery_not?: InputMaybe<ProfilesSelect>;
  /** All values that are not contained in given list. */
  profilesQuery_not_in?: InputMaybe<Array<InputMaybe<ProfilesSelect>>>;
  standOutText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  standOutText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  standOutText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  standOutText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  standOutText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  standOutText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  standOutText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  standOutText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  standOutText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  standOutText_starts_with?: InputMaybe<Scalars['String']>;
  stripePricingTableId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  stripePricingTableId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  stripePricingTableId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stripePricingTableId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  stripePricingTableId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  stripePricingTableId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  stripePricingTableId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stripePricingTableId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  stripePricingTableId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  stripePricingTableId_starts_with?: InputMaybe<Scalars['String']>;
  testimonialsQuery?: InputMaybe<TestimonialType>;
  /** All values that are contained in given list. */
  testimonialsQuery_in?: InputMaybe<Array<InputMaybe<TestimonialType>>>;
  /** Any other value that exists and is not equal to the given value. */
  testimonialsQuery_not?: InputMaybe<TestimonialType>;
  /** All values that are not contained in given list. */
  testimonialsQuery_not_in?: InputMaybe<Array<InputMaybe<TestimonialType>>>;
  textContent_every?: InputMaybe<TextContentWhereInput>;
  textContent_none?: InputMaybe<TextContentWhereInput>;
  textContent_some?: InputMaybe<TextContentWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
};

export enum LayoutBlockColumnOrderByInput {
  BlogCategoryAsc = 'blogCategory_ASC',
  BlogCategoryDesc = 'blogCategory_DESC',
  BlogSectionTitleAsc = 'blogSectionTitle_ASC',
  BlogSectionTitleDesc = 'blogSectionTitle_DESC',
  CssClassAsc = 'cssClass_ASC',
  CssClassDesc = 'cssClass_DESC',
  DisplayAllMusicAsc = 'displayAllMusic_ASC',
  DisplayAllMusicDesc = 'displayAllMusic_DESC',
  DisplayFeaturedMusicAsc = 'displayFeaturedMusic_ASC',
  DisplayFeaturedMusicDesc = 'displayFeaturedMusic_DESC',
  DisplayInstagramSectionUsernameAsc = 'displayInstagramSectionUsername_ASC',
  DisplayInstagramSectionUsernameDesc = 'displayInstagramSectionUsername_DESC',
  DisplayProductAsc = 'displayProduct_ASC',
  DisplayProductDesc = 'displayProduct_DESC',
  EventDisplayLayoutAsc = 'eventDisplayLayout_ASC',
  EventDisplayLayoutDesc = 'eventDisplayLayout_DESC',
  GalleryLayoutAsc = 'galleryLayout_ASC',
  GalleryLayoutDesc = 'galleryLayout_DESC',
  HideBlockColumnAsc = 'hideBlockColumn_ASC',
  HideBlockColumnDesc = 'hideBlockColumn_DESC',
  HtmlIdAsc = 'htmlId_ASC',
  HtmlIdDesc = 'htmlId_DESC',
  IFrameCodeAsc = 'iFrameCode_ASC',
  IFrameCodeDesc = 'iFrameCode_DESC',
  IFrameTitleAsc = 'iFrameTitle_ASC',
  IFrameTitleDesc = 'iFrameTitle_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LogoTableQueryAsc = 'logoTableQuery_ASC',
  LogoTableQueryDesc = 'logoTableQuery_DESC',
  MailchimpLinkAsc = 'mailchimpLink_ASC',
  MailchimpLinkDesc = 'mailchimpLink_DESC',
  MailchimpSubtitleAsc = 'mailchimpSubtitle_ASC',
  MailchimpSubtitleDesc = 'mailchimpSubtitle_DESC',
  MailchimpTitleAsc = 'mailchimpTitle_ASC',
  MailchimpTitleDesc = 'mailchimpTitle_DESC',
  ProfileLayoutStyleAsc = 'profileLayoutStyle_ASC',
  ProfileLayoutStyleDesc = 'profileLayoutStyle_DESC',
  ProfileSectionTitleAsc = 'profileSectionTitle_ASC',
  ProfileSectionTitleDesc = 'profileSectionTitle_DESC',
  ProfilesQueryAsc = 'profilesQuery_ASC',
  ProfilesQueryDesc = 'profilesQuery_DESC',
  StandOutTextAsc = 'standOutText_ASC',
  StandOutTextDesc = 'standOutText_DESC',
  StripePricingTableIdAsc = 'stripePricingTableId_ASC',
  StripePricingTableIdDesc = 'stripePricingTableId_DESC',
  TestimonialsQueryAsc = 'testimonialsQuery_ASC',
  TestimonialsQueryDesc = 'testimonialsQuery_DESC'
}

export type LayoutBlockColumnParent = LayoutBlock;

export type LayoutBlockColumnParentConnectInput = {
  LayoutBlock?: InputMaybe<LayoutBlockConnectInput>;
};

export type LayoutBlockColumnParentCreateInput = {
  LayoutBlock?: InputMaybe<LayoutBlockCreateInput>;
};

export type LayoutBlockColumnParentCreateManyInlineInput = {
  /** Create and connect multiple existing LayoutBlockColumnParent documents */
  create?: InputMaybe<Array<LayoutBlockColumnParentCreateInput>>;
};

export type LayoutBlockColumnParentCreateOneInlineInput = {
  /** Create and connect one LayoutBlockColumnParent document */
  create?: InputMaybe<LayoutBlockColumnParentCreateInput>;
};

export type LayoutBlockColumnParentCreateWithPositionInput = {
  LayoutBlock?: InputMaybe<LayoutBlockCreateWithPositionInput>;
};

export type LayoutBlockColumnParentUpdateInput = {
  LayoutBlock?: InputMaybe<LayoutBlockUpdateInput>;
};

export type LayoutBlockColumnParentUpdateManyInlineInput = {
  /** Create and connect multiple LayoutBlockColumnParent component instances */
  create?: InputMaybe<Array<LayoutBlockColumnParentCreateWithPositionInput>>;
  /** Delete multiple LayoutBlockColumnParent documents */
  delete?: InputMaybe<Array<LayoutBlockColumnParentWhereUniqueInput>>;
  /** Update multiple LayoutBlockColumnParent component instances */
  update?: InputMaybe<Array<LayoutBlockColumnParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LayoutBlockColumnParent component instances */
  upsert?: InputMaybe<Array<LayoutBlockColumnParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LayoutBlockColumnParentUpdateManyWithNestedWhereInput = {
  LayoutBlock?: InputMaybe<LayoutBlockUpdateManyWithNestedWhereInput>;
};

export type LayoutBlockColumnParentUpdateOneInlineInput = {
  /** Create and connect one LayoutBlockColumnParent document */
  create?: InputMaybe<LayoutBlockColumnParentCreateInput>;
  /** Delete currently connected LayoutBlockColumnParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single LayoutBlockColumnParent document */
  update?: InputMaybe<LayoutBlockColumnParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LayoutBlockColumnParent document */
  upsert?: InputMaybe<LayoutBlockColumnParentUpsertWithNestedWhereUniqueInput>;
};

export type LayoutBlockColumnParentUpdateWithNestedWhereUniqueAndPositionInput = {
  LayoutBlock?: InputMaybe<LayoutBlockUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type LayoutBlockColumnParentUpdateWithNestedWhereUniqueInput = {
  LayoutBlock?: InputMaybe<LayoutBlockUpdateWithNestedWhereUniqueInput>;
};

export type LayoutBlockColumnParentUpsertWithNestedWhereUniqueAndPositionInput = {
  LayoutBlock?: InputMaybe<LayoutBlockUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type LayoutBlockColumnParentUpsertWithNestedWhereUniqueInput = {
  LayoutBlock?: InputMaybe<LayoutBlockUpsertWithNestedWhereUniqueInput>;
};

export type LayoutBlockColumnParentWhereInput = {
  LayoutBlock?: InputMaybe<LayoutBlockWhereInput>;
};

export type LayoutBlockColumnParentWhereUniqueInput = {
  LayoutBlock?: InputMaybe<LayoutBlockWhereUniqueInput>;
};

export type LayoutBlockColumnUpdateInput = {
  accordions?: InputMaybe<AccordionUpdateManyInlineInput>;
  backgroundImage?: InputMaybe<AssetUpdateOneInlineInput>;
  blogCategory?: InputMaybe<BlogTags>;
  blogSectionTitle?: InputMaybe<Scalars['String']>;
  callToAction?: InputMaybe<CallToActionUpdateManyInlineInput>;
  contactForm?: InputMaybe<ContactFormUpdateManyInlineInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  displayAllMusic?: InputMaybe<Scalars['Boolean']>;
  displayFeaturedMusic?: InputMaybe<Scalars['Boolean']>;
  displayInstagramSectionUsername?: InputMaybe<Scalars['String']>;
  displayProduct?: InputMaybe<ProductType>;
  eventDisplayLayout?: InputMaybe<EventDisplayType>;
  gallery?: InputMaybe<AssetUpdateManyInlineInput>;
  galleryLayout?: InputMaybe<GalleryLayout>;
  gridBox?: InputMaybe<GridBoxUpdateManyInlineInput>;
  heroMediaSlider?: InputMaybe<HeroMediaSliderUpdateManyInlineInput>;
  hideBlockColumn?: InputMaybe<Scalars['Boolean']>;
  htmlId?: InputMaybe<Scalars['String']>;
  iFrameCode?: InputMaybe<Scalars['String']>;
  iFrameTitle?: InputMaybe<Scalars['String']>;
  logoTableQuery?: InputMaybe<LogoTableItem>;
  mailchimpLink?: InputMaybe<Scalars['String']>;
  mailchimpSubtitle?: InputMaybe<Scalars['String']>;
  mailchimpTitle?: InputMaybe<Scalars['String']>;
  parallaxImage?: InputMaybe<AssetUpdateOneInlineInput>;
  profileLayoutStyle?: InputMaybe<ProfileLayoutStyle>;
  profileSectionTitle?: InputMaybe<Scalars['String']>;
  profilesQuery?: InputMaybe<ProfilesSelect>;
  standOutText?: InputMaybe<Scalars['String']>;
  stripePricingTableId?: InputMaybe<Scalars['String']>;
  testimonialsQuery?: InputMaybe<TestimonialType>;
  textContent?: InputMaybe<TextContentUpdateManyInlineInput>;
  videoBox?: InputMaybe<VideoBoxUpdateManyInlineInput>;
};

export type LayoutBlockColumnUpdateManyInlineInput = {
  /** Create and connect multiple LayoutBlockColumn component instances */
  create?: InputMaybe<Array<LayoutBlockColumnCreateWithPositionInput>>;
  /** Delete multiple LayoutBlockColumn documents */
  delete?: InputMaybe<Array<LayoutBlockColumnWhereUniqueInput>>;
  /** Update multiple LayoutBlockColumn component instances */
  update?: InputMaybe<Array<LayoutBlockColumnUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LayoutBlockColumn component instances */
  upsert?: InputMaybe<Array<LayoutBlockColumnUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LayoutBlockColumnUpdateManyInput = {
  blogCategory?: InputMaybe<BlogTags>;
  blogSectionTitle?: InputMaybe<Scalars['String']>;
  cssClass?: InputMaybe<Scalars['String']>;
  displayAllMusic?: InputMaybe<Scalars['Boolean']>;
  displayFeaturedMusic?: InputMaybe<Scalars['Boolean']>;
  displayInstagramSectionUsername?: InputMaybe<Scalars['String']>;
  displayProduct?: InputMaybe<ProductType>;
  eventDisplayLayout?: InputMaybe<EventDisplayType>;
  galleryLayout?: InputMaybe<GalleryLayout>;
  hideBlockColumn?: InputMaybe<Scalars['Boolean']>;
  htmlId?: InputMaybe<Scalars['String']>;
  iFrameCode?: InputMaybe<Scalars['String']>;
  iFrameTitle?: InputMaybe<Scalars['String']>;
  logoTableQuery?: InputMaybe<LogoTableItem>;
  mailchimpLink?: InputMaybe<Scalars['String']>;
  mailchimpSubtitle?: InputMaybe<Scalars['String']>;
  mailchimpTitle?: InputMaybe<Scalars['String']>;
  profileLayoutStyle?: InputMaybe<ProfileLayoutStyle>;
  profileSectionTitle?: InputMaybe<Scalars['String']>;
  profilesQuery?: InputMaybe<ProfilesSelect>;
  standOutText?: InputMaybe<Scalars['String']>;
  stripePricingTableId?: InputMaybe<Scalars['String']>;
  testimonialsQuery?: InputMaybe<TestimonialType>;
};

export type LayoutBlockColumnUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LayoutBlockColumnUpdateManyInput;
  /** Document search */
  where: LayoutBlockColumnWhereInput;
};

export type LayoutBlockColumnUpdateOneInlineInput = {
  /** Create and connect one LayoutBlockColumn document */
  create?: InputMaybe<LayoutBlockColumnCreateInput>;
  /** Delete currently connected LayoutBlockColumn document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single LayoutBlockColumn document */
  update?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LayoutBlockColumn document */
  upsert?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueInput>;
};

export type LayoutBlockColumnUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LayoutBlockColumnUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LayoutBlockColumnWhereUniqueInput;
};

export type LayoutBlockColumnUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LayoutBlockColumnUpdateInput;
  /** Unique document search */
  where: LayoutBlockColumnWhereUniqueInput;
};

export type LayoutBlockColumnUpsertInput = {
  /** Create document if it didn't exist */
  create: LayoutBlockColumnCreateInput;
  /** Update document if it exists */
  update: LayoutBlockColumnUpdateInput;
};

export type LayoutBlockColumnUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LayoutBlockColumnUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LayoutBlockColumnWhereUniqueInput;
};

export type LayoutBlockColumnUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LayoutBlockColumnUpsertInput;
  /** Unique document search */
  where: LayoutBlockColumnWhereUniqueInput;
};

/** Identifies documents */
export type LayoutBlockColumnWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LayoutBlockColumnWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LayoutBlockColumnWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LayoutBlockColumnWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  accordions_every?: InputMaybe<AccordionWhereInput>;
  accordions_none?: InputMaybe<AccordionWhereInput>;
  accordions_some?: InputMaybe<AccordionWhereInput>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  blogCategory?: InputMaybe<BlogTags>;
  /** All values that are contained in given list. */
  blogCategory_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogCategory_not?: InputMaybe<BlogTags>;
  /** All values that are not contained in given list. */
  blogCategory_not_in?: InputMaybe<Array<InputMaybe<BlogTags>>>;
  blogSectionTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  blogSectionTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  blogSectionTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  blogSectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  blogSectionTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  blogSectionTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  blogSectionTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  blogSectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  blogSectionTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  blogSectionTitle_starts_with?: InputMaybe<Scalars['String']>;
  callToAction_every?: InputMaybe<CallToActionWhereInput>;
  callToAction_none?: InputMaybe<CallToActionWhereInput>;
  callToAction_some?: InputMaybe<CallToActionWhereInput>;
  contactForm_every?: InputMaybe<ContactFormWhereInput>;
  contactForm_none?: InputMaybe<ContactFormWhereInput>;
  contactForm_some?: InputMaybe<ContactFormWhereInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  displayAllMusic?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  displayAllMusic_not?: InputMaybe<Scalars['Boolean']>;
  displayFeaturedMusic?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  displayFeaturedMusic_not?: InputMaybe<Scalars['Boolean']>;
  displayInstagramSectionUsername?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  displayInstagramSectionUsername_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayInstagramSectionUsername_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayInstagramSectionUsername_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  displayInstagramSectionUsername_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayInstagramSectionUsername_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayInstagramSectionUsername_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayInstagramSectionUsername_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayInstagramSectionUsername_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayInstagramSectionUsername_starts_with?: InputMaybe<Scalars['String']>;
  displayProduct?: InputMaybe<ProductType>;
  /** All values that are contained in given list. */
  displayProduct_in?: InputMaybe<Array<InputMaybe<ProductType>>>;
  /** Any other value that exists and is not equal to the given value. */
  displayProduct_not?: InputMaybe<ProductType>;
  /** All values that are not contained in given list. */
  displayProduct_not_in?: InputMaybe<Array<InputMaybe<ProductType>>>;
  eventDisplayLayout?: InputMaybe<EventDisplayType>;
  /** All values that are contained in given list. */
  eventDisplayLayout_in?: InputMaybe<Array<InputMaybe<EventDisplayType>>>;
  /** Any other value that exists and is not equal to the given value. */
  eventDisplayLayout_not?: InputMaybe<EventDisplayType>;
  /** All values that are not contained in given list. */
  eventDisplayLayout_not_in?: InputMaybe<Array<InputMaybe<EventDisplayType>>>;
  galleryLayout?: InputMaybe<GalleryLayout>;
  /** All values that are contained in given list. */
  galleryLayout_in?: InputMaybe<Array<InputMaybe<GalleryLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  galleryLayout_not?: InputMaybe<GalleryLayout>;
  /** All values that are not contained in given list. */
  galleryLayout_not_in?: InputMaybe<Array<InputMaybe<GalleryLayout>>>;
  gallery_every?: InputMaybe<AssetWhereInput>;
  gallery_none?: InputMaybe<AssetWhereInput>;
  gallery_some?: InputMaybe<AssetWhereInput>;
  gridBox_every?: InputMaybe<GridBoxWhereInput>;
  gridBox_none?: InputMaybe<GridBoxWhereInput>;
  gridBox_some?: InputMaybe<GridBoxWhereInput>;
  heroMediaSlider_every?: InputMaybe<HeroMediaSliderWhereInput>;
  heroMediaSlider_none?: InputMaybe<HeroMediaSliderWhereInput>;
  heroMediaSlider_some?: InputMaybe<HeroMediaSliderWhereInput>;
  hideBlockColumn?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  hideBlockColumn_not?: InputMaybe<Scalars['Boolean']>;
  htmlId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  htmlId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  htmlId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  htmlId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  htmlId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  htmlId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  htmlId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  htmlId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  htmlId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  htmlId_starts_with?: InputMaybe<Scalars['String']>;
  iFrameCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  iFrameCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  iFrameCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iFrameCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iFrameCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  iFrameCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  iFrameCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  iFrameCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  iFrameCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  iFrameCode_starts_with?: InputMaybe<Scalars['String']>;
  iFrameTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  iFrameTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  iFrameTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iFrameTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iFrameTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  iFrameTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  iFrameTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  iFrameTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  iFrameTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  iFrameTitle_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  logoTableQuery?: InputMaybe<LogoTableItem>;
  /** All values that are contained in given list. */
  logoTableQuery_in?: InputMaybe<Array<InputMaybe<LogoTableItem>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoTableQuery_not?: InputMaybe<LogoTableItem>;
  /** All values that are not contained in given list. */
  logoTableQuery_not_in?: InputMaybe<Array<InputMaybe<LogoTableItem>>>;
  mailchimpLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mailchimpLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mailchimpLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mailchimpLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mailchimpLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mailchimpLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mailchimpLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mailchimpLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mailchimpLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mailchimpLink_starts_with?: InputMaybe<Scalars['String']>;
  mailchimpSubtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mailchimpSubtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mailchimpSubtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mailchimpSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mailchimpSubtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mailchimpSubtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mailchimpSubtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mailchimpSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mailchimpSubtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mailchimpSubtitle_starts_with?: InputMaybe<Scalars['String']>;
  mailchimpTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mailchimpTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mailchimpTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mailchimpTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mailchimpTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mailchimpTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mailchimpTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mailchimpTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mailchimpTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mailchimpTitle_starts_with?: InputMaybe<Scalars['String']>;
  parallaxImage?: InputMaybe<AssetWhereInput>;
  profileLayoutStyle?: InputMaybe<ProfileLayoutStyle>;
  /** All values that are contained in given list. */
  profileLayoutStyle_in?: InputMaybe<Array<InputMaybe<ProfileLayoutStyle>>>;
  /** Any other value that exists and is not equal to the given value. */
  profileLayoutStyle_not?: InputMaybe<ProfileLayoutStyle>;
  /** All values that are not contained in given list. */
  profileLayoutStyle_not_in?: InputMaybe<Array<InputMaybe<ProfileLayoutStyle>>>;
  profileSectionTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  profileSectionTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  profileSectionTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  profileSectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  profileSectionTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  profileSectionTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  profileSectionTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  profileSectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  profileSectionTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  profileSectionTitle_starts_with?: InputMaybe<Scalars['String']>;
  profilesQuery?: InputMaybe<ProfilesSelect>;
  /** All values that are contained in given list. */
  profilesQuery_in?: InputMaybe<Array<InputMaybe<ProfilesSelect>>>;
  /** Any other value that exists and is not equal to the given value. */
  profilesQuery_not?: InputMaybe<ProfilesSelect>;
  /** All values that are not contained in given list. */
  profilesQuery_not_in?: InputMaybe<Array<InputMaybe<ProfilesSelect>>>;
  standOutText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  standOutText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  standOutText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  standOutText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  standOutText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  standOutText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  standOutText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  standOutText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  standOutText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  standOutText_starts_with?: InputMaybe<Scalars['String']>;
  stripePricingTableId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  stripePricingTableId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  stripePricingTableId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stripePricingTableId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  stripePricingTableId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  stripePricingTableId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  stripePricingTableId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stripePricingTableId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  stripePricingTableId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  stripePricingTableId_starts_with?: InputMaybe<Scalars['String']>;
  testimonialsQuery?: InputMaybe<TestimonialType>;
  /** All values that are contained in given list. */
  testimonialsQuery_in?: InputMaybe<Array<InputMaybe<TestimonialType>>>;
  /** Any other value that exists and is not equal to the given value. */
  testimonialsQuery_not?: InputMaybe<TestimonialType>;
  /** All values that are not contained in given list. */
  testimonialsQuery_not_in?: InputMaybe<Array<InputMaybe<TestimonialType>>>;
  textContent_every?: InputMaybe<TextContentWhereInput>;
  textContent_none?: InputMaybe<TextContentWhereInput>;
  textContent_some?: InputMaybe<TextContentWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
};

/** References LayoutBlockColumn record uniquely */
export type LayoutBlockColumnWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type LayoutBlockConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LayoutBlockWhereUniqueInput;
};

/** A connection to a list of items. */
export type LayoutBlockConnection = {
  __typename?: 'LayoutBlockConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LayoutBlockEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LayoutBlockCreateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  backgroundImage?: InputMaybe<AssetCreateOneInlineInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  layoutBlockColumns?: InputMaybe<LayoutBlockColumnCreateManyInlineInput>;
};

export type LayoutBlockCreateManyInlineInput = {
  /** Create and connect multiple existing LayoutBlock documents */
  create?: InputMaybe<Array<LayoutBlockCreateInput>>;
};

export type LayoutBlockCreateOneInlineInput = {
  /** Create and connect one LayoutBlock document */
  create?: InputMaybe<LayoutBlockCreateInput>;
};

export type LayoutBlockCreateWithPositionInput = {
  /** Document to create */
  data: LayoutBlockCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LayoutBlockEdge = {
  __typename?: 'LayoutBlockEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LayoutBlock;
};

/** Identifies documents */
export type LayoutBlockManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LayoutBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LayoutBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LayoutBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  layoutBlockColumns_every?: InputMaybe<LayoutBlockColumnWhereInput>;
  layoutBlockColumns_none?: InputMaybe<LayoutBlockColumnWhereInput>;
  layoutBlockColumns_some?: InputMaybe<LayoutBlockColumnWhereInput>;
};

export enum LayoutBlockOrderByInput {
  CssClassAsc = 'cssClass_ASC',
  CssClassDesc = 'cssClass_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type LayoutBlockParent = Page;

export type LayoutBlockParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type LayoutBlockParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type LayoutBlockParentCreateManyInlineInput = {
  /** Connect multiple existing LayoutBlockParent documents */
  connect?: InputMaybe<Array<LayoutBlockParentWhereUniqueInput>>;
  /** Create and connect multiple existing LayoutBlockParent documents */
  create?: InputMaybe<Array<LayoutBlockParentCreateInput>>;
};

export type LayoutBlockParentCreateOneInlineInput = {
  /** Connect one existing LayoutBlockParent document */
  connect?: InputMaybe<LayoutBlockParentWhereUniqueInput>;
  /** Create and connect one LayoutBlockParent document */
  create?: InputMaybe<LayoutBlockParentCreateInput>;
};

export type LayoutBlockParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type LayoutBlockParentUpdateManyInlineInput = {
  /** Connect multiple existing LayoutBlockParent documents */
  connect?: InputMaybe<Array<LayoutBlockParentConnectInput>>;
  /** Create and connect multiple LayoutBlockParent documents */
  create?: InputMaybe<Array<LayoutBlockParentCreateInput>>;
  /** Delete multiple LayoutBlockParent documents */
  delete?: InputMaybe<Array<LayoutBlockParentWhereUniqueInput>>;
  /** Disconnect multiple LayoutBlockParent documents */
  disconnect?: InputMaybe<Array<LayoutBlockParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LayoutBlockParent documents */
  set?: InputMaybe<Array<LayoutBlockParentWhereUniqueInput>>;
  /** Update multiple LayoutBlockParent documents */
  update?: InputMaybe<Array<LayoutBlockParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LayoutBlockParent documents */
  upsert?: InputMaybe<Array<LayoutBlockParentUpsertWithNestedWhereUniqueInput>>;
};

export type LayoutBlockParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type LayoutBlockParentUpdateOneInlineInput = {
  /** Connect existing LayoutBlockParent document */
  connect?: InputMaybe<LayoutBlockParentWhereUniqueInput>;
  /** Create and connect one LayoutBlockParent document */
  create?: InputMaybe<LayoutBlockParentCreateInput>;
  /** Delete currently connected LayoutBlockParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected LayoutBlockParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single LayoutBlockParent document */
  update?: InputMaybe<LayoutBlockParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LayoutBlockParent document */
  upsert?: InputMaybe<LayoutBlockParentUpsertWithNestedWhereUniqueInput>;
};

export type LayoutBlockParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type LayoutBlockParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type LayoutBlockParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type LayoutBlockParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type LayoutBlockUpdateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  backgroundImage?: InputMaybe<AssetUpdateOneInlineInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  layoutBlockColumns?: InputMaybe<LayoutBlockColumnUpdateManyInlineInput>;
};

export type LayoutBlockUpdateManyInlineInput = {
  /** Create and connect multiple LayoutBlock component instances */
  create?: InputMaybe<Array<LayoutBlockCreateWithPositionInput>>;
  /** Delete multiple LayoutBlock documents */
  delete?: InputMaybe<Array<LayoutBlockWhereUniqueInput>>;
  /** Update multiple LayoutBlock component instances */
  update?: InputMaybe<Array<LayoutBlockUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple LayoutBlock component instances */
  upsert?: InputMaybe<Array<LayoutBlockUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LayoutBlockUpdateManyInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  cssClass?: InputMaybe<Scalars['String']>;
};

export type LayoutBlockUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LayoutBlockUpdateManyInput;
  /** Document search */
  where: LayoutBlockWhereInput;
};

export type LayoutBlockUpdateOneInlineInput = {
  /** Create and connect one LayoutBlock document */
  create?: InputMaybe<LayoutBlockCreateInput>;
  /** Delete currently connected LayoutBlock document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single LayoutBlock document */
  update?: InputMaybe<LayoutBlockUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LayoutBlock document */
  upsert?: InputMaybe<LayoutBlockUpsertWithNestedWhereUniqueInput>;
};

export type LayoutBlockUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LayoutBlockUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LayoutBlockWhereUniqueInput;
};

export type LayoutBlockUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LayoutBlockUpdateInput;
  /** Unique document search */
  where: LayoutBlockWhereUniqueInput;
};

export type LayoutBlockUpsertInput = {
  /** Create document if it didn't exist */
  create: LayoutBlockCreateInput;
  /** Update document if it exists */
  update: LayoutBlockUpdateInput;
};

export type LayoutBlockUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LayoutBlockUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LayoutBlockWhereUniqueInput;
};

export type LayoutBlockUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LayoutBlockUpsertInput;
  /** Unique document search */
  where: LayoutBlockWhereUniqueInput;
};

/** Identifies documents */
export type LayoutBlockWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LayoutBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LayoutBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LayoutBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  backgroundImage?: InputMaybe<AssetWhereInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  layoutBlockColumns_every?: InputMaybe<LayoutBlockColumnWhereInput>;
  layoutBlockColumns_none?: InputMaybe<LayoutBlockColumnWhereInput>;
  layoutBlockColumns_some?: InputMaybe<LayoutBlockColumnWhereInput>;
};

/** References LayoutBlock record uniquely */
export type LayoutBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LogoTable = Node & {
  __typename?: 'LogoTable';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<LogoTable>;
  /** List of LogoTable versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  logoImage?: Maybe<Asset>;
  logoLink?: Maybe<Scalars['String']>;
  logoName?: Maybe<Scalars['String']>;
  logoType?: Maybe<LogoTableItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type LogoTableCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LogoTableDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type LogoTableHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type LogoTableLogoImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LogoTablePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LogoTableScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LogoTableUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type LogoTableConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LogoTableWhereUniqueInput;
};

/** A connection to a list of items. */
export type LogoTableConnection = {
  __typename?: 'LogoTableConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LogoTableEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LogoTableCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  logoImage?: InputMaybe<AssetCreateOneInlineInput>;
  logoLink?: InputMaybe<Scalars['String']>;
  logoName?: InputMaybe<Scalars['String']>;
  logoType?: InputMaybe<LogoTableItem>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LogoTableCreateManyInlineInput = {
  /** Connect multiple existing LogoTable documents */
  connect?: InputMaybe<Array<LogoTableWhereUniqueInput>>;
  /** Create and connect multiple existing LogoTable documents */
  create?: InputMaybe<Array<LogoTableCreateInput>>;
};

export type LogoTableCreateOneInlineInput = {
  /** Connect one existing LogoTable document */
  connect?: InputMaybe<LogoTableWhereUniqueInput>;
  /** Create and connect one LogoTable document */
  create?: InputMaybe<LogoTableCreateInput>;
};

/** An edge in a connection. */
export type LogoTableEdge = {
  __typename?: 'LogoTableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LogoTable;
};

/** Logo Type */
export enum LogoTableItem {
  Client = 'Client',
  Partner = 'Partner',
  Venture = 'Venture'
}

/** Identifies documents */
export type LogoTableManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogoTableWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogoTableWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogoTableWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LogoTableWhereStageInput>;
  documentInStages_none?: InputMaybe<LogoTableWhereStageInput>;
  documentInStages_some?: InputMaybe<LogoTableWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  logoImage?: InputMaybe<AssetWhereInput>;
  logoLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  logoLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  logoLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  logoLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  logoLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  logoLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  logoLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  logoLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  logoLink_starts_with?: InputMaybe<Scalars['String']>;
  logoName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  logoName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  logoName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  logoName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  logoName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  logoName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  logoName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  logoName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  logoName_starts_with?: InputMaybe<Scalars['String']>;
  logoType?: InputMaybe<LogoTableItem>;
  /** All values that are contained in given list. */
  logoType_in?: InputMaybe<Array<InputMaybe<LogoTableItem>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoType_not?: InputMaybe<LogoTableItem>;
  /** All values that are not contained in given list. */
  logoType_not_in?: InputMaybe<Array<InputMaybe<LogoTableItem>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LogoTableOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LogoLinkAsc = 'logoLink_ASC',
  LogoLinkDesc = 'logoLink_DESC',
  LogoNameAsc = 'logoName_ASC',
  LogoNameDesc = 'logoName_DESC',
  LogoTypeAsc = 'logoType_ASC',
  LogoTypeDesc = 'logoType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LogoTableUpdateInput = {
  logoImage?: InputMaybe<AssetUpdateOneInlineInput>;
  logoLink?: InputMaybe<Scalars['String']>;
  logoName?: InputMaybe<Scalars['String']>;
  logoType?: InputMaybe<LogoTableItem>;
};

export type LogoTableUpdateManyInlineInput = {
  /** Connect multiple existing LogoTable documents */
  connect?: InputMaybe<Array<LogoTableConnectInput>>;
  /** Create and connect multiple LogoTable documents */
  create?: InputMaybe<Array<LogoTableCreateInput>>;
  /** Delete multiple LogoTable documents */
  delete?: InputMaybe<Array<LogoTableWhereUniqueInput>>;
  /** Disconnect multiple LogoTable documents */
  disconnect?: InputMaybe<Array<LogoTableWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LogoTable documents */
  set?: InputMaybe<Array<LogoTableWhereUniqueInput>>;
  /** Update multiple LogoTable documents */
  update?: InputMaybe<Array<LogoTableUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LogoTable documents */
  upsert?: InputMaybe<Array<LogoTableUpsertWithNestedWhereUniqueInput>>;
};

export type LogoTableUpdateManyInput = {
  logoLink?: InputMaybe<Scalars['String']>;
  logoName?: InputMaybe<Scalars['String']>;
  logoType?: InputMaybe<LogoTableItem>;
};

export type LogoTableUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LogoTableUpdateManyInput;
  /** Document search */
  where: LogoTableWhereInput;
};

export type LogoTableUpdateOneInlineInput = {
  /** Connect existing LogoTable document */
  connect?: InputMaybe<LogoTableWhereUniqueInput>;
  /** Create and connect one LogoTable document */
  create?: InputMaybe<LogoTableCreateInput>;
  /** Delete currently connected LogoTable document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected LogoTable document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single LogoTable document */
  update?: InputMaybe<LogoTableUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LogoTable document */
  upsert?: InputMaybe<LogoTableUpsertWithNestedWhereUniqueInput>;
};

export type LogoTableUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LogoTableUpdateInput;
  /** Unique document search */
  where: LogoTableWhereUniqueInput;
};

export type LogoTableUpsertInput = {
  /** Create document if it didn't exist */
  create: LogoTableCreateInput;
  /** Update document if it exists */
  update: LogoTableUpdateInput;
};

export type LogoTableUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LogoTableUpsertInput;
  /** Unique document search */
  where: LogoTableWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LogoTableWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type LogoTableWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogoTableWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogoTableWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogoTableWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LogoTableWhereStageInput>;
  documentInStages_none?: InputMaybe<LogoTableWhereStageInput>;
  documentInStages_some?: InputMaybe<LogoTableWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  logoImage?: InputMaybe<AssetWhereInput>;
  logoLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  logoLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  logoLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  logoLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  logoLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  logoLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  logoLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  logoLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  logoLink_starts_with?: InputMaybe<Scalars['String']>;
  logoName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  logoName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  logoName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  logoName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  logoName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  logoName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  logoName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  logoName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  logoName_starts_with?: InputMaybe<Scalars['String']>;
  logoType?: InputMaybe<LogoTableItem>;
  /** All values that are contained in given list. */
  logoType_in?: InputMaybe<Array<InputMaybe<LogoTableItem>>>;
  /** Any other value that exists and is not equal to the given value. */
  logoType_not?: InputMaybe<LogoTableItem>;
  /** All values that are not contained in given list. */
  logoType_not_in?: InputMaybe<Array<InputMaybe<LogoTableItem>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LogoTableWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LogoTableWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LogoTableWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LogoTableWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LogoTableWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References LogoTable record uniquely */
export type LogoTableWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum MediaType {
  Image = 'image',
  Video = 'video'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one album */
  createAlbum?: Maybe<Album>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one blog */
  createBlog?: Maybe<Blog>;
  /** Create one event */
  createEvent?: Maybe<Event>;
  /** Create one logoTable */
  createLogoTable?: Maybe<LogoTable>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one profile */
  createProfile?: Maybe<Profile>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one siteLibrary */
  createSiteLibrary?: Maybe<SiteLibrary>;
  /** Create one testimonial */
  createTestimonial?: Maybe<Testimonial>;
  /** Delete one album from _all_ existing stages. Returns deleted document. */
  deleteAlbum?: Maybe<Album>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one blog from _all_ existing stages. Returns deleted document. */
  deleteBlog?: Maybe<Blog>;
  /** Delete one event from _all_ existing stages. Returns deleted document. */
  deleteEvent?: Maybe<Event>;
  /** Delete one logoTable from _all_ existing stages. Returns deleted document. */
  deleteLogoTable?: Maybe<LogoTable>;
  /**
   * Delete many Album documents
   * @deprecated Please use the new paginated many mutation (deleteManyAlbumsConnection)
   */
  deleteManyAlbums: BatchPayload;
  /** Delete many Album documents, return deleted documents */
  deleteManyAlbumsConnection: AlbumConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Blog documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogsConnection)
   */
  deleteManyBlogs: BatchPayload;
  /** Delete many Blog documents, return deleted documents */
  deleteManyBlogsConnection: BlogConnection;
  /**
   * Delete many Event documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventsConnection)
   */
  deleteManyEvents: BatchPayload;
  /** Delete many Event documents, return deleted documents */
  deleteManyEventsConnection: EventConnection;
  /**
   * Delete many LogoTable documents
   * @deprecated Please use the new paginated many mutation (deleteManyLogoTablesConnection)
   */
  deleteManyLogoTables: BatchPayload;
  /** Delete many LogoTable documents, return deleted documents */
  deleteManyLogoTablesConnection: LogoTableConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Profile documents
   * @deprecated Please use the new paginated many mutation (deleteManyProfilesConnection)
   */
  deleteManyProfiles: BatchPayload;
  /** Delete many Profile documents, return deleted documents */
  deleteManyProfilesConnection: ProfileConnection;
  /**
   * Delete many SiteLibrary documents
   * @deprecated Please use the new paginated many mutation (deleteManySiteLibrariesConnection)
   */
  deleteManySiteLibraries: BatchPayload;
  /** Delete many SiteLibrary documents, return deleted documents */
  deleteManySiteLibrariesConnection: SiteLibraryConnection;
  /**
   * Delete many Testimonial documents
   * @deprecated Please use the new paginated many mutation (deleteManyTestimonialsConnection)
   */
  deleteManyTestimonials: BatchPayload;
  /** Delete many Testimonial documents, return deleted documents */
  deleteManyTestimonialsConnection: TestimonialConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one profile from _all_ existing stages. Returns deleted document. */
  deleteProfile?: Maybe<Profile>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one siteLibrary from _all_ existing stages. Returns deleted document. */
  deleteSiteLibrary?: Maybe<SiteLibrary>;
  /** Delete one testimonial from _all_ existing stages. Returns deleted document. */
  deleteTestimonial?: Maybe<Testimonial>;
  /** Publish one album */
  publishAlbum?: Maybe<Album>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one blog */
  publishBlog?: Maybe<Blog>;
  /** Publish one event */
  publishEvent?: Maybe<Event>;
  /** Publish one logoTable */
  publishLogoTable?: Maybe<LogoTable>;
  /**
   * Publish many Album documents
   * @deprecated Please use the new paginated many mutation (publishManyAlbumsConnection)
   */
  publishManyAlbums: BatchPayload;
  /** Publish many Album documents */
  publishManyAlbumsConnection: AlbumConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Blog documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogsConnection)
   */
  publishManyBlogs: BatchPayload;
  /** Publish many Blog documents */
  publishManyBlogsConnection: BlogConnection;
  /**
   * Publish many Event documents
   * @deprecated Please use the new paginated many mutation (publishManyEventsConnection)
   */
  publishManyEvents: BatchPayload;
  /** Publish many Event documents */
  publishManyEventsConnection: EventConnection;
  /**
   * Publish many LogoTable documents
   * @deprecated Please use the new paginated many mutation (publishManyLogoTablesConnection)
   */
  publishManyLogoTables: BatchPayload;
  /** Publish many LogoTable documents */
  publishManyLogoTablesConnection: LogoTableConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Profile documents
   * @deprecated Please use the new paginated many mutation (publishManyProfilesConnection)
   */
  publishManyProfiles: BatchPayload;
  /** Publish many Profile documents */
  publishManyProfilesConnection: ProfileConnection;
  /**
   * Publish many SiteLibrary documents
   * @deprecated Please use the new paginated many mutation (publishManySiteLibrariesConnection)
   */
  publishManySiteLibraries: BatchPayload;
  /** Publish many SiteLibrary documents */
  publishManySiteLibrariesConnection: SiteLibraryConnection;
  /**
   * Publish many Testimonial documents
   * @deprecated Please use the new paginated many mutation (publishManyTestimonialsConnection)
   */
  publishManyTestimonials: BatchPayload;
  /** Publish many Testimonial documents */
  publishManyTestimonialsConnection: TestimonialConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one profile */
  publishProfile?: Maybe<Profile>;
  /** Publish one siteLibrary */
  publishSiteLibrary?: Maybe<SiteLibrary>;
  /** Publish one testimonial */
  publishTestimonial?: Maybe<Testimonial>;
  /** Schedule to publish one album */
  schedulePublishAlbum?: Maybe<Album>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one blog */
  schedulePublishBlog?: Maybe<Blog>;
  /** Schedule to publish one event */
  schedulePublishEvent?: Maybe<Event>;
  /** Schedule to publish one logoTable */
  schedulePublishLogoTable?: Maybe<LogoTable>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one profile */
  schedulePublishProfile?: Maybe<Profile>;
  /** Schedule to publish one siteLibrary */
  schedulePublishSiteLibrary?: Maybe<SiteLibrary>;
  /** Schedule to publish one testimonial */
  schedulePublishTestimonial?: Maybe<Testimonial>;
  /** Unpublish one album from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAlbum?: Maybe<Album>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBlog?: Maybe<Blog>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEvent?: Maybe<Event>;
  /** Unpublish one logoTable from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLogoTable?: Maybe<LogoTable>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one profile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProfile?: Maybe<Profile>;
  /** Unpublish one siteLibrary from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSiteLibrary?: Maybe<SiteLibrary>;
  /** Unpublish one testimonial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTestimonial?: Maybe<Testimonial>;
  /** Unpublish one album from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAlbum?: Maybe<Album>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlog?: Maybe<Blog>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEvent?: Maybe<Event>;
  /** Unpublish one logoTable from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLogoTable?: Maybe<LogoTable>;
  /**
   * Unpublish many Album documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAlbumsConnection)
   */
  unpublishManyAlbums: BatchPayload;
  /** Find many Album documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAlbumsConnection: AlbumConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Blog documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogsConnection)
   */
  unpublishManyBlogs: BatchPayload;
  /** Find many Blog documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogsConnection: BlogConnection;
  /**
   * Unpublish many Event documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventsConnection)
   */
  unpublishManyEvents: BatchPayload;
  /** Find many Event documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventsConnection: EventConnection;
  /**
   * Unpublish many LogoTable documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLogoTablesConnection)
   */
  unpublishManyLogoTables: BatchPayload;
  /** Find many LogoTable documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLogoTablesConnection: LogoTableConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Profile documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProfilesConnection)
   */
  unpublishManyProfiles: BatchPayload;
  /** Find many Profile documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProfilesConnection: ProfileConnection;
  /**
   * Unpublish many SiteLibrary documents
   * @deprecated Please use the new paginated many mutation (unpublishManySiteLibrariesConnection)
   */
  unpublishManySiteLibraries: BatchPayload;
  /** Find many SiteLibrary documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySiteLibrariesConnection: SiteLibraryConnection;
  /**
   * Unpublish many Testimonial documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTestimonialsConnection)
   */
  unpublishManyTestimonials: BatchPayload;
  /** Find many Testimonial documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTestimonialsConnection: TestimonialConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one profile from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProfile?: Maybe<Profile>;
  /** Unpublish one siteLibrary from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSiteLibrary?: Maybe<SiteLibrary>;
  /** Unpublish one testimonial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTestimonial?: Maybe<Testimonial>;
  /** Update one album */
  updateAlbum?: Maybe<Album>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one blog */
  updateBlog?: Maybe<Blog>;
  /** Update one event */
  updateEvent?: Maybe<Event>;
  /** Update one logoTable */
  updateLogoTable?: Maybe<LogoTable>;
  /**
   * Update many albums
   * @deprecated Please use the new paginated many mutation (updateManyAlbumsConnection)
   */
  updateManyAlbums: BatchPayload;
  /** Update many Album documents */
  updateManyAlbumsConnection: AlbumConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many blogs
   * @deprecated Please use the new paginated many mutation (updateManyBlogsConnection)
   */
  updateManyBlogs: BatchPayload;
  /** Update many Blog documents */
  updateManyBlogsConnection: BlogConnection;
  /**
   * Update many events
   * @deprecated Please use the new paginated many mutation (updateManyEventsConnection)
   */
  updateManyEvents: BatchPayload;
  /** Update many Event documents */
  updateManyEventsConnection: EventConnection;
  /**
   * Update many logoTables
   * @deprecated Please use the new paginated many mutation (updateManyLogoTablesConnection)
   */
  updateManyLogoTables: BatchPayload;
  /** Update many LogoTable documents */
  updateManyLogoTablesConnection: LogoTableConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many profiles
   * @deprecated Please use the new paginated many mutation (updateManyProfilesConnection)
   */
  updateManyProfiles: BatchPayload;
  /** Update many Profile documents */
  updateManyProfilesConnection: ProfileConnection;
  /**
   * Update many siteLibraries
   * @deprecated Please use the new paginated many mutation (updateManySiteLibrariesConnection)
   */
  updateManySiteLibraries: BatchPayload;
  /** Update many SiteLibrary documents */
  updateManySiteLibrariesConnection: SiteLibraryConnection;
  /**
   * Update many testimonials
   * @deprecated Please use the new paginated many mutation (updateManyTestimonialsConnection)
   */
  updateManyTestimonials: BatchPayload;
  /** Update many Testimonial documents */
  updateManyTestimonialsConnection: TestimonialConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one profile */
  updateProfile?: Maybe<Profile>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one siteLibrary */
  updateSiteLibrary?: Maybe<SiteLibrary>;
  /** Update one testimonial */
  updateTestimonial?: Maybe<Testimonial>;
  /** Upsert one album */
  upsertAlbum?: Maybe<Album>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one blog */
  upsertBlog?: Maybe<Blog>;
  /** Upsert one event */
  upsertEvent?: Maybe<Event>;
  /** Upsert one logoTable */
  upsertLogoTable?: Maybe<LogoTable>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one profile */
  upsertProfile?: Maybe<Profile>;
  /** Upsert one siteLibrary */
  upsertSiteLibrary?: Maybe<SiteLibrary>;
  /** Upsert one testimonial */
  upsertTestimonial?: Maybe<Testimonial>;
};


export type MutationCreateAlbumArgs = {
  data: AlbumCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBlogArgs = {
  data: BlogCreateInput;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateLogoTableArgs = {
  data: LogoTableCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSiteLibraryArgs = {
  data: SiteLibraryCreateInput;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialCreateInput;
};


export type MutationDeleteAlbumArgs = {
  where: AlbumWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteLogoTableArgs = {
  where: LogoTableWhereUniqueInput;
};


export type MutationDeleteManyAlbumsArgs = {
  where?: InputMaybe<AlbumManyWhereInput>;
};


export type MutationDeleteManyAlbumsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlbumManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBlogsArgs = {
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationDeleteManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationDeleteManyEventsArgs = {
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationDeleteManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationDeleteManyLogoTablesArgs = {
  where?: InputMaybe<LogoTableManyWhereInput>;
};


export type MutationDeleteManyLogoTablesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogoTableManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyProfilesArgs = {
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationDeleteManyProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationDeleteManySiteLibrariesArgs = {
  where?: InputMaybe<SiteLibraryManyWhereInput>;
};


export type MutationDeleteManySiteLibrariesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteLibraryManyWhereInput>;
};


export type MutationDeleteManyTestimonialsArgs = {
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationDeleteManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSiteLibraryArgs = {
  where: SiteLibraryWhereUniqueInput;
};


export type MutationDeleteTestimonialArgs = {
  where: TestimonialWhereUniqueInput;
};


export type MutationPublishAlbumArgs = {
  to?: Array<Stage>;
  where: AlbumWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishBlogArgs = {
  to?: Array<Stage>;
  where: BlogWhereUniqueInput;
};


export type MutationPublishEventArgs = {
  to?: Array<Stage>;
  where: EventWhereUniqueInput;
};


export type MutationPublishLogoTableArgs = {
  to?: Array<Stage>;
  where: LogoTableWhereUniqueInput;
};


export type MutationPublishManyAlbumsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AlbumManyWhereInput>;
};


export type MutationPublishManyAlbumsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AlbumManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyBlogsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationPublishManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationPublishManyEventsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationPublishManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationPublishManyLogoTablesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LogoTableManyWhereInput>;
};


export type MutationPublishManyLogoTablesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LogoTableManyWhereInput>;
};


export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyProfilesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationPublishManyProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationPublishManySiteLibrariesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SiteLibraryManyWhereInput>;
};


export type MutationPublishManySiteLibrariesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SiteLibraryManyWhereInput>;
};


export type MutationPublishManyTestimonialsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationPublishManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishProfileArgs = {
  to?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationPublishSiteLibraryArgs = {
  to?: Array<Stage>;
  where: SiteLibraryWhereUniqueInput;
};


export type MutationPublishTestimonialArgs = {
  to?: Array<Stage>;
  where: TestimonialWhereUniqueInput;
};


export type MutationSchedulePublishAlbumArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AlbumWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishBlogArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: BlogWhereUniqueInput;
};


export type MutationSchedulePublishEventArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: EventWhereUniqueInput;
};


export type MutationSchedulePublishLogoTableArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LogoTableWhereUniqueInput;
};


export type MutationSchedulePublishNavigationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishProfileArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationSchedulePublishSiteLibraryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SiteLibraryWhereUniqueInput;
};


export type MutationSchedulePublishTestimonialArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TestimonialWhereUniqueInput;
};


export type MutationScheduleUnpublishAlbumArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AlbumWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBlogArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: BlogWhereUniqueInput;
};


export type MutationScheduleUnpublishEventArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: EventWhereUniqueInput;
};


export type MutationScheduleUnpublishLogoTableArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LogoTableWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishProfileArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProfileWhereUniqueInput;
};


export type MutationScheduleUnpublishSiteLibraryArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SiteLibraryWhereUniqueInput;
};


export type MutationScheduleUnpublishTestimonialArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TestimonialWhereUniqueInput;
};


export type MutationUnpublishAlbumArgs = {
  from?: Array<Stage>;
  where: AlbumWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBlogArgs = {
  from?: Array<Stage>;
  where: BlogWhereUniqueInput;
};


export type MutationUnpublishEventArgs = {
  from?: Array<Stage>;
  where: EventWhereUniqueInput;
};


export type MutationUnpublishLogoTableArgs = {
  from?: Array<Stage>;
  where: LogoTableWhereUniqueInput;
};


export type MutationUnpublishManyAlbumsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AlbumManyWhereInput>;
};


export type MutationUnpublishManyAlbumsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AlbumManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBlogsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationUnpublishManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationUnpublishManyEventsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationUnpublishManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationUnpublishManyLogoTablesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LogoTableManyWhereInput>;
};


export type MutationUnpublishManyLogoTablesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LogoTableManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyProfilesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationUnpublishManyProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationUnpublishManySiteLibrariesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SiteLibraryManyWhereInput>;
};


export type MutationUnpublishManySiteLibrariesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SiteLibraryManyWhereInput>;
};


export type MutationUnpublishManyTestimonialsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUnpublishManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishProfileArgs = {
  from?: Array<Stage>;
  where: ProfileWhereUniqueInput;
};


export type MutationUnpublishSiteLibraryArgs = {
  from?: Array<Stage>;
  where: SiteLibraryWhereUniqueInput;
};


export type MutationUnpublishTestimonialArgs = {
  from?: Array<Stage>;
  where: TestimonialWhereUniqueInput;
};


export type MutationUpdateAlbumArgs = {
  data: AlbumUpdateInput;
  where: AlbumWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBlogArgs = {
  data: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateLogoTableArgs = {
  data: LogoTableUpdateInput;
  where: LogoTableWhereUniqueInput;
};


export type MutationUpdateManyAlbumsArgs = {
  data: AlbumUpdateManyInput;
  where?: InputMaybe<AlbumManyWhereInput>;
};


export type MutationUpdateManyAlbumsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AlbumUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlbumManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBlogsArgs = {
  data: BlogUpdateManyInput;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationUpdateManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: BlogUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationUpdateManyEventsArgs = {
  data: EventUpdateManyInput;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationUpdateManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: EventUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationUpdateManyLogoTablesArgs = {
  data: LogoTableUpdateManyInput;
  where?: InputMaybe<LogoTableManyWhereInput>;
};


export type MutationUpdateManyLogoTablesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LogoTableUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LogoTableManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NavigationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyProfilesArgs = {
  data: ProfileUpdateManyInput;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationUpdateManyProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProfileUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileManyWhereInput>;
};


export type MutationUpdateManySiteLibrariesArgs = {
  data: SiteLibraryUpdateManyInput;
  where?: InputMaybe<SiteLibraryManyWhereInput>;
};


export type MutationUpdateManySiteLibrariesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SiteLibraryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SiteLibraryManyWhereInput>;
};


export type MutationUpdateManyTestimonialsArgs = {
  data: TestimonialUpdateManyInput;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUpdateManyTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TestimonialUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestimonialManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSiteLibraryArgs = {
  data: SiteLibraryUpdateInput;
  where: SiteLibraryWhereUniqueInput;
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialUpdateInput;
  where: TestimonialWhereUniqueInput;
};


export type MutationUpsertAlbumArgs = {
  upsert: AlbumUpsertInput;
  where: AlbumWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBlogArgs = {
  upsert: BlogUpsertInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpsertEventArgs = {
  upsert: EventUpsertInput;
  where: EventWhereUniqueInput;
};


export type MutationUpsertLogoTableArgs = {
  upsert: LogoTableUpsertInput;
  where: LogoTableWhereUniqueInput;
};


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertProfileArgs = {
  upsert: ProfileUpsertInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpsertSiteLibraryArgs = {
  upsert: SiteLibraryUpsertInput;
  where: SiteLibraryWhereUniqueInput;
};


export type MutationUpsertTestimonialArgs = {
  upsert: TestimonialUpsertInput;
  where: TestimonialWhereUniqueInput;
};

export type Navigation = Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  footerColumns: Array<FooterColumn>;
  /** ie: terms, privacy, etc */
  footerItems: Array<NavigationItem>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  items: Array<NavigationItem>;
  navigationLayoutStyle?: Maybe<NavigationLayout>;
  navigationLogo?: Maybe<Asset>;
  pageNavigationSelection?: Maybe<PageNavigationSelection>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NavigationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type NavigationFooterColumnsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FooterColumnOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterColumnWhereInput>;
};


export type NavigationFooterItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemWhereInput>;
};


export type NavigationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type NavigationItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemWhereInput>;
};


export type NavigationNavigationLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NavigationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  footerColumns?: InputMaybe<FooterColumnCreateManyInlineInput>;
  footerItems?: InputMaybe<NavigationItemCreateManyInlineInput>;
  items?: InputMaybe<NavigationItemCreateManyInlineInput>;
  navigationLayoutStyle?: InputMaybe<NavigationLayout>;
  navigationLogo?: InputMaybe<AssetCreateOneInlineInput>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Navigation;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  cssClass?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  items: Array<NavigationItem>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  primaryItem?: Maybe<Scalars['Boolean']>;
  sameTab?: Maybe<Scalars['Boolean']>;
  /** System stage field */
  stage: Stage;
};


export type NavigationItemImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationItemItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NavigationItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationItemWhereInput>;
};

export type NavigationItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationItemConnection = {
  __typename?: 'NavigationItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationItemCreateInput = {
  cssClass?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  items?: InputMaybe<NavigationItemCreateManyInlineInput>;
  label?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  primaryItem?: InputMaybe<Scalars['Boolean']>;
  sameTab?: InputMaybe<Scalars['Boolean']>;
};

export type NavigationItemCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationItem documents */
  create?: InputMaybe<Array<NavigationItemCreateInput>>;
};

export type NavigationItemCreateOneInlineInput = {
  /** Create and connect one NavigationItem document */
  create?: InputMaybe<NavigationItemCreateInput>;
};

export type NavigationItemCreateWithPositionInput = {
  /** Document to create */
  data: NavigationItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type NavigationItemEdge = {
  __typename?: 'NavigationItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: NavigationItem;
};

/** Identifies documents */
export type NavigationItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  items_every?: InputMaybe<NavigationItemWhereInput>;
  items_none?: InputMaybe<NavigationItemWhereInput>;
  items_some?: InputMaybe<NavigationItemWhereInput>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  primaryItem?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  primaryItem_not?: InputMaybe<Scalars['Boolean']>;
  sameTab?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  sameTab_not?: InputMaybe<Scalars['Boolean']>;
};

export enum NavigationItemOrderByInput {
  CssClassAsc = 'cssClass_ASC',
  CssClassDesc = 'cssClass_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PrimaryItemAsc = 'primaryItem_ASC',
  PrimaryItemDesc = 'primaryItem_DESC',
  SameTabAsc = 'sameTab_ASC',
  SameTabDesc = 'sameTab_DESC'
}

export type NavigationItemParent = FooterColumn | Navigation | NavigationItem;

export type NavigationItemParentConnectInput = {
  FooterColumn?: InputMaybe<FooterColumnConnectInput>;
  Navigation?: InputMaybe<NavigationConnectInput>;
  NavigationItem?: InputMaybe<NavigationItemConnectInput>;
};

export type NavigationItemParentCreateInput = {
  FooterColumn?: InputMaybe<FooterColumnCreateInput>;
  Navigation?: InputMaybe<NavigationCreateInput>;
  NavigationItem?: InputMaybe<NavigationItemCreateInput>;
};

export type NavigationItemParentCreateManyInlineInput = {
  /** Connect multiple existing NavigationItemParent documents */
  connect?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>;
  /** Create and connect multiple existing NavigationItemParent documents */
  create?: InputMaybe<Array<NavigationItemParentCreateInput>>;
};

export type NavigationItemParentCreateOneInlineInput = {
  /** Connect one existing NavigationItemParent document */
  connect?: InputMaybe<NavigationItemParentWhereUniqueInput>;
  /** Create and connect one NavigationItemParent document */
  create?: InputMaybe<NavigationItemParentCreateInput>;
};

export type NavigationItemParentUpdateInput = {
  FooterColumn?: InputMaybe<FooterColumnUpdateInput>;
  Navigation?: InputMaybe<NavigationUpdateInput>;
  NavigationItem?: InputMaybe<NavigationItemUpdateInput>;
};

export type NavigationItemParentUpdateManyInlineInput = {
  /** Connect multiple existing NavigationItemParent documents */
  connect?: InputMaybe<Array<NavigationItemParentConnectInput>>;
  /** Create and connect multiple NavigationItemParent documents */
  create?: InputMaybe<Array<NavigationItemParentCreateInput>>;
  /** Delete multiple NavigationItemParent documents */
  delete?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>;
  /** Disconnect multiple NavigationItemParent documents */
  disconnect?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavigationItemParent documents */
  set?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>;
  /** Update multiple NavigationItemParent documents */
  update?: InputMaybe<Array<NavigationItemParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavigationItemParent documents */
  upsert?: InputMaybe<Array<NavigationItemParentUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationItemParentUpdateManyWithNestedWhereInput = {
  FooterColumn?: InputMaybe<FooterColumnUpdateManyWithNestedWhereInput>;
  Navigation?: InputMaybe<NavigationUpdateManyWithNestedWhereInput>;
  NavigationItem?: InputMaybe<NavigationItemUpdateManyWithNestedWhereInput>;
};

export type NavigationItemParentUpdateOneInlineInput = {
  /** Connect existing NavigationItemParent document */
  connect?: InputMaybe<NavigationItemParentWhereUniqueInput>;
  /** Create and connect one NavigationItemParent document */
  create?: InputMaybe<NavigationItemParentCreateInput>;
  /** Delete currently connected NavigationItemParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected NavigationItemParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single NavigationItemParent document */
  update?: InputMaybe<NavigationItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationItemParent document */
  upsert?: InputMaybe<NavigationItemParentUpsertWithNestedWhereUniqueInput>;
};

export type NavigationItemParentUpdateWithNestedWhereUniqueInput = {
  FooterColumn?: InputMaybe<FooterColumnUpdateWithNestedWhereUniqueInput>;
  Navigation?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  NavigationItem?: InputMaybe<NavigationItemUpdateWithNestedWhereUniqueInput>;
};

export type NavigationItemParentUpsertWithNestedWhereUniqueInput = {
  FooterColumn?: InputMaybe<FooterColumnUpsertWithNestedWhereUniqueInput>;
  Navigation?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
  NavigationItem?: InputMaybe<NavigationItemUpsertWithNestedWhereUniqueInput>;
};

export type NavigationItemParentWhereInput = {
  FooterColumn?: InputMaybe<FooterColumnWhereInput>;
  Navigation?: InputMaybe<NavigationWhereInput>;
  NavigationItem?: InputMaybe<NavigationItemWhereInput>;
};

export type NavigationItemParentWhereUniqueInput = {
  FooterColumn?: InputMaybe<FooterColumnWhereUniqueInput>;
  Navigation?: InputMaybe<NavigationWhereUniqueInput>;
  NavigationItem?: InputMaybe<NavigationItemWhereUniqueInput>;
};

export type NavigationItemUpdateInput = {
  cssClass?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  items?: InputMaybe<NavigationItemUpdateManyInlineInput>;
  label?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  primaryItem?: InputMaybe<Scalars['Boolean']>;
  sameTab?: InputMaybe<Scalars['Boolean']>;
};

export type NavigationItemUpdateManyInlineInput = {
  /** Create and connect multiple NavigationItem component instances */
  create?: InputMaybe<Array<NavigationItemCreateWithPositionInput>>;
  /** Delete multiple NavigationItem documents */
  delete?: InputMaybe<Array<NavigationItemWhereUniqueInput>>;
  /** Update multiple NavigationItem component instances */
  update?: InputMaybe<Array<NavigationItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple NavigationItem component instances */
  upsert?: InputMaybe<Array<NavigationItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type NavigationItemUpdateManyInput = {
  cssClass?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  primaryItem?: InputMaybe<Scalars['Boolean']>;
  sameTab?: InputMaybe<Scalars['Boolean']>;
};

export type NavigationItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationItemUpdateManyInput;
  /** Document search */
  where: NavigationItemWhereInput;
};

export type NavigationItemUpdateOneInlineInput = {
  /** Create and connect one NavigationItem document */
  create?: InputMaybe<NavigationItemCreateInput>;
  /** Delete currently connected NavigationItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single NavigationItem document */
  update?: InputMaybe<NavigationItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationItem document */
  upsert?: InputMaybe<NavigationItemUpsertWithNestedWhereUniqueInput>;
};

export type NavigationItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<NavigationItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavigationItemWhereUniqueInput;
};

export type NavigationItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationItemUpdateInput;
  /** Unique document search */
  where: NavigationItemWhereUniqueInput;
};

export type NavigationItemUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationItemCreateInput;
  /** Update document if it exists */
  update: NavigationItemUpdateInput;
};

export type NavigationItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<NavigationItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: NavigationItemWhereUniqueInput;
};

export type NavigationItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationItemUpsertInput;
  /** Unique document search */
  where: NavigationItemWhereUniqueInput;
};

/** Identifies documents */
export type NavigationItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  items_every?: InputMaybe<NavigationItemWhereInput>;
  items_none?: InputMaybe<NavigationItemWhereInput>;
  items_some?: InputMaybe<NavigationItemWhereInput>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  primaryItem?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  primaryItem_not?: InputMaybe<Scalars['Boolean']>;
  sameTab?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  sameTab_not?: InputMaybe<Scalars['Boolean']>;
};

/** References NavigationItem record uniquely */
export type NavigationItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum NavigationLayout {
  Between = 'between',
  Center = 'center',
  Mega = 'mega',
  Space = 'space',
  Start = 'start'
}

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  footerColumns_every?: InputMaybe<FooterColumnWhereInput>;
  footerColumns_none?: InputMaybe<FooterColumnWhereInput>;
  footerColumns_some?: InputMaybe<FooterColumnWhereInput>;
  footerItems_every?: InputMaybe<NavigationItemWhereInput>;
  footerItems_none?: InputMaybe<NavigationItemWhereInput>;
  footerItems_some?: InputMaybe<NavigationItemWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  items_every?: InputMaybe<NavigationItemWhereInput>;
  items_none?: InputMaybe<NavigationItemWhereInput>;
  items_some?: InputMaybe<NavigationItemWhereInput>;
  navigationLayoutStyle?: InputMaybe<NavigationLayout>;
  /** All values that are contained in given list. */
  navigationLayoutStyle_in?: InputMaybe<Array<InputMaybe<NavigationLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  navigationLayoutStyle_not?: InputMaybe<NavigationLayout>;
  /** All values that are not contained in given list. */
  navigationLayoutStyle_not_in?: InputMaybe<Array<InputMaybe<NavigationLayout>>>;
  navigationLogo?: InputMaybe<AssetWhereInput>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
  /** All values that are contained in given list. */
  pageNavigationSelection_in?: InputMaybe<Array<InputMaybe<PageNavigationSelection>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageNavigationSelection_not?: InputMaybe<PageNavigationSelection>;
  /** All values that are not contained in given list. */
  pageNavigationSelection_not_in?: InputMaybe<Array<InputMaybe<PageNavigationSelection>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NavigationLayoutStyleAsc = 'navigationLayoutStyle_ASC',
  NavigationLayoutStyleDesc = 'navigationLayoutStyle_DESC',
  PageNavigationSelectionAsc = 'pageNavigationSelection_ASC',
  PageNavigationSelectionDesc = 'pageNavigationSelection_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationUpdateInput = {
  footerColumns?: InputMaybe<FooterColumnUpdateManyInlineInput>;
  footerItems?: InputMaybe<NavigationItemUpdateManyInlineInput>;
  items?: InputMaybe<NavigationItemUpdateManyInlineInput>;
  navigationLayoutStyle?: InputMaybe<NavigationLayout>;
  navigationLogo?: InputMaybe<AssetUpdateOneInlineInput>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  navigationLayoutStyle?: InputMaybe<NavigationLayout>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  footerColumns_every?: InputMaybe<FooterColumnWhereInput>;
  footerColumns_none?: InputMaybe<FooterColumnWhereInput>;
  footerColumns_some?: InputMaybe<FooterColumnWhereInput>;
  footerItems_every?: InputMaybe<NavigationItemWhereInput>;
  footerItems_none?: InputMaybe<NavigationItemWhereInput>;
  footerItems_some?: InputMaybe<NavigationItemWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  items_every?: InputMaybe<NavigationItemWhereInput>;
  items_none?: InputMaybe<NavigationItemWhereInput>;
  items_some?: InputMaybe<NavigationItemWhereInput>;
  navigationLayoutStyle?: InputMaybe<NavigationLayout>;
  /** All values that are contained in given list. */
  navigationLayoutStyle_in?: InputMaybe<Array<InputMaybe<NavigationLayout>>>;
  /** Any other value that exists and is not equal to the given value. */
  navigationLayoutStyle_not?: InputMaybe<NavigationLayout>;
  /** All values that are not contained in given list. */
  navigationLayoutStyle_not_in?: InputMaybe<Array<InputMaybe<NavigationLayout>>>;
  navigationLogo?: InputMaybe<AssetWhereInput>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
  /** All values that are contained in given list. */
  pageNavigationSelection_in?: InputMaybe<Array<InputMaybe<PageNavigationSelection>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageNavigationSelection_not?: InputMaybe<PageNavigationSelection>;
  /** All values that are not contained in given list. */
  pageNavigationSelection_not_in?: InputMaybe<Array<InputMaybe<PageNavigationSelection>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum NetlifyFormFields {
  Email = 'email',
  Message = 'message',
  Name = 'name',
  Phone = 'phone'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  contentPageJson?: Maybe<Scalars['Json']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  heroImage?: Maybe<Asset>;
  hideFooter?: Maybe<Scalars['Boolean']>;
  hideHeader?: Maybe<Scalars['Boolean']>;
  hideNav?: Maybe<Scalars['Boolean']>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  layoutBlocks: Array<LayoutBlock>;
  pageNavigationSelection?: Maybe<PageNavigationSelection>;
  pageSlug?: Maybe<Scalars['String']>;
  pageWidthStyle?: Maybe<PageWidthStyle>;
  parentPage?: Maybe<ParentPage>;
  popup?: Maybe<Popup>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  setHomePage?: Maybe<Scalars['Boolean']>;
  /** System stage field */
  stage: Stage;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  whatsAppContactNumberFloatingButton?: Maybe<Scalars['String']>;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageHeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PageLayoutBlocksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LayoutBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LayoutBlockWhereInput>;
};


export type PagePopupArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  contentPageJson?: InputMaybe<Scalars['Json']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  heroImage?: InputMaybe<AssetCreateOneInlineInput>;
  hideFooter?: InputMaybe<Scalars['Boolean']>;
  hideHeader?: InputMaybe<Scalars['Boolean']>;
  hideNav?: InputMaybe<Scalars['Boolean']>;
  layoutBlocks?: InputMaybe<LayoutBlockCreateManyInlineInput>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
  pageSlug?: InputMaybe<Scalars['String']>;
  pageWidthStyle?: InputMaybe<PageWidthStyle>;
  parentPage?: InputMaybe<ParentPage>;
  popup?: InputMaybe<PopupCreateOneInlineInput>;
  setHomePage?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  whatsAppContactNumberFloatingButton?: InputMaybe<Scalars['String']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** All values containing the given json path. */
  contentPageJson_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  contentPageJson_value_recursive?: InputMaybe<Scalars['Json']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  heroImage?: InputMaybe<AssetWhereInput>;
  hideFooter?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  hideFooter_not?: InputMaybe<Scalars['Boolean']>;
  hideHeader?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  hideHeader_not?: InputMaybe<Scalars['Boolean']>;
  hideNav?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  hideNav_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  layoutBlocks_every?: InputMaybe<LayoutBlockWhereInput>;
  layoutBlocks_none?: InputMaybe<LayoutBlockWhereInput>;
  layoutBlocks_some?: InputMaybe<LayoutBlockWhereInput>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
  /** All values that are contained in given list. */
  pageNavigationSelection_in?: InputMaybe<Array<InputMaybe<PageNavigationSelection>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageNavigationSelection_not?: InputMaybe<PageNavigationSelection>;
  /** All values that are not contained in given list. */
  pageNavigationSelection_not_in?: InputMaybe<Array<InputMaybe<PageNavigationSelection>>>;
  pageSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pageSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pageSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pageSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pageSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pageSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pageSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pageSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pageSlug_starts_with?: InputMaybe<Scalars['String']>;
  pageWidthStyle?: InputMaybe<PageWidthStyle>;
  /** All values that are contained in given list. */
  pageWidthStyle_in?: InputMaybe<Array<InputMaybe<PageWidthStyle>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageWidthStyle_not?: InputMaybe<PageWidthStyle>;
  /** All values that are not contained in given list. */
  pageWidthStyle_not_in?: InputMaybe<Array<InputMaybe<PageWidthStyle>>>;
  parentPage?: InputMaybe<ParentPage>;
  /** All values that are contained in given list. */
  parentPage_in?: InputMaybe<Array<InputMaybe<ParentPage>>>;
  /** Any other value that exists and is not equal to the given value. */
  parentPage_not?: InputMaybe<ParentPage>;
  /** All values that are not contained in given list. */
  parentPage_not_in?: InputMaybe<Array<InputMaybe<ParentPage>>>;
  popup?: InputMaybe<PopupWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  setHomePage?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  setHomePage_not?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  whatsAppContactNumberFloatingButton?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  whatsAppContactNumberFloatingButton_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  whatsAppContactNumberFloatingButton_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  whatsAppContactNumberFloatingButton_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  whatsAppContactNumberFloatingButton_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  whatsAppContactNumberFloatingButton_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  whatsAppContactNumberFloatingButton_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  whatsAppContactNumberFloatingButton_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  whatsAppContactNumberFloatingButton_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  whatsAppContactNumberFloatingButton_starts_with?: InputMaybe<Scalars['String']>;
};

export enum PageNavigationSelection {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HideFooterAsc = 'hideFooter_ASC',
  HideFooterDesc = 'hideFooter_DESC',
  HideHeaderAsc = 'hideHeader_ASC',
  HideHeaderDesc = 'hideHeader_DESC',
  HideNavAsc = 'hideNav_ASC',
  HideNavDesc = 'hideNav_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PageNavigationSelectionAsc = 'pageNavigationSelection_ASC',
  PageNavigationSelectionDesc = 'pageNavigationSelection_DESC',
  PageSlugAsc = 'pageSlug_ASC',
  PageSlugDesc = 'pageSlug_DESC',
  PageWidthStyleAsc = 'pageWidthStyle_ASC',
  PageWidthStyleDesc = 'pageWidthStyle_DESC',
  ParentPageAsc = 'parentPage_ASC',
  ParentPageDesc = 'parentPage_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SetHomePageAsc = 'setHomePage_ASC',
  SetHomePageDesc = 'setHomePage_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WhatsAppContactNumberFloatingButtonAsc = 'whatsAppContactNumberFloatingButton_ASC',
  WhatsAppContactNumberFloatingButtonDesc = 'whatsAppContactNumberFloatingButton_DESC'
}

export type PageUpdateInput = {
  contentPageJson?: InputMaybe<Scalars['Json']>;
  heroImage?: InputMaybe<AssetUpdateOneInlineInput>;
  hideFooter?: InputMaybe<Scalars['Boolean']>;
  hideHeader?: InputMaybe<Scalars['Boolean']>;
  hideNav?: InputMaybe<Scalars['Boolean']>;
  layoutBlocks?: InputMaybe<LayoutBlockUpdateManyInlineInput>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
  pageSlug?: InputMaybe<Scalars['String']>;
  pageWidthStyle?: InputMaybe<PageWidthStyle>;
  parentPage?: InputMaybe<ParentPage>;
  popup?: InputMaybe<PopupUpdateOneInlineInput>;
  setHomePage?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  whatsAppContactNumberFloatingButton?: InputMaybe<Scalars['String']>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  contentPageJson?: InputMaybe<Scalars['Json']>;
  hideFooter?: InputMaybe<Scalars['Boolean']>;
  hideHeader?: InputMaybe<Scalars['Boolean']>;
  hideNav?: InputMaybe<Scalars['Boolean']>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
  pageWidthStyle?: InputMaybe<PageWidthStyle>;
  parentPage?: InputMaybe<ParentPage>;
  subtitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  whatsAppContactNumberFloatingButton?: InputMaybe<Scalars['String']>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** All values containing the given json path. */
  contentPageJson_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  contentPageJson_value_recursive?: InputMaybe<Scalars['Json']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  heroImage?: InputMaybe<AssetWhereInput>;
  hideFooter?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  hideFooter_not?: InputMaybe<Scalars['Boolean']>;
  hideHeader?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  hideHeader_not?: InputMaybe<Scalars['Boolean']>;
  hideNav?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  hideNav_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  layoutBlocks_every?: InputMaybe<LayoutBlockWhereInput>;
  layoutBlocks_none?: InputMaybe<LayoutBlockWhereInput>;
  layoutBlocks_some?: InputMaybe<LayoutBlockWhereInput>;
  pageNavigationSelection?: InputMaybe<PageNavigationSelection>;
  /** All values that are contained in given list. */
  pageNavigationSelection_in?: InputMaybe<Array<InputMaybe<PageNavigationSelection>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageNavigationSelection_not?: InputMaybe<PageNavigationSelection>;
  /** All values that are not contained in given list. */
  pageNavigationSelection_not_in?: InputMaybe<Array<InputMaybe<PageNavigationSelection>>>;
  pageSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pageSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pageSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pageSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pageSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pageSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pageSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pageSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pageSlug_starts_with?: InputMaybe<Scalars['String']>;
  pageWidthStyle?: InputMaybe<PageWidthStyle>;
  /** All values that are contained in given list. */
  pageWidthStyle_in?: InputMaybe<Array<InputMaybe<PageWidthStyle>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageWidthStyle_not?: InputMaybe<PageWidthStyle>;
  /** All values that are not contained in given list. */
  pageWidthStyle_not_in?: InputMaybe<Array<InputMaybe<PageWidthStyle>>>;
  parentPage?: InputMaybe<ParentPage>;
  /** All values that are contained in given list. */
  parentPage_in?: InputMaybe<Array<InputMaybe<ParentPage>>>;
  /** Any other value that exists and is not equal to the given value. */
  parentPage_not?: InputMaybe<ParentPage>;
  /** All values that are not contained in given list. */
  parentPage_not_in?: InputMaybe<Array<InputMaybe<ParentPage>>>;
  popup?: InputMaybe<PopupWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  setHomePage?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  setHomePage_not?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  whatsAppContactNumberFloatingButton?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  whatsAppContactNumberFloatingButton_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  whatsAppContactNumberFloatingButton_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  whatsAppContactNumberFloatingButton_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  whatsAppContactNumberFloatingButton_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  whatsAppContactNumberFloatingButton_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  whatsAppContactNumberFloatingButton_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  whatsAppContactNumberFloatingButton_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  whatsAppContactNumberFloatingButton_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  whatsAppContactNumberFloatingButton_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  pageSlug?: InputMaybe<Scalars['String']>;
  setHomePage?: InputMaybe<Scalars['Boolean']>;
};

export enum PageWidthStyle {
  Content = 'Content',
  Full = 'Full'
}

export enum ParentPage {
  Catalog = 'catalog',
  Course = 'course',
  Service = 'service'
}

export type Popup = {
  __typename?: 'Popup';
  actionLabel?: Maybe<Scalars['String']>;
  actionLink?: Maybe<Scalars['String']>;
  actionOpenModal?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Color>;
  content?: Maybe<Scalars['String']>;
  contentAlign?: Maybe<ContentAlign>;
  /** Seconds popup lasts for - default is 30 seconds */
  duration?: Maybe<Scalars['Int']>;
  header?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  popupPosition: PopupPosition;
  /** System stage field */
  stage: Stage;
  subHeader?: Maybe<Scalars['String']>;
};


export type PopupImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PopupConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PopupWhereUniqueInput;
};

/** A connection to a list of items. */
export type PopupConnection = {
  __typename?: 'PopupConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PopupEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PopupCreateInput = {
  actionLabel?: InputMaybe<Scalars['String']>;
  actionLink?: InputMaybe<Scalars['String']>;
  actionOpenModal?: InputMaybe<Scalars['Boolean']>;
  backgroundColor?: InputMaybe<ColorInput>;
  content?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  duration?: InputMaybe<Scalars['Int']>;
  header?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  popupPosition: PopupPosition;
  subHeader?: InputMaybe<Scalars['String']>;
};

export type PopupCreateManyInlineInput = {
  /** Create and connect multiple existing Popup documents */
  create?: InputMaybe<Array<PopupCreateInput>>;
};

export type PopupCreateOneInlineInput = {
  /** Create and connect one Popup document */
  create?: InputMaybe<PopupCreateInput>;
};

export type PopupCreateWithPositionInput = {
  /** Document to create */
  data: PopupCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PopupEdge = {
  __typename?: 'PopupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Popup;
};

/** Identifies documents */
export type PopupManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PopupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PopupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PopupWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  actionLabel?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  actionLabel_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  actionLabel_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  actionLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  actionLabel_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  actionLabel_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  actionLabel_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  actionLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  actionLabel_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  actionLabel_starts_with?: InputMaybe<Scalars['String']>;
  actionLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  actionLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  actionLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  actionLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  actionLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  actionLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  actionLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  actionLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  actionLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  actionLink_starts_with?: InputMaybe<Scalars['String']>;
  actionOpenModal?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  actionOpenModal_not?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  /** All values that are contained in given list. */
  contentAlign_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  /** Any other value that exists and is not equal to the given value. */
  contentAlign_not?: InputMaybe<ContentAlign>;
  /** All values that are not contained in given list. */
  contentAlign_not_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  duration_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  duration_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  duration_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  duration_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  duration_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  header?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  header_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  header_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  header_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  header_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  header_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  header_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  header_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  header_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  header_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  popupPosition?: InputMaybe<PopupPosition>;
  /** All values that are contained in given list. */
  popupPosition_in?: InputMaybe<Array<InputMaybe<PopupPosition>>>;
  /** Any other value that exists and is not equal to the given value. */
  popupPosition_not?: InputMaybe<PopupPosition>;
  /** All values that are not contained in given list. */
  popupPosition_not_in?: InputMaybe<Array<InputMaybe<PopupPosition>>>;
  subHeader?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subHeader_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subHeader_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subHeader_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subHeader_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subHeader_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subHeader_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subHeader_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subHeader_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subHeader_starts_with?: InputMaybe<Scalars['String']>;
};

export enum PopupOrderByInput {
  ActionLabelAsc = 'actionLabel_ASC',
  ActionLabelDesc = 'actionLabel_DESC',
  ActionLinkAsc = 'actionLink_ASC',
  ActionLinkDesc = 'actionLink_DESC',
  ActionOpenModalAsc = 'actionOpenModal_ASC',
  ActionOpenModalDesc = 'actionOpenModal_DESC',
  ContentAlignAsc = 'contentAlign_ASC',
  ContentAlignDesc = 'contentAlign_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PopupPositionAsc = 'popupPosition_ASC',
  PopupPositionDesc = 'popupPosition_DESC',
  SubHeaderAsc = 'subHeader_ASC',
  SubHeaderDesc = 'subHeader_DESC'
}

export type PopupParent = Page;

export type PopupParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type PopupParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type PopupParentCreateManyInlineInput = {
  /** Connect multiple existing PopupParent documents */
  connect?: InputMaybe<Array<PopupParentWhereUniqueInput>>;
  /** Create and connect multiple existing PopupParent documents */
  create?: InputMaybe<Array<PopupParentCreateInput>>;
};

export type PopupParentCreateOneInlineInput = {
  /** Connect one existing PopupParent document */
  connect?: InputMaybe<PopupParentWhereUniqueInput>;
  /** Create and connect one PopupParent document */
  create?: InputMaybe<PopupParentCreateInput>;
};

export type PopupParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type PopupParentUpdateManyInlineInput = {
  /** Connect multiple existing PopupParent documents */
  connect?: InputMaybe<Array<PopupParentConnectInput>>;
  /** Create and connect multiple PopupParent documents */
  create?: InputMaybe<Array<PopupParentCreateInput>>;
  /** Delete multiple PopupParent documents */
  delete?: InputMaybe<Array<PopupParentWhereUniqueInput>>;
  /** Disconnect multiple PopupParent documents */
  disconnect?: InputMaybe<Array<PopupParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PopupParent documents */
  set?: InputMaybe<Array<PopupParentWhereUniqueInput>>;
  /** Update multiple PopupParent documents */
  update?: InputMaybe<Array<PopupParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PopupParent documents */
  upsert?: InputMaybe<Array<PopupParentUpsertWithNestedWhereUniqueInput>>;
};

export type PopupParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type PopupParentUpdateOneInlineInput = {
  /** Connect existing PopupParent document */
  connect?: InputMaybe<PopupParentWhereUniqueInput>;
  /** Create and connect one PopupParent document */
  create?: InputMaybe<PopupParentCreateInput>;
  /** Delete currently connected PopupParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PopupParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PopupParent document */
  update?: InputMaybe<PopupParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PopupParent document */
  upsert?: InputMaybe<PopupParentUpsertWithNestedWhereUniqueInput>;
};

export type PopupParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type PopupParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PopupParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type PopupParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export enum PopupPosition {
  Bottom = 'bottom',
  BottomCenter = 'bottom_center',
  BottomLeft = 'bottom_left',
  BottomRight = 'bottom_right',
  Center = 'center',
  Left = 'left',
  Right = 'right',
  Top = 'top',
  TopCenter = 'top_center',
  TopLeft = 'top_left',
  TopRight = 'top_right'
}

export type PopupUpdateInput = {
  actionLabel?: InputMaybe<Scalars['String']>;
  actionLink?: InputMaybe<Scalars['String']>;
  actionOpenModal?: InputMaybe<Scalars['Boolean']>;
  backgroundColor?: InputMaybe<ColorInput>;
  content?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  duration?: InputMaybe<Scalars['Int']>;
  header?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  popupPosition?: InputMaybe<PopupPosition>;
  subHeader?: InputMaybe<Scalars['String']>;
};

export type PopupUpdateManyInlineInput = {
  /** Create and connect multiple Popup component instances */
  create?: InputMaybe<Array<PopupCreateWithPositionInput>>;
  /** Delete multiple Popup documents */
  delete?: InputMaybe<Array<PopupWhereUniqueInput>>;
  /** Update multiple Popup component instances */
  update?: InputMaybe<Array<PopupUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Popup component instances */
  upsert?: InputMaybe<Array<PopupUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PopupUpdateManyInput = {
  actionLabel?: InputMaybe<Scalars['String']>;
  actionLink?: InputMaybe<Scalars['String']>;
  actionOpenModal?: InputMaybe<Scalars['Boolean']>;
  backgroundColor?: InputMaybe<ColorInput>;
  content?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  duration?: InputMaybe<Scalars['Int']>;
  header?: InputMaybe<Scalars['String']>;
  popupPosition?: InputMaybe<PopupPosition>;
  subHeader?: InputMaybe<Scalars['String']>;
};

export type PopupUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PopupUpdateManyInput;
  /** Document search */
  where: PopupWhereInput;
};

export type PopupUpdateOneInlineInput = {
  /** Create and connect one Popup document */
  create?: InputMaybe<PopupCreateInput>;
  /** Delete currently connected Popup document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Popup document */
  update?: InputMaybe<PopupUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Popup document */
  upsert?: InputMaybe<PopupUpsertWithNestedWhereUniqueInput>;
};

export type PopupUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PopupUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PopupWhereUniqueInput;
};

export type PopupUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PopupUpdateInput;
  /** Unique document search */
  where: PopupWhereUniqueInput;
};

export type PopupUpsertInput = {
  /** Create document if it didn't exist */
  create: PopupCreateInput;
  /** Update document if it exists */
  update: PopupUpdateInput;
};

export type PopupUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PopupUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PopupWhereUniqueInput;
};

export type PopupUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PopupUpsertInput;
  /** Unique document search */
  where: PopupWhereUniqueInput;
};

/** Identifies documents */
export type PopupWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PopupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PopupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PopupWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  actionLabel?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  actionLabel_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  actionLabel_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  actionLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  actionLabel_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  actionLabel_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  actionLabel_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  actionLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  actionLabel_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  actionLabel_starts_with?: InputMaybe<Scalars['String']>;
  actionLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  actionLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  actionLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  actionLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  actionLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  actionLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  actionLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  actionLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  actionLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  actionLink_starts_with?: InputMaybe<Scalars['String']>;
  actionOpenModal?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  actionOpenModal_not?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  /** All values that are contained in given list. */
  contentAlign_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  /** Any other value that exists and is not equal to the given value. */
  contentAlign_not?: InputMaybe<ContentAlign>;
  /** All values that are not contained in given list. */
  contentAlign_not_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  duration_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  duration_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  duration_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  duration_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  duration_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  duration_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  header?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  header_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  header_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  header_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  header_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  header_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  header_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  header_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  header_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  header_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  popupPosition?: InputMaybe<PopupPosition>;
  /** All values that are contained in given list. */
  popupPosition_in?: InputMaybe<Array<InputMaybe<PopupPosition>>>;
  /** Any other value that exists and is not equal to the given value. */
  popupPosition_not?: InputMaybe<PopupPosition>;
  /** All values that are not contained in given list. */
  popupPosition_not_in?: InputMaybe<Array<InputMaybe<PopupPosition>>>;
  subHeader?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subHeader_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subHeader_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subHeader_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subHeader_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subHeader_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subHeader_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subHeader_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subHeader_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subHeader_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Popup record uniquely */
export type PopupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ProductType {
  Imedia = 'imedia'
}

export type Profile = Node & {
  __typename?: 'Profile';
  appleMusicLink?: Maybe<Scalars['String']>;
  avatarImage?: Maybe<Asset>;
  calendlyLink?: Maybe<Scalars['String']>;
  contactList: Array<ContactList>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Profile>;
  email?: Maybe<Scalars['String']>;
  epkLink?: Maybe<Scalars['String']>;
  facebookLink?: Maybe<Scalars['String']>;
  fullBio?: Maybe<RichText>;
  heroImage?: Maybe<Asset>;
  /** List of Profile versions */
  history: Array<Version>;
  iFrame?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageGallery: Array<Asset>;
  instagramLink?: Maybe<Scalars['String']>;
  linkedinLink?: Maybe<Scalars['String']>;
  miniBio?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  pandoraLink?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  portfolioGallery: Array<Asset>;
  primaryProfile?: Maybe<Scalars['Boolean']>;
  profileJson?: Maybe<Scalars['Json']>;
  profileLogo?: Maybe<Asset>;
  profileSlug?: Maybe<Scalars['String']>;
  profileType?: Maybe<ProfilesSelect>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  role?: Maybe<Scalars['String']>;
  scheduledIn: Array<ScheduledOperation>;
  snapchatLink?: Maybe<Scalars['String']>;
  soundcloudLink?: Maybe<Scalars['String']>;
  spotifyLink?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  threadsLink?: Maybe<Scalars['String']>;
  tikTokLink?: Maybe<Scalars['String']>;
  tourWidgetiFrame?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  videoBox: Array<VideoBox>;
  websiteLink?: Maybe<Scalars['String']>;
  youtubeLink?: Maybe<Scalars['String']>;
};


export type ProfileAvatarImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProfileContactListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ContactListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactListWhereInput>;
};


export type ProfileCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProfileDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProfileHeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProfileHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProfileImageGalleryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type ProfilePortfolioGalleryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type ProfileProfileLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProfilePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProfileScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProfileUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProfileVideoBoxArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<VideoBoxOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoBoxWhereInput>;
};

export type ProfileConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProfileWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProfileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProfileCreateInput = {
  appleMusicLink?: InputMaybe<Scalars['String']>;
  avatarImage?: InputMaybe<AssetCreateOneInlineInput>;
  calendlyLink?: InputMaybe<Scalars['String']>;
  contactList?: InputMaybe<ContactListCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  epkLink?: InputMaybe<Scalars['String']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  fullBio?: InputMaybe<Scalars['RichTextAST']>;
  heroImage?: InputMaybe<AssetCreateOneInlineInput>;
  iFrame?: InputMaybe<Scalars['String']>;
  imageGallery?: InputMaybe<AssetCreateManyInlineInput>;
  instagramLink?: InputMaybe<Scalars['String']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  miniBio?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  portfolioGallery?: InputMaybe<AssetCreateManyInlineInput>;
  primaryProfile?: InputMaybe<Scalars['Boolean']>;
  profileJson?: InputMaybe<Scalars['Json']>;
  profileLogo?: InputMaybe<AssetCreateOneInlineInput>;
  profileSlug?: InputMaybe<Scalars['String']>;
  profileType?: InputMaybe<ProfilesSelect>;
  role?: InputMaybe<Scalars['String']>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  threadsLink?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  tourWidgetiFrame?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoBox?: InputMaybe<VideoBoxCreateManyInlineInput>;
  websiteLink?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
};

export type ProfileCreateManyInlineInput = {
  /** Connect multiple existing Profile documents */
  connect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  /** Create and connect multiple existing Profile documents */
  create?: InputMaybe<Array<ProfileCreateInput>>;
};

export type ProfileCreateOneInlineInput = {
  /** Connect one existing Profile document */
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  /** Create and connect one Profile document */
  create?: InputMaybe<ProfileCreateInput>;
};

/** An edge in a connection. */
export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Profile;
};

export enum ProfileLayoutStyle {
  CardLink = 'cardLink',
  CardModal = 'cardModal'
}

/** Identifies documents */
export type ProfileManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  appleMusicLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  appleMusicLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  appleMusicLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  appleMusicLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  appleMusicLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  appleMusicLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  appleMusicLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  appleMusicLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  appleMusicLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  appleMusicLink_starts_with?: InputMaybe<Scalars['String']>;
  avatarImage?: InputMaybe<AssetWhereInput>;
  calendlyLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  calendlyLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  calendlyLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  calendlyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  calendlyLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  calendlyLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  calendlyLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  calendlyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  calendlyLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  calendlyLink_starts_with?: InputMaybe<Scalars['String']>;
  contactList_every?: InputMaybe<ContactListWhereInput>;
  contactList_none?: InputMaybe<ContactListWhereInput>;
  contactList_some?: InputMaybe<ContactListWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProfileWhereStageInput>;
  documentInStages_none?: InputMaybe<ProfileWhereStageInput>;
  documentInStages_some?: InputMaybe<ProfileWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  epkLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  epkLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  epkLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  epkLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  epkLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  epkLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  epkLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  epkLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  epkLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  epkLink_starts_with?: InputMaybe<Scalars['String']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebookLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  facebookLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebookLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  facebookLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebookLink_starts_with?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<AssetWhereInput>;
  iFrame?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  iFrame_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  iFrame_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iFrame_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iFrame_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  iFrame_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  iFrame_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  iFrame_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  iFrame_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  iFrame_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageGallery_every?: InputMaybe<AssetWhereInput>;
  imageGallery_none?: InputMaybe<AssetWhereInput>;
  imageGallery_some?: InputMaybe<AssetWhereInput>;
  instagramLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagramLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  instagramLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagramLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  instagramLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagramLink_starts_with?: InputMaybe<Scalars['String']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkedinLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedinLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkedinLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedinLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedinLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  linkedinLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedinLink_starts_with?: InputMaybe<Scalars['String']>;
  miniBio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  miniBio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  miniBio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  miniBio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  miniBio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  miniBio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  miniBio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  miniBio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  miniBio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  miniBio_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pandoraLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pandoraLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pandoraLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pandoraLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pandoraLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pandoraLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pandoraLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pandoraLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pandoraLink_starts_with?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  portfolioGallery_every?: InputMaybe<AssetWhereInput>;
  portfolioGallery_none?: InputMaybe<AssetWhereInput>;
  portfolioGallery_some?: InputMaybe<AssetWhereInput>;
  primaryProfile?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  primaryProfile_not?: InputMaybe<Scalars['Boolean']>;
  /** All values containing the given json path. */
  profileJson_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  profileJson_value_recursive?: InputMaybe<Scalars['Json']>;
  profileLogo?: InputMaybe<AssetWhereInput>;
  profileSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  profileSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  profileSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  profileSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  profileSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  profileSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  profileSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  profileSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  profileSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  profileSlug_starts_with?: InputMaybe<Scalars['String']>;
  profileType?: InputMaybe<ProfilesSelect>;
  /** All values that are contained in given list. */
  profileType_in?: InputMaybe<Array<InputMaybe<ProfilesSelect>>>;
  /** Any other value that exists and is not equal to the given value. */
  profileType_not?: InputMaybe<ProfilesSelect>;
  /** All values that are not contained in given list. */
  profileType_not_in?: InputMaybe<Array<InputMaybe<ProfilesSelect>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  role?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  snapchatLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  snapchatLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  snapchatLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  snapchatLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  snapchatLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  snapchatLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  snapchatLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  snapchatLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  snapchatLink_starts_with?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  soundcloudLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  soundcloudLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  soundcloudLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  soundcloudLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  soundcloudLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  soundcloudLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  soundcloudLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  soundcloudLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  soundcloudLink_starts_with?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  spotifyLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  spotifyLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  spotifyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  spotifyLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  spotifyLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  spotifyLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  spotifyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  spotifyLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  spotifyLink_starts_with?: InputMaybe<Scalars['String']>;
  threadsLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  threadsLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  threadsLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  threadsLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  threadsLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  threadsLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  threadsLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  threadsLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  threadsLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  threadsLink_starts_with?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tikTokLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tikTokLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tikTokLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tikTokLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tikTokLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tikTokLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tikTokLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tikTokLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tikTokLink_starts_with?: InputMaybe<Scalars['String']>;
  tourWidgetiFrame?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tourWidgetiFrame_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tourWidgetiFrame_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tourWidgetiFrame_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tourWidgetiFrame_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tourWidgetiFrame_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tourWidgetiFrame_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tourWidgetiFrame_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tourWidgetiFrame_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tourWidgetiFrame_starts_with?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  twitterLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterLink_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
  websiteLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  websiteLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  websiteLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  websiteLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  websiteLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  websiteLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  websiteLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  websiteLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  websiteLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  websiteLink_starts_with?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeLink_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ProfileOrderByInput {
  AppleMusicLinkAsc = 'appleMusicLink_ASC',
  AppleMusicLinkDesc = 'appleMusicLink_DESC',
  CalendlyLinkAsc = 'calendlyLink_ASC',
  CalendlyLinkDesc = 'calendlyLink_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EpkLinkAsc = 'epkLink_ASC',
  EpkLinkDesc = 'epkLink_DESC',
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  IFrameAsc = 'iFrame_ASC',
  IFrameDesc = 'iFrame_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  MiniBioAsc = 'miniBio_ASC',
  MiniBioDesc = 'miniBio_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  PandoraLinkAsc = 'pandoraLink_ASC',
  PandoraLinkDesc = 'pandoraLink_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PrimaryProfileAsc = 'primaryProfile_ASC',
  PrimaryProfileDesc = 'primaryProfile_DESC',
  ProfileSlugAsc = 'profileSlug_ASC',
  ProfileSlugDesc = 'profileSlug_DESC',
  ProfileTypeAsc = 'profileType_ASC',
  ProfileTypeDesc = 'profileType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SnapchatLinkAsc = 'snapchatLink_ASC',
  SnapchatLinkDesc = 'snapchatLink_DESC',
  SoundcloudLinkAsc = 'soundcloudLink_ASC',
  SoundcloudLinkDesc = 'soundcloudLink_DESC',
  SpotifyLinkAsc = 'spotifyLink_ASC',
  SpotifyLinkDesc = 'spotifyLink_DESC',
  ThreadsLinkAsc = 'threadsLink_ASC',
  ThreadsLinkDesc = 'threadsLink_DESC',
  TikTokLinkAsc = 'tikTokLink_ASC',
  TikTokLinkDesc = 'tikTokLink_DESC',
  TourWidgetiFrameAsc = 'tourWidgetiFrame_ASC',
  TourWidgetiFrameDesc = 'tourWidgetiFrame_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WebsiteLinkAsc = 'websiteLink_ASC',
  WebsiteLinkDesc = 'websiteLink_DESC',
  YoutubeLinkAsc = 'youtubeLink_ASC',
  YoutubeLinkDesc = 'youtubeLink_DESC'
}

export type ProfileUpdateInput = {
  appleMusicLink?: InputMaybe<Scalars['String']>;
  avatarImage?: InputMaybe<AssetUpdateOneInlineInput>;
  calendlyLink?: InputMaybe<Scalars['String']>;
  contactList?: InputMaybe<ContactListUpdateManyInlineInput>;
  email?: InputMaybe<Scalars['String']>;
  epkLink?: InputMaybe<Scalars['String']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  fullBio?: InputMaybe<Scalars['RichTextAST']>;
  heroImage?: InputMaybe<AssetUpdateOneInlineInput>;
  iFrame?: InputMaybe<Scalars['String']>;
  imageGallery?: InputMaybe<AssetUpdateManyInlineInput>;
  instagramLink?: InputMaybe<Scalars['String']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  miniBio?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  portfolioGallery?: InputMaybe<AssetUpdateManyInlineInput>;
  primaryProfile?: InputMaybe<Scalars['Boolean']>;
  profileJson?: InputMaybe<Scalars['Json']>;
  profileLogo?: InputMaybe<AssetUpdateOneInlineInput>;
  profileSlug?: InputMaybe<Scalars['String']>;
  profileType?: InputMaybe<ProfilesSelect>;
  role?: InputMaybe<Scalars['String']>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  threadsLink?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  tourWidgetiFrame?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  videoBox?: InputMaybe<VideoBoxUpdateManyInlineInput>;
  websiteLink?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
};

export type ProfileUpdateManyInlineInput = {
  /** Connect multiple existing Profile documents */
  connect?: InputMaybe<Array<ProfileConnectInput>>;
  /** Create and connect multiple Profile documents */
  create?: InputMaybe<Array<ProfileCreateInput>>;
  /** Delete multiple Profile documents */
  delete?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  /** Disconnect multiple Profile documents */
  disconnect?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Profile documents */
  set?: InputMaybe<Array<ProfileWhereUniqueInput>>;
  /** Update multiple Profile documents */
  update?: InputMaybe<Array<ProfileUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Profile documents */
  upsert?: InputMaybe<Array<ProfileUpsertWithNestedWhereUniqueInput>>;
};

export type ProfileUpdateManyInput = {
  appleMusicLink?: InputMaybe<Scalars['String']>;
  calendlyLink?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  epkLink?: InputMaybe<Scalars['String']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  fullBio?: InputMaybe<Scalars['RichTextAST']>;
  iFrame?: InputMaybe<Scalars['String']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  miniBio?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  primaryProfile?: InputMaybe<Scalars['Boolean']>;
  profileJson?: InputMaybe<Scalars['Json']>;
  profileType?: InputMaybe<ProfilesSelect>;
  role?: InputMaybe<Scalars['String']>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  threadsLink?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  tourWidgetiFrame?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  websiteLink?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
};

export type ProfileUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProfileUpdateManyInput;
  /** Document search */
  where: ProfileWhereInput;
};

export type ProfileUpdateOneInlineInput = {
  /** Connect existing Profile document */
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  /** Create and connect one Profile document */
  create?: InputMaybe<ProfileCreateInput>;
  /** Delete currently connected Profile document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Profile document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Profile document */
  update?: InputMaybe<ProfileUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Profile document */
  upsert?: InputMaybe<ProfileUpsertWithNestedWhereUniqueInput>;
};

export type ProfileUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProfileUpdateInput;
  /** Unique document search */
  where: ProfileWhereUniqueInput;
};

export type ProfileUpsertInput = {
  /** Create document if it didn't exist */
  create: ProfileCreateInput;
  /** Update document if it exists */
  update: ProfileUpdateInput;
};

export type ProfileUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProfileUpsertInput;
  /** Unique document search */
  where: ProfileWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProfileWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ProfileWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  appleMusicLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  appleMusicLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  appleMusicLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  appleMusicLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  appleMusicLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  appleMusicLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  appleMusicLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  appleMusicLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  appleMusicLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  appleMusicLink_starts_with?: InputMaybe<Scalars['String']>;
  avatarImage?: InputMaybe<AssetWhereInput>;
  calendlyLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  calendlyLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  calendlyLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  calendlyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  calendlyLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  calendlyLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  calendlyLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  calendlyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  calendlyLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  calendlyLink_starts_with?: InputMaybe<Scalars['String']>;
  contactList_every?: InputMaybe<ContactListWhereInput>;
  contactList_none?: InputMaybe<ContactListWhereInput>;
  contactList_some?: InputMaybe<ContactListWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProfileWhereStageInput>;
  documentInStages_none?: InputMaybe<ProfileWhereStageInput>;
  documentInStages_some?: InputMaybe<ProfileWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  epkLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  epkLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  epkLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  epkLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  epkLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  epkLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  epkLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  epkLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  epkLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  epkLink_starts_with?: InputMaybe<Scalars['String']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebookLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  facebookLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebookLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  facebookLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebookLink_starts_with?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<AssetWhereInput>;
  iFrame?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  iFrame_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  iFrame_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  iFrame_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  iFrame_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  iFrame_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  iFrame_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  iFrame_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  iFrame_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  iFrame_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageGallery_every?: InputMaybe<AssetWhereInput>;
  imageGallery_none?: InputMaybe<AssetWhereInput>;
  imageGallery_some?: InputMaybe<AssetWhereInput>;
  instagramLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagramLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  instagramLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagramLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  instagramLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagramLink_starts_with?: InputMaybe<Scalars['String']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkedinLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedinLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkedinLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedinLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedinLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  linkedinLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedinLink_starts_with?: InputMaybe<Scalars['String']>;
  miniBio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  miniBio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  miniBio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  miniBio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  miniBio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  miniBio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  miniBio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  miniBio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  miniBio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  miniBio_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pandoraLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pandoraLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pandoraLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pandoraLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pandoraLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pandoraLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pandoraLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pandoraLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pandoraLink_starts_with?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']>;
  portfolioGallery_every?: InputMaybe<AssetWhereInput>;
  portfolioGallery_none?: InputMaybe<AssetWhereInput>;
  portfolioGallery_some?: InputMaybe<AssetWhereInput>;
  primaryProfile?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  primaryProfile_not?: InputMaybe<Scalars['Boolean']>;
  /** All values containing the given json path. */
  profileJson_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  profileJson_value_recursive?: InputMaybe<Scalars['Json']>;
  profileLogo?: InputMaybe<AssetWhereInput>;
  profileSlug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  profileSlug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  profileSlug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  profileSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  profileSlug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  profileSlug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  profileSlug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  profileSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  profileSlug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  profileSlug_starts_with?: InputMaybe<Scalars['String']>;
  profileType?: InputMaybe<ProfilesSelect>;
  /** All values that are contained in given list. */
  profileType_in?: InputMaybe<Array<InputMaybe<ProfilesSelect>>>;
  /** Any other value that exists and is not equal to the given value. */
  profileType_not?: InputMaybe<ProfilesSelect>;
  /** All values that are not contained in given list. */
  profileType_not_in?: InputMaybe<Array<InputMaybe<ProfilesSelect>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  role?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  snapchatLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  snapchatLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  snapchatLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  snapchatLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  snapchatLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  snapchatLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  snapchatLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  snapchatLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  snapchatLink_starts_with?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  soundcloudLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  soundcloudLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  soundcloudLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  soundcloudLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  soundcloudLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  soundcloudLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  soundcloudLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  soundcloudLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  soundcloudLink_starts_with?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  spotifyLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  spotifyLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  spotifyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  spotifyLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  spotifyLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  spotifyLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  spotifyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  spotifyLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  spotifyLink_starts_with?: InputMaybe<Scalars['String']>;
  threadsLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  threadsLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  threadsLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  threadsLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  threadsLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  threadsLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  threadsLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  threadsLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  threadsLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  threadsLink_starts_with?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tikTokLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tikTokLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tikTokLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tikTokLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tikTokLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tikTokLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tikTokLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tikTokLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tikTokLink_starts_with?: InputMaybe<Scalars['String']>;
  tourWidgetiFrame?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tourWidgetiFrame_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tourWidgetiFrame_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tourWidgetiFrame_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tourWidgetiFrame_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tourWidgetiFrame_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tourWidgetiFrame_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tourWidgetiFrame_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tourWidgetiFrame_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tourWidgetiFrame_starts_with?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  twitterLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterLink_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoBox_every?: InputMaybe<VideoBoxWhereInput>;
  videoBox_none?: InputMaybe<VideoBoxWhereInput>;
  videoBox_some?: InputMaybe<VideoBoxWhereInput>;
  websiteLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  websiteLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  websiteLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  websiteLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  websiteLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  websiteLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  websiteLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  websiteLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  websiteLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  websiteLink_starts_with?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeLink_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProfileWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProfileWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProfileWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProfileWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProfileWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Profile record uniquely */
export type ProfileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  profileSlug?: InputMaybe<Scalars['String']>;
};

export enum ProfilesSelect {
  Admin = 'Admin',
  Staff = 'Staff'
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single album */
  album?: Maybe<Album>;
  /** Retrieve document version */
  albumVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple albums */
  albums: Array<Album>;
  /** Retrieve multiple albums using the Relay connection interface */
  albumsConnection: AlbumConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single blog */
  blog?: Maybe<Blog>;
  /** Retrieve document version */
  blogVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogs */
  blogs: Array<Blog>;
  /** Retrieve multiple blogs using the Relay connection interface */
  blogsConnection: BlogConnection;
  /** Retrieve a single event */
  event?: Maybe<Event>;
  /** Retrieve document version */
  eventVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple events */
  events: Array<Event>;
  /** Retrieve multiple events using the Relay connection interface */
  eventsConnection: EventConnection;
  /** Retrieve a single logoTable */
  logoTable?: Maybe<LogoTable>;
  /** Retrieve document version */
  logoTableVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple logoTables */
  logoTables: Array<LogoTable>;
  /** Retrieve multiple logoTables using the Relay connection interface */
  logoTablesConnection: LogoTableConnection;
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single profile */
  profile?: Maybe<Profile>;
  /** Retrieve document version */
  profileVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple profiles */
  profiles: Array<Profile>;
  /** Retrieve multiple profiles using the Relay connection interface */
  profilesConnection: ProfileConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve multiple siteLibraries */
  siteLibraries: Array<SiteLibrary>;
  /** Retrieve multiple siteLibraries using the Relay connection interface */
  siteLibrariesConnection: SiteLibraryConnection;
  /** Retrieve a single siteLibrary */
  siteLibrary?: Maybe<SiteLibrary>;
  /** Retrieve document version */
  siteLibraryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single testimonial */
  testimonial?: Maybe<Testimonial>;
  /** Retrieve document version */
  testimonialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple testimonials */
  testimonials: Array<Testimonial>;
  /** Retrieve multiple testimonials using the Relay connection interface */
  testimonialsConnection: TestimonialConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAlbumArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AlbumWhereUniqueInput;
};


export type QueryAlbumVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAlbumsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AlbumOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AlbumWhereInput>;
};


export type QueryAlbumsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AlbumOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AlbumWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBlogArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BlogWhereUniqueInput;
};


export type QueryBlogVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBlogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryEventArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EventWhereUniqueInput;
};


export type QueryEventVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryLogoTableArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LogoTableWhereUniqueInput;
};


export type QueryLogoTableVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLogoTablesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LogoTableOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LogoTableWhereInput>;
};


export type QueryLogoTablesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LogoTableOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LogoTableWhereInput>;
};


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryProfileArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProfileWhereUniqueInput;
};


export type QueryProfileVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProfilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryProfilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProfileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySiteLibrariesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SiteLibraryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SiteLibraryWhereInput>;
};


export type QuerySiteLibrariesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SiteLibraryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SiteLibraryWhereInput>;
};


export type QuerySiteLibraryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SiteLibraryWhereUniqueInput;
};


export type QuerySiteLibraryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTestimonialArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TestimonialWhereUniqueInput;
};


export type QueryTestimonialVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTestimonialsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TestimonialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TestimonialWhereInput>;
};


export type QueryTestimonialsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TestimonialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TestimonialWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export enum ReleaseType {
  Single = 'single'
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type RootColor = {
  __typename?: 'RootColor';
  dark?: Maybe<Color>;
  /** The unique identifier */
  id: Scalars['ID'];
  primary?: Maybe<Color>;
  primaryFade?: Maybe<Color>;
  primaryFadeOpacity?: Maybe<Color>;
  primaryHover?: Maybe<Color>;
  /** System stage field */
  stage: Stage;
  white?: Maybe<Color>;
};

export type RootColorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RootColorWhereUniqueInput;
};

/** A connection to a list of items. */
export type RootColorConnection = {
  __typename?: 'RootColorConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RootColorEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RootColorCreateInput = {
  dark?: InputMaybe<ColorInput>;
  primary?: InputMaybe<ColorInput>;
  primaryFade?: InputMaybe<ColorInput>;
  primaryFadeOpacity?: InputMaybe<ColorInput>;
  primaryHover?: InputMaybe<ColorInput>;
  white?: InputMaybe<ColorInput>;
};

export type RootColorCreateManyInlineInput = {
  /** Create and connect multiple existing RootColor documents */
  create?: InputMaybe<Array<RootColorCreateInput>>;
};

export type RootColorCreateOneInlineInput = {
  /** Create and connect one RootColor document */
  create?: InputMaybe<RootColorCreateInput>;
};

export type RootColorCreateWithPositionInput = {
  /** Document to create */
  data: RootColorCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type RootColorEdge = {
  __typename?: 'RootColorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: RootColor;
};

/** Identifies documents */
export type RootColorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RootColorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RootColorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RootColorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum RootColorOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type RootColorParent = SiteLibrary;

export type RootColorParentConnectInput = {
  SiteLibrary?: InputMaybe<SiteLibraryConnectInput>;
};

export type RootColorParentCreateInput = {
  SiteLibrary?: InputMaybe<SiteLibraryCreateInput>;
};

export type RootColorParentCreateManyInlineInput = {
  /** Connect multiple existing RootColorParent documents */
  connect?: InputMaybe<Array<RootColorParentWhereUniqueInput>>;
  /** Create and connect multiple existing RootColorParent documents */
  create?: InputMaybe<Array<RootColorParentCreateInput>>;
};

export type RootColorParentCreateOneInlineInput = {
  /** Connect one existing RootColorParent document */
  connect?: InputMaybe<RootColorParentWhereUniqueInput>;
  /** Create and connect one RootColorParent document */
  create?: InputMaybe<RootColorParentCreateInput>;
};

export type RootColorParentUpdateInput = {
  SiteLibrary?: InputMaybe<SiteLibraryUpdateInput>;
};

export type RootColorParentUpdateManyInlineInput = {
  /** Connect multiple existing RootColorParent documents */
  connect?: InputMaybe<Array<RootColorParentConnectInput>>;
  /** Create and connect multiple RootColorParent documents */
  create?: InputMaybe<Array<RootColorParentCreateInput>>;
  /** Delete multiple RootColorParent documents */
  delete?: InputMaybe<Array<RootColorParentWhereUniqueInput>>;
  /** Disconnect multiple RootColorParent documents */
  disconnect?: InputMaybe<Array<RootColorParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RootColorParent documents */
  set?: InputMaybe<Array<RootColorParentWhereUniqueInput>>;
  /** Update multiple RootColorParent documents */
  update?: InputMaybe<Array<RootColorParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RootColorParent documents */
  upsert?: InputMaybe<Array<RootColorParentUpsertWithNestedWhereUniqueInput>>;
};

export type RootColorParentUpdateManyWithNestedWhereInput = {
  SiteLibrary?: InputMaybe<SiteLibraryUpdateManyWithNestedWhereInput>;
};

export type RootColorParentUpdateOneInlineInput = {
  /** Connect existing RootColorParent document */
  connect?: InputMaybe<RootColorParentWhereUniqueInput>;
  /** Create and connect one RootColorParent document */
  create?: InputMaybe<RootColorParentCreateInput>;
  /** Delete currently connected RootColorParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected RootColorParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single RootColorParent document */
  update?: InputMaybe<RootColorParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RootColorParent document */
  upsert?: InputMaybe<RootColorParentUpsertWithNestedWhereUniqueInput>;
};

export type RootColorParentUpdateWithNestedWhereUniqueInput = {
  SiteLibrary?: InputMaybe<SiteLibraryUpdateWithNestedWhereUniqueInput>;
};

export type RootColorParentUpsertWithNestedWhereUniqueInput = {
  SiteLibrary?: InputMaybe<SiteLibraryUpsertWithNestedWhereUniqueInput>;
};

export type RootColorParentWhereInput = {
  SiteLibrary?: InputMaybe<SiteLibraryWhereInput>;
};

export type RootColorParentWhereUniqueInput = {
  SiteLibrary?: InputMaybe<SiteLibraryWhereUniqueInput>;
};

export type RootColorUpdateInput = {
  dark?: InputMaybe<ColorInput>;
  primary?: InputMaybe<ColorInput>;
  primaryFade?: InputMaybe<ColorInput>;
  primaryFadeOpacity?: InputMaybe<ColorInput>;
  primaryHover?: InputMaybe<ColorInput>;
  white?: InputMaybe<ColorInput>;
};

export type RootColorUpdateManyInlineInput = {
  /** Create and connect multiple RootColor component instances */
  create?: InputMaybe<Array<RootColorCreateWithPositionInput>>;
  /** Delete multiple RootColor documents */
  delete?: InputMaybe<Array<RootColorWhereUniqueInput>>;
  /** Update multiple RootColor component instances */
  update?: InputMaybe<Array<RootColorUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple RootColor component instances */
  upsert?: InputMaybe<Array<RootColorUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type RootColorUpdateManyInput = {
  dark?: InputMaybe<ColorInput>;
  primary?: InputMaybe<ColorInput>;
  primaryFade?: InputMaybe<ColorInput>;
  primaryFadeOpacity?: InputMaybe<ColorInput>;
  primaryHover?: InputMaybe<ColorInput>;
  white?: InputMaybe<ColorInput>;
};

export type RootColorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RootColorUpdateManyInput;
  /** Document search */
  where: RootColorWhereInput;
};

export type RootColorUpdateOneInlineInput = {
  /** Create and connect one RootColor document */
  create?: InputMaybe<RootColorCreateInput>;
  /** Delete currently connected RootColor document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single RootColor document */
  update?: InputMaybe<RootColorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RootColor document */
  upsert?: InputMaybe<RootColorUpsertWithNestedWhereUniqueInput>;
};

export type RootColorUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<RootColorUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RootColorWhereUniqueInput;
};

export type RootColorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RootColorUpdateInput;
  /** Unique document search */
  where: RootColorWhereUniqueInput;
};

export type RootColorUpsertInput = {
  /** Create document if it didn't exist */
  create: RootColorCreateInput;
  /** Update document if it exists */
  update: RootColorUpdateInput;
};

export type RootColorUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<RootColorUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RootColorWhereUniqueInput;
};

export type RootColorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RootColorUpsertInput;
  /** Unique document search */
  where: RootColorWhereUniqueInput;
};

/** Identifies documents */
export type RootColorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RootColorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RootColorWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RootColorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References RootColor record uniquely */
export type RootColorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Album | Asset | Blog | Event | LogoTable | Navigation | Page | Profile | SiteLibrary | Testimonial;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type SiteLibrary = Node & {
  __typename?: 'SiteLibrary';
  analyticsId?: Maybe<Scalars['String']>;
  appleMusicLink?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<SiteLibrary>;
  facebookLink?: Maybe<Scalars['String']>;
  favicon?: Maybe<Asset>;
  githubLink?: Maybe<Scalars['String']>;
  /** List of SiteLibrary versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  instagramLink?: Maybe<Scalars['String']>;
  isSpanish?: Maybe<Scalars['Boolean']>;
  linkedinLink?: Maybe<Scalars['String']>;
  logo?: Maybe<Asset>;
  mailchimp?: Maybe<Scalars['String']>;
  metaAppleTouchIcon?: Maybe<Asset>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDomain?: Maybe<Scalars['String']>;
  metaGoogleConsoleVerification?: Maybe<Scalars['String']>;
  metaOgImage?: Maybe<Asset>;
  pandoraLink?: Maybe<Scalars['String']>;
  paypalClientId?: Maybe<Scalars['String']>;
  pinterestLink?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLogo?: Maybe<Asset>;
  secondaryName?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  /** CSS Class added to body */
  siteCssBodyClass?: Maybe<Scalars['String']>;
  siteLibraryJson?: Maybe<Scalars['Json']>;
  siteTheme?: Maybe<SiteTheme>;
  snapchatLink?: Maybe<Scalars['String']>;
  soundcloudLink?: Maybe<Scalars['String']>;
  spotifyLink?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  themeColor?: Maybe<RootColor>;
  threadsLink?: Maybe<Scalars['String']>;
  tikTokLink?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  twitterLink?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  youtubeApiKey: Scalars['String'];
  youtubeLink?: Maybe<Scalars['String']>;
};


export type SiteLibraryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SiteLibraryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SiteLibraryFaviconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SiteLibraryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type SiteLibraryLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SiteLibraryMetaAppleTouchIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SiteLibraryMetaOgImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SiteLibraryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SiteLibraryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SiteLibrarySecondaryLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SiteLibraryThemeColorArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SiteLibraryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SiteLibraryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SiteLibraryWhereUniqueInput;
};

/** A connection to a list of items. */
export type SiteLibraryConnection = {
  __typename?: 'SiteLibraryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SiteLibraryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SiteLibraryCreateInput = {
  analyticsId?: InputMaybe<Scalars['String']>;
  appleMusicLink?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<AssetCreateOneInlineInput>;
  githubLink?: InputMaybe<Scalars['String']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  isSpanish?: InputMaybe<Scalars['Boolean']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<AssetCreateOneInlineInput>;
  mailchimp?: InputMaybe<Scalars['String']>;
  metaAppleTouchIcon?: InputMaybe<AssetCreateOneInlineInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDomain?: InputMaybe<Scalars['String']>;
  metaGoogleConsoleVerification?: InputMaybe<Scalars['String']>;
  metaOgImage?: InputMaybe<AssetCreateOneInlineInput>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  pinterestLink?: InputMaybe<Scalars['String']>;
  secondaryLink?: InputMaybe<Scalars['String']>;
  secondaryLogo?: InputMaybe<AssetCreateOneInlineInput>;
  secondaryName?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  siteCssBodyClass?: InputMaybe<Scalars['String']>;
  siteLibraryJson?: InputMaybe<Scalars['Json']>;
  siteTheme?: InputMaybe<SiteTheme>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  themeColor?: InputMaybe<RootColorCreateOneInlineInput>;
  threadsLink?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  youtubeApiKey: Scalars['String'];
  youtubeLink?: InputMaybe<Scalars['String']>;
};

export type SiteLibraryCreateManyInlineInput = {
  /** Connect multiple existing SiteLibrary documents */
  connect?: InputMaybe<Array<SiteLibraryWhereUniqueInput>>;
  /** Create and connect multiple existing SiteLibrary documents */
  create?: InputMaybe<Array<SiteLibraryCreateInput>>;
};

export type SiteLibraryCreateOneInlineInput = {
  /** Connect one existing SiteLibrary document */
  connect?: InputMaybe<SiteLibraryWhereUniqueInput>;
  /** Create and connect one SiteLibrary document */
  create?: InputMaybe<SiteLibraryCreateInput>;
};

/** An edge in a connection. */
export type SiteLibraryEdge = {
  __typename?: 'SiteLibraryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SiteLibrary;
};

/** Identifies documents */
export type SiteLibraryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SiteLibraryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SiteLibraryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SiteLibraryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  analyticsId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  analyticsId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  analyticsId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  analyticsId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  analyticsId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  analyticsId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  analyticsId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  analyticsId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  analyticsId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  analyticsId_starts_with?: InputMaybe<Scalars['String']>;
  appleMusicLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  appleMusicLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  appleMusicLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  appleMusicLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  appleMusicLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  appleMusicLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  appleMusicLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  appleMusicLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  appleMusicLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  appleMusicLink_starts_with?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactEmail_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactEmail_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactName_starts_with?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactPhone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactPhone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactPhone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactPhone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhone_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SiteLibraryWhereStageInput>;
  documentInStages_none?: InputMaybe<SiteLibraryWhereStageInput>;
  documentInStages_some?: InputMaybe<SiteLibraryWhereStageInput>;
  facebookLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebookLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  facebookLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebookLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  facebookLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebookLink_starts_with?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<AssetWhereInput>;
  githubLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  githubLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  githubLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  githubLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  githubLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  githubLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  githubLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  githubLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  githubLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  githubLink_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagramLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  instagramLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagramLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  instagramLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagramLink_starts_with?: InputMaybe<Scalars['String']>;
  isSpanish?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isSpanish_not?: InputMaybe<Scalars['Boolean']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkedinLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedinLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkedinLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedinLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedinLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  linkedinLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedinLink_starts_with?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<AssetWhereInput>;
  mailchimp?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mailchimp_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mailchimp_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mailchimp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mailchimp_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mailchimp_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mailchimp_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mailchimp_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mailchimp_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mailchimp_starts_with?: InputMaybe<Scalars['String']>;
  metaAppleTouchIcon?: InputMaybe<AssetWhereInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']>;
  metaDomain?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDomain_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDomain_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDomain_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaDomain_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDomain_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDomain_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDomain_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metaDomain_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDomain_starts_with?: InputMaybe<Scalars['String']>;
  metaGoogleConsoleVerification?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaGoogleConsoleVerification_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaGoogleConsoleVerification_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaGoogleConsoleVerification_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaGoogleConsoleVerification_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaGoogleConsoleVerification_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaGoogleConsoleVerification_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaGoogleConsoleVerification_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metaGoogleConsoleVerification_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaGoogleConsoleVerification_starts_with?: InputMaybe<Scalars['String']>;
  metaOgImage?: InputMaybe<AssetWhereInput>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pandoraLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pandoraLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pandoraLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pandoraLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pandoraLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pandoraLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pandoraLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pandoraLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pandoraLink_starts_with?: InputMaybe<Scalars['String']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  paypalClientId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  paypalClientId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  paypalClientId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  paypalClientId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  paypalClientId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  paypalClientId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  paypalClientId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  paypalClientId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  paypalClientId_starts_with?: InputMaybe<Scalars['String']>;
  pinterestLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pinterestLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pinterestLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pinterestLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pinterestLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pinterestLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pinterestLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pinterestLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pinterestLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pinterestLink_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  secondaryLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  secondaryLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  secondaryLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secondaryLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  secondaryLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  secondaryLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  secondaryLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  secondaryLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  secondaryLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  secondaryLink_starts_with?: InputMaybe<Scalars['String']>;
  secondaryLogo?: InputMaybe<AssetWhereInput>;
  secondaryName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  secondaryName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  secondaryName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secondaryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  secondaryName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  secondaryName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  secondaryName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  secondaryName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  secondaryName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  secondaryName_starts_with?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  signature_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  signature_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  signature_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  signature_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  signature_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  signature_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  signature_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  signature_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  signature_starts_with?: InputMaybe<Scalars['String']>;
  siteCssBodyClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  siteCssBodyClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  siteCssBodyClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  siteCssBodyClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  siteCssBodyClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  siteCssBodyClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  siteCssBodyClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  siteCssBodyClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  siteCssBodyClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  siteCssBodyClass_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given json path. */
  siteLibraryJson_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  siteLibraryJson_value_recursive?: InputMaybe<Scalars['Json']>;
  siteTheme?: InputMaybe<SiteTheme>;
  /** All values that are contained in given list. */
  siteTheme_in?: InputMaybe<Array<InputMaybe<SiteTheme>>>;
  /** Any other value that exists and is not equal to the given value. */
  siteTheme_not?: InputMaybe<SiteTheme>;
  /** All values that are not contained in given list. */
  siteTheme_not_in?: InputMaybe<Array<InputMaybe<SiteTheme>>>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  snapchatLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  snapchatLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  snapchatLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  snapchatLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  snapchatLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  snapchatLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  snapchatLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  snapchatLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  snapchatLink_starts_with?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  soundcloudLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  soundcloudLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  soundcloudLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  soundcloudLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  soundcloudLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  soundcloudLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  soundcloudLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  soundcloudLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  soundcloudLink_starts_with?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  spotifyLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  spotifyLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  spotifyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  spotifyLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  spotifyLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  spotifyLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  spotifyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  spotifyLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  spotifyLink_starts_with?: InputMaybe<Scalars['String']>;
  themeColor?: InputMaybe<RootColorWhereInput>;
  threadsLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  threadsLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  threadsLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  threadsLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  threadsLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  threadsLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  threadsLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  threadsLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  threadsLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  threadsLink_starts_with?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tikTokLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tikTokLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tikTokLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tikTokLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tikTokLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tikTokLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tikTokLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tikTokLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tikTokLink_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  twitterLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterLink_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  youtubeApiKey?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeApiKey_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeApiKey_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeApiKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeApiKey_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeApiKey_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeApiKey_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeApiKey_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeApiKey_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeApiKey_starts_with?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeLink_starts_with?: InputMaybe<Scalars['String']>;
};

export enum SiteLibraryOrderByInput {
  AnalyticsIdAsc = 'analyticsId_ASC',
  AnalyticsIdDesc = 'analyticsId_DESC',
  AppleMusicLinkAsc = 'appleMusicLink_ASC',
  AppleMusicLinkDesc = 'appleMusicLink_DESC',
  ContactEmailAsc = 'contactEmail_ASC',
  ContactEmailDesc = 'contactEmail_DESC',
  ContactNameAsc = 'contactName_ASC',
  ContactNameDesc = 'contactName_DESC',
  ContactPhoneAsc = 'contactPhone_ASC',
  ContactPhoneDesc = 'contactPhone_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  GithubLinkAsc = 'githubLink_ASC',
  GithubLinkDesc = 'githubLink_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  IsSpanishAsc = 'isSpanish_ASC',
  IsSpanishDesc = 'isSpanish_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  MailchimpAsc = 'mailchimp_ASC',
  MailchimpDesc = 'mailchimp_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaDomainAsc = 'metaDomain_ASC',
  MetaDomainDesc = 'metaDomain_DESC',
  MetaGoogleConsoleVerificationAsc = 'metaGoogleConsoleVerification_ASC',
  MetaGoogleConsoleVerificationDesc = 'metaGoogleConsoleVerification_DESC',
  PandoraLinkAsc = 'pandoraLink_ASC',
  PandoraLinkDesc = 'pandoraLink_DESC',
  PaypalClientIdAsc = 'paypalClientId_ASC',
  PaypalClientIdDesc = 'paypalClientId_DESC',
  PinterestLinkAsc = 'pinterestLink_ASC',
  PinterestLinkDesc = 'pinterestLink_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SecondaryLinkAsc = 'secondaryLink_ASC',
  SecondaryLinkDesc = 'secondaryLink_DESC',
  SecondaryNameAsc = 'secondaryName_ASC',
  SecondaryNameDesc = 'secondaryName_DESC',
  SignatureAsc = 'signature_ASC',
  SignatureDesc = 'signature_DESC',
  SiteCssBodyClassAsc = 'siteCssBodyClass_ASC',
  SiteCssBodyClassDesc = 'siteCssBodyClass_DESC',
  SiteThemeAsc = 'siteTheme_ASC',
  SiteThemeDesc = 'siteTheme_DESC',
  SnapchatLinkAsc = 'snapchatLink_ASC',
  SnapchatLinkDesc = 'snapchatLink_DESC',
  SoundcloudLinkAsc = 'soundcloudLink_ASC',
  SoundcloudLinkDesc = 'soundcloudLink_DESC',
  SpotifyLinkAsc = 'spotifyLink_ASC',
  SpotifyLinkDesc = 'spotifyLink_DESC',
  ThreadsLinkAsc = 'threadsLink_ASC',
  ThreadsLinkDesc = 'threadsLink_DESC',
  TikTokLinkAsc = 'tikTokLink_ASC',
  TikTokLinkDesc = 'tikTokLink_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YoutubeApiKeyAsc = 'youtubeApiKey_ASC',
  YoutubeApiKeyDesc = 'youtubeApiKey_DESC',
  YoutubeLinkAsc = 'youtubeLink_ASC',
  YoutubeLinkDesc = 'youtubeLink_DESC'
}

export type SiteLibraryUpdateInput = {
  analyticsId?: InputMaybe<Scalars['String']>;
  appleMusicLink?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<AssetUpdateOneInlineInput>;
  githubLink?: InputMaybe<Scalars['String']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  isSpanish?: InputMaybe<Scalars['Boolean']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  mailchimp?: InputMaybe<Scalars['String']>;
  metaAppleTouchIcon?: InputMaybe<AssetUpdateOneInlineInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDomain?: InputMaybe<Scalars['String']>;
  metaGoogleConsoleVerification?: InputMaybe<Scalars['String']>;
  metaOgImage?: InputMaybe<AssetUpdateOneInlineInput>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  pinterestLink?: InputMaybe<Scalars['String']>;
  secondaryLink?: InputMaybe<Scalars['String']>;
  secondaryLogo?: InputMaybe<AssetUpdateOneInlineInput>;
  secondaryName?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  siteCssBodyClass?: InputMaybe<Scalars['String']>;
  siteLibraryJson?: InputMaybe<Scalars['Json']>;
  siteTheme?: InputMaybe<SiteTheme>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  themeColor?: InputMaybe<RootColorUpdateOneInlineInput>;
  threadsLink?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  youtubeApiKey?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
};

export type SiteLibraryUpdateManyInlineInput = {
  /** Connect multiple existing SiteLibrary documents */
  connect?: InputMaybe<Array<SiteLibraryConnectInput>>;
  /** Create and connect multiple SiteLibrary documents */
  create?: InputMaybe<Array<SiteLibraryCreateInput>>;
  /** Delete multiple SiteLibrary documents */
  delete?: InputMaybe<Array<SiteLibraryWhereUniqueInput>>;
  /** Disconnect multiple SiteLibrary documents */
  disconnect?: InputMaybe<Array<SiteLibraryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SiteLibrary documents */
  set?: InputMaybe<Array<SiteLibraryWhereUniqueInput>>;
  /** Update multiple SiteLibrary documents */
  update?: InputMaybe<Array<SiteLibraryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SiteLibrary documents */
  upsert?: InputMaybe<Array<SiteLibraryUpsertWithNestedWhereUniqueInput>>;
};

export type SiteLibraryUpdateManyInput = {
  analyticsId?: InputMaybe<Scalars['String']>;
  appleMusicLink?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  facebookLink?: InputMaybe<Scalars['String']>;
  githubLink?: InputMaybe<Scalars['String']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  isSpanish?: InputMaybe<Scalars['Boolean']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  mailchimp?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaDomain?: InputMaybe<Scalars['String']>;
  metaGoogleConsoleVerification?: InputMaybe<Scalars['String']>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  pinterestLink?: InputMaybe<Scalars['String']>;
  secondaryLink?: InputMaybe<Scalars['String']>;
  secondaryName?: InputMaybe<Scalars['String']>;
  siteCssBodyClass?: InputMaybe<Scalars['String']>;
  siteLibraryJson?: InputMaybe<Scalars['Json']>;
  siteTheme?: InputMaybe<SiteTheme>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  threadsLink?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  youtubeApiKey?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
};

export type SiteLibraryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SiteLibraryUpdateManyInput;
  /** Document search */
  where: SiteLibraryWhereInput;
};

export type SiteLibraryUpdateOneInlineInput = {
  /** Connect existing SiteLibrary document */
  connect?: InputMaybe<SiteLibraryWhereUniqueInput>;
  /** Create and connect one SiteLibrary document */
  create?: InputMaybe<SiteLibraryCreateInput>;
  /** Delete currently connected SiteLibrary document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected SiteLibrary document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single SiteLibrary document */
  update?: InputMaybe<SiteLibraryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SiteLibrary document */
  upsert?: InputMaybe<SiteLibraryUpsertWithNestedWhereUniqueInput>;
};

export type SiteLibraryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SiteLibraryUpdateInput;
  /** Unique document search */
  where: SiteLibraryWhereUniqueInput;
};

export type SiteLibraryUpsertInput = {
  /** Create document if it didn't exist */
  create: SiteLibraryCreateInput;
  /** Update document if it exists */
  update: SiteLibraryUpdateInput;
};

export type SiteLibraryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SiteLibraryUpsertInput;
  /** Unique document search */
  where: SiteLibraryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SiteLibraryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type SiteLibraryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SiteLibraryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SiteLibraryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SiteLibraryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  analyticsId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  analyticsId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  analyticsId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  analyticsId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  analyticsId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  analyticsId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  analyticsId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  analyticsId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  analyticsId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  analyticsId_starts_with?: InputMaybe<Scalars['String']>;
  appleMusicLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  appleMusicLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  appleMusicLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  appleMusicLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  appleMusicLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  appleMusicLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  appleMusicLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  appleMusicLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  appleMusicLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  appleMusicLink_starts_with?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactEmail_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactEmail_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactEmail_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactEmail_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactEmail_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactEmail_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactEmail_starts_with?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactName_starts_with?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactPhone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactPhone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactPhone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactPhone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactPhone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactPhone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactPhone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactPhone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactPhone_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SiteLibraryWhereStageInput>;
  documentInStages_none?: InputMaybe<SiteLibraryWhereStageInput>;
  documentInStages_some?: InputMaybe<SiteLibraryWhereStageInput>;
  facebookLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  facebookLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  facebookLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  facebookLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  facebookLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  facebookLink_starts_with?: InputMaybe<Scalars['String']>;
  favicon?: InputMaybe<AssetWhereInput>;
  githubLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  githubLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  githubLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  githubLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  githubLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  githubLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  githubLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  githubLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  githubLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  githubLink_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  instagramLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  instagramLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  instagramLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  instagramLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  instagramLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  instagramLink_starts_with?: InputMaybe<Scalars['String']>;
  isSpanish?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isSpanish_not?: InputMaybe<Scalars['Boolean']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  linkedinLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  linkedinLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkedinLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  linkedinLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  linkedinLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  linkedinLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  linkedinLink_starts_with?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<AssetWhereInput>;
  mailchimp?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mailchimp_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mailchimp_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mailchimp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mailchimp_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mailchimp_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mailchimp_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mailchimp_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mailchimp_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mailchimp_starts_with?: InputMaybe<Scalars['String']>;
  metaAppleTouchIcon?: InputMaybe<AssetWhereInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']>;
  metaDomain?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDomain_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDomain_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDomain_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaDomain_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDomain_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDomain_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDomain_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metaDomain_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDomain_starts_with?: InputMaybe<Scalars['String']>;
  metaGoogleConsoleVerification?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaGoogleConsoleVerification_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaGoogleConsoleVerification_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaGoogleConsoleVerification_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaGoogleConsoleVerification_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaGoogleConsoleVerification_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaGoogleConsoleVerification_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaGoogleConsoleVerification_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metaGoogleConsoleVerification_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaGoogleConsoleVerification_starts_with?: InputMaybe<Scalars['String']>;
  metaOgImage?: InputMaybe<AssetWhereInput>;
  pandoraLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pandoraLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pandoraLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pandoraLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pandoraLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pandoraLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pandoraLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pandoraLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pandoraLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pandoraLink_starts_with?: InputMaybe<Scalars['String']>;
  paypalClientId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  paypalClientId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  paypalClientId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  paypalClientId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  paypalClientId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  paypalClientId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  paypalClientId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  paypalClientId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  paypalClientId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  paypalClientId_starts_with?: InputMaybe<Scalars['String']>;
  pinterestLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pinterestLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pinterestLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pinterestLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pinterestLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pinterestLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pinterestLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pinterestLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pinterestLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pinterestLink_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  secondaryLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  secondaryLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  secondaryLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secondaryLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  secondaryLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  secondaryLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  secondaryLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  secondaryLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  secondaryLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  secondaryLink_starts_with?: InputMaybe<Scalars['String']>;
  secondaryLogo?: InputMaybe<AssetWhereInput>;
  secondaryName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  secondaryName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  secondaryName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  secondaryName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  secondaryName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  secondaryName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  secondaryName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  secondaryName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  secondaryName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  secondaryName_starts_with?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  signature_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  signature_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  signature_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  signature_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  signature_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  signature_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  signature_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  signature_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  signature_starts_with?: InputMaybe<Scalars['String']>;
  siteCssBodyClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  siteCssBodyClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  siteCssBodyClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  siteCssBodyClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  siteCssBodyClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  siteCssBodyClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  siteCssBodyClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  siteCssBodyClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  siteCssBodyClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  siteCssBodyClass_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given json path. */
  siteLibraryJson_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  siteLibraryJson_value_recursive?: InputMaybe<Scalars['Json']>;
  siteTheme?: InputMaybe<SiteTheme>;
  /** All values that are contained in given list. */
  siteTheme_in?: InputMaybe<Array<InputMaybe<SiteTheme>>>;
  /** Any other value that exists and is not equal to the given value. */
  siteTheme_not?: InputMaybe<SiteTheme>;
  /** All values that are not contained in given list. */
  siteTheme_not_in?: InputMaybe<Array<InputMaybe<SiteTheme>>>;
  snapchatLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  snapchatLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  snapchatLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  snapchatLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  snapchatLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  snapchatLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  snapchatLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  snapchatLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  snapchatLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  snapchatLink_starts_with?: InputMaybe<Scalars['String']>;
  soundcloudLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  soundcloudLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  soundcloudLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  soundcloudLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  soundcloudLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  soundcloudLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  soundcloudLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  soundcloudLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  soundcloudLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  soundcloudLink_starts_with?: InputMaybe<Scalars['String']>;
  spotifyLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  spotifyLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  spotifyLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  spotifyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  spotifyLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  spotifyLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  spotifyLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  spotifyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  spotifyLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  spotifyLink_starts_with?: InputMaybe<Scalars['String']>;
  themeColor?: InputMaybe<RootColorWhereInput>;
  threadsLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  threadsLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  threadsLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  threadsLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  threadsLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  threadsLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  threadsLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  threadsLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  threadsLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  threadsLink_starts_with?: InputMaybe<Scalars['String']>;
  tikTokLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tikTokLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tikTokLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tikTokLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tikTokLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tikTokLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tikTokLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tikTokLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tikTokLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tikTokLink_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  twitterLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  twitterLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  twitterLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterLink_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  youtubeApiKey?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeApiKey_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeApiKey_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeApiKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeApiKey_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeApiKey_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeApiKey_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeApiKey_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeApiKey_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeApiKey_starts_with?: InputMaybe<Scalars['String']>;
  youtubeLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeLink_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SiteLibraryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SiteLibraryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SiteLibraryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SiteLibraryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SiteLibraryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References SiteLibrary record uniquely */
export type SiteLibraryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  signature?: InputMaybe<Scalars['String']>;
};

export enum SiteTheme {
  Default = 'default'
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Testimonial = Node & {
  __typename?: 'Testimonial';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Testimonial>;
  /** List of Testimonial versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  testimonialAvatar?: Maybe<Asset>;
  testimonialJobTitle?: Maybe<Scalars['String']>;
  testimonialName?: Maybe<Scalars['String']>;
  testimonialText?: Maybe<RichText>;
  testimonialType?: Maybe<TestimonialType>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TestimonialCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TestimonialDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TestimonialHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TestimonialPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TestimonialScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TestimonialTestimonialAvatarArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TestimonialUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TestimonialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TestimonialWhereUniqueInput;
};

/** A connection to a list of items. */
export type TestimonialConnection = {
  __typename?: 'TestimonialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TestimonialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TestimonialCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  testimonialAvatar?: InputMaybe<AssetCreateOneInlineInput>;
  testimonialJobTitle?: InputMaybe<Scalars['String']>;
  testimonialName?: InputMaybe<Scalars['String']>;
  testimonialText?: InputMaybe<Scalars['RichTextAST']>;
  testimonialType?: InputMaybe<TestimonialType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TestimonialCreateManyInlineInput = {
  /** Connect multiple existing Testimonial documents */
  connect?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Create and connect multiple existing Testimonial documents */
  create?: InputMaybe<Array<TestimonialCreateInput>>;
};

export type TestimonialCreateOneInlineInput = {
  /** Connect one existing Testimonial document */
  connect?: InputMaybe<TestimonialWhereUniqueInput>;
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>;
};

/** An edge in a connection. */
export type TestimonialEdge = {
  __typename?: 'TestimonialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Testimonial;
};

/** Identifies documents */
export type TestimonialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_none?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_some?: InputMaybe<TestimonialWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  testimonialAvatar?: InputMaybe<AssetWhereInput>;
  testimonialJobTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  testimonialJobTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  testimonialJobTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  testimonialJobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  testimonialJobTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  testimonialJobTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  testimonialJobTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  testimonialJobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  testimonialJobTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  testimonialJobTitle_starts_with?: InputMaybe<Scalars['String']>;
  testimonialName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  testimonialName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  testimonialName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  testimonialName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  testimonialName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  testimonialName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  testimonialName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  testimonialName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  testimonialName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  testimonialName_starts_with?: InputMaybe<Scalars['String']>;
  testimonialType?: InputMaybe<TestimonialType>;
  /** All values that are contained in given list. */
  testimonialType_in?: InputMaybe<Array<InputMaybe<TestimonialType>>>;
  /** Any other value that exists and is not equal to the given value. */
  testimonialType_not?: InputMaybe<TestimonialType>;
  /** All values that are not contained in given list. */
  testimonialType_not_in?: InputMaybe<Array<InputMaybe<TestimonialType>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TestimonialOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TestimonialJobTitleAsc = 'testimonialJobTitle_ASC',
  TestimonialJobTitleDesc = 'testimonialJobTitle_DESC',
  TestimonialNameAsc = 'testimonialName_ASC',
  TestimonialNameDesc = 'testimonialName_DESC',
  TestimonialTypeAsc = 'testimonialType_ASC',
  TestimonialTypeDesc = 'testimonialType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum TestimonialType {
  Client = 'Client',
  Investor = 'Investor',
  Partner = 'Partner',
  Sponsor = 'Sponsor'
}

export type TestimonialUpdateInput = {
  testimonialAvatar?: InputMaybe<AssetUpdateOneInlineInput>;
  testimonialJobTitle?: InputMaybe<Scalars['String']>;
  testimonialName?: InputMaybe<Scalars['String']>;
  testimonialText?: InputMaybe<Scalars['RichTextAST']>;
  testimonialType?: InputMaybe<TestimonialType>;
};

export type TestimonialUpdateManyInlineInput = {
  /** Connect multiple existing Testimonial documents */
  connect?: InputMaybe<Array<TestimonialConnectInput>>;
  /** Create and connect multiple Testimonial documents */
  create?: InputMaybe<Array<TestimonialCreateInput>>;
  /** Delete multiple Testimonial documents */
  delete?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Disconnect multiple Testimonial documents */
  disconnect?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Testimonial documents */
  set?: InputMaybe<Array<TestimonialWhereUniqueInput>>;
  /** Update multiple Testimonial documents */
  update?: InputMaybe<Array<TestimonialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Testimonial documents */
  upsert?: InputMaybe<Array<TestimonialUpsertWithNestedWhereUniqueInput>>;
};

export type TestimonialUpdateManyInput = {
  testimonialJobTitle?: InputMaybe<Scalars['String']>;
  testimonialName?: InputMaybe<Scalars['String']>;
  testimonialText?: InputMaybe<Scalars['RichTextAST']>;
  testimonialType?: InputMaybe<TestimonialType>;
};

export type TestimonialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TestimonialUpdateManyInput;
  /** Document search */
  where: TestimonialWhereInput;
};

export type TestimonialUpdateOneInlineInput = {
  /** Connect existing Testimonial document */
  connect?: InputMaybe<TestimonialWhereUniqueInput>;
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>;
  /** Delete currently connected Testimonial document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Testimonial document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Testimonial document */
  update?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Testimonial document */
  upsert?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueInput>;
};

export type TestimonialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TestimonialUpdateInput;
  /** Unique document search */
  where: TestimonialWhereUniqueInput;
};

export type TestimonialUpsertInput = {
  /** Create document if it didn't exist */
  create: TestimonialCreateInput;
  /** Update document if it exists */
  update: TestimonialUpdateInput;
};

export type TestimonialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TestimonialUpsertInput;
  /** Unique document search */
  where: TestimonialWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TestimonialWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type TestimonialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_none?: InputMaybe<TestimonialWhereStageInput>;
  documentInStages_some?: InputMaybe<TestimonialWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  testimonialAvatar?: InputMaybe<AssetWhereInput>;
  testimonialJobTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  testimonialJobTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  testimonialJobTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  testimonialJobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  testimonialJobTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  testimonialJobTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  testimonialJobTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  testimonialJobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  testimonialJobTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  testimonialJobTitle_starts_with?: InputMaybe<Scalars['String']>;
  testimonialName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  testimonialName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  testimonialName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  testimonialName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  testimonialName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  testimonialName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  testimonialName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  testimonialName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  testimonialName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  testimonialName_starts_with?: InputMaybe<Scalars['String']>;
  testimonialType?: InputMaybe<TestimonialType>;
  /** All values that are contained in given list. */
  testimonialType_in?: InputMaybe<Array<InputMaybe<TestimonialType>>>;
  /** Any other value that exists and is not equal to the given value. */
  testimonialType_not?: InputMaybe<TestimonialType>;
  /** All values that are not contained in given list. */
  testimonialType_not_in?: InputMaybe<Array<InputMaybe<TestimonialType>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TestimonialWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TestimonialWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Testimonial record uniquely */
export type TestimonialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type TextContent = {
  __typename?: 'TextContent';
  content?: Maybe<RichText>;
  contentAlign?: Maybe<ContentAlign>;
  contentImage?: Maybe<Asset>;
  cssClass?: Maybe<Scalars['String']>;
  header?: Maybe<RichText>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageStyle: Array<ImageStyle>;
  /** Wraps text elements in Link styled as a card */
  link?: Maybe<Scalars['String']>;
  linkImage?: Maybe<Scalars['Boolean']>;
  /** System stage field */
  stage: Stage;
  subHeader?: Maybe<RichText>;
  textContentWidth?: Maybe<PageWidthStyle>;
};


export type TextContentContentImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TextContentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TextContentWhereUniqueInput;
};

/** A connection to a list of items. */
export type TextContentConnection = {
  __typename?: 'TextContentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TextContentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TextContentCreateInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  contentAlign?: InputMaybe<ContentAlign>;
  contentImage?: InputMaybe<AssetCreateOneInlineInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['RichTextAST']>;
  imageStyle?: InputMaybe<Array<ImageStyle>>;
  link?: InputMaybe<Scalars['String']>;
  linkImage?: InputMaybe<Scalars['Boolean']>;
  subHeader?: InputMaybe<Scalars['RichTextAST']>;
  textContentWidth?: InputMaybe<PageWidthStyle>;
};

export type TextContentCreateManyInlineInput = {
  /** Create and connect multiple existing TextContent documents */
  create?: InputMaybe<Array<TextContentCreateInput>>;
};

export type TextContentCreateOneInlineInput = {
  /** Create and connect one TextContent document */
  create?: InputMaybe<TextContentCreateInput>;
};

export type TextContentCreateWithPositionInput = {
  /** Document to create */
  data: TextContentCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TextContentEdge = {
  __typename?: 'TextContentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TextContent;
};

/** Identifies documents */
export type TextContentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  /** All values that are contained in given list. */
  contentAlign_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  /** Any other value that exists and is not equal to the given value. */
  contentAlign_not?: InputMaybe<ContentAlign>;
  /** All values that are not contained in given list. */
  contentAlign_not_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  contentImage?: InputMaybe<AssetWhereInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  imageStyle?: InputMaybe<Array<ImageStyle>>;
  /** Matches if the field array contains *all* items provided to the filter */
  imageStyle_contains_all?: InputMaybe<Array<ImageStyle>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  imageStyle_contains_none?: InputMaybe<Array<ImageStyle>>;
  /** Matches if the field array contains at least one item provided to the filter */
  imageStyle_contains_some?: InputMaybe<Array<ImageStyle>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  imageStyle_not?: InputMaybe<Array<ImageStyle>>;
  link?: InputMaybe<Scalars['String']>;
  linkImage?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  linkImage_not?: InputMaybe<Scalars['Boolean']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  textContentWidth?: InputMaybe<PageWidthStyle>;
  /** All values that are contained in given list. */
  textContentWidth_in?: InputMaybe<Array<InputMaybe<PageWidthStyle>>>;
  /** Any other value that exists and is not equal to the given value. */
  textContentWidth_not?: InputMaybe<PageWidthStyle>;
  /** All values that are not contained in given list. */
  textContentWidth_not_in?: InputMaybe<Array<InputMaybe<PageWidthStyle>>>;
};

export enum TextContentOrderByInput {
  ContentAlignAsc = 'contentAlign_ASC',
  ContentAlignDesc = 'contentAlign_DESC',
  CssClassAsc = 'cssClass_ASC',
  CssClassDesc = 'cssClass_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  LinkImageAsc = 'linkImage_ASC',
  LinkImageDesc = 'linkImage_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  TextContentWidthAsc = 'textContentWidth_ASC',
  TextContentWidthDesc = 'textContentWidth_DESC'
}

export type TextContentParent = HeroMediaSlider | LayoutBlockColumn;

export type TextContentParentConnectInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderConnectInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnConnectInput>;
};

export type TextContentParentCreateInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderCreateInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateInput>;
};

export type TextContentParentCreateManyInlineInput = {
  /** Create and connect multiple existing TextContentParent documents */
  create?: InputMaybe<Array<TextContentParentCreateInput>>;
};

export type TextContentParentCreateOneInlineInput = {
  /** Create and connect one TextContentParent document */
  create?: InputMaybe<TextContentParentCreateInput>;
};

export type TextContentParentCreateWithPositionInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderCreateWithPositionInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateWithPositionInput>;
};

export type TextContentParentUpdateInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateInput>;
};

export type TextContentParentUpdateManyInlineInput = {
  /** Create and connect multiple TextContentParent component instances */
  create?: InputMaybe<Array<TextContentParentCreateWithPositionInput>>;
  /** Delete multiple TextContentParent documents */
  delete?: InputMaybe<Array<TextContentParentWhereUniqueInput>>;
  /** Update multiple TextContentParent component instances */
  update?: InputMaybe<Array<TextContentParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TextContentParent component instances */
  upsert?: InputMaybe<Array<TextContentParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TextContentParentUpdateManyWithNestedWhereInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateManyWithNestedWhereInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateManyWithNestedWhereInput>;
};

export type TextContentParentUpdateOneInlineInput = {
  /** Create and connect one TextContentParent document */
  create?: InputMaybe<TextContentParentCreateInput>;
  /** Delete currently connected TextContentParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TextContentParent document */
  update?: InputMaybe<TextContentParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TextContentParent document */
  upsert?: InputMaybe<TextContentParentUpsertWithNestedWhereUniqueInput>;
};

export type TextContentParentUpdateWithNestedWhereUniqueAndPositionInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateWithNestedWhereUniqueAndPositionInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TextContentParentUpdateWithNestedWhereUniqueInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpdateWithNestedWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueInput>;
};

export type TextContentParentUpsertWithNestedWhereUniqueAndPositionInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpsertWithNestedWhereUniqueAndPositionInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TextContentParentUpsertWithNestedWhereUniqueInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderUpsertWithNestedWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueInput>;
};

export type TextContentParentWhereInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderWhereInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereInput>;
};

export type TextContentParentWhereUniqueInput = {
  HeroMediaSlider?: InputMaybe<HeroMediaSliderWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereUniqueInput>;
};

export type TextContentUpdateInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  contentAlign?: InputMaybe<ContentAlign>;
  contentImage?: InputMaybe<AssetUpdateOneInlineInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['RichTextAST']>;
  imageStyle?: InputMaybe<Array<ImageStyle>>;
  link?: InputMaybe<Scalars['String']>;
  linkImage?: InputMaybe<Scalars['Boolean']>;
  subHeader?: InputMaybe<Scalars['RichTextAST']>;
  textContentWidth?: InputMaybe<PageWidthStyle>;
};

export type TextContentUpdateManyInlineInput = {
  /** Create and connect multiple TextContent component instances */
  create?: InputMaybe<Array<TextContentCreateWithPositionInput>>;
  /** Delete multiple TextContent documents */
  delete?: InputMaybe<Array<TextContentWhereUniqueInput>>;
  /** Update multiple TextContent component instances */
  update?: InputMaybe<Array<TextContentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TextContent component instances */
  upsert?: InputMaybe<Array<TextContentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TextContentUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  contentAlign?: InputMaybe<ContentAlign>;
  cssClass?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['RichTextAST']>;
  imageStyle?: InputMaybe<Array<ImageStyle>>;
  link?: InputMaybe<Scalars['String']>;
  linkImage?: InputMaybe<Scalars['Boolean']>;
  subHeader?: InputMaybe<Scalars['RichTextAST']>;
  textContentWidth?: InputMaybe<PageWidthStyle>;
};

export type TextContentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TextContentUpdateManyInput;
  /** Document search */
  where: TextContentWhereInput;
};

export type TextContentUpdateOneInlineInput = {
  /** Create and connect one TextContent document */
  create?: InputMaybe<TextContentCreateInput>;
  /** Delete currently connected TextContent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TextContent document */
  update?: InputMaybe<TextContentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TextContent document */
  upsert?: InputMaybe<TextContentUpsertWithNestedWhereUniqueInput>;
};

export type TextContentUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TextContentUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextContentWhereUniqueInput;
};

export type TextContentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TextContentUpdateInput;
  /** Unique document search */
  where: TextContentWhereUniqueInput;
};

export type TextContentUpsertInput = {
  /** Create document if it didn't exist */
  create: TextContentCreateInput;
  /** Update document if it exists */
  update: TextContentUpdateInput;
};

export type TextContentUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TextContentUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextContentWhereUniqueInput;
};

export type TextContentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TextContentUpsertInput;
  /** Unique document search */
  where: TextContentWhereUniqueInput;
};

/** Identifies documents */
export type TextContentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contentAlign?: InputMaybe<ContentAlign>;
  /** All values that are contained in given list. */
  contentAlign_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  /** Any other value that exists and is not equal to the given value. */
  contentAlign_not?: InputMaybe<ContentAlign>;
  /** All values that are not contained in given list. */
  contentAlign_not_in?: InputMaybe<Array<InputMaybe<ContentAlign>>>;
  contentImage?: InputMaybe<AssetWhereInput>;
  cssClass?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cssClass_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cssClass_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cssClass_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cssClass_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cssClass_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cssClass_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cssClass_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cssClass_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cssClass_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  imageStyle?: InputMaybe<Array<ImageStyle>>;
  /** Matches if the field array contains *all* items provided to the filter */
  imageStyle_contains_all?: InputMaybe<Array<ImageStyle>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  imageStyle_contains_none?: InputMaybe<Array<ImageStyle>>;
  /** Matches if the field array contains at least one item provided to the filter */
  imageStyle_contains_some?: InputMaybe<Array<ImageStyle>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  imageStyle_not?: InputMaybe<Array<ImageStyle>>;
  link?: InputMaybe<Scalars['String']>;
  linkImage?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  linkImage_not?: InputMaybe<Scalars['Boolean']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  textContentWidth?: InputMaybe<PageWidthStyle>;
  /** All values that are contained in given list. */
  textContentWidth_in?: InputMaybe<Array<InputMaybe<PageWidthStyle>>>;
  /** Any other value that exists and is not equal to the given value. */
  textContentWidth_not?: InputMaybe<PageWidthStyle>;
  /** All values that are not contained in given list. */
  textContentWidth_not_in?: InputMaybe<Array<InputMaybe<PageWidthStyle>>>;
};

/** References TextContent record uniquely */
export type TextContentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum TextSize {
  Text_2xl = 'text_2xl',
  Text_3xl = 'text_3xl',
  Text_4xl = 'text_4xl',
  Text_5xl = 'text_5xl',
  Text_6xl = 'text_6xl',
  Text_7xl = 'text_7xl',
  Text_8xl = 'text_8xl',
  TextBase = 'text_base',
  TextLg = 'text_lg',
  TextSm = 'text_sm',
  TextXl = 'text_xl',
  TextXs = 'text_xs'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VideoBox = {
  __typename?: 'VideoBox';
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
  videoTitle?: Maybe<Scalars['String']>;
  vimeoVideoId?: Maybe<Scalars['String']>;
  youtubePlaylistId?: Maybe<Scalars['String']>;
  youtubeVideoId?: Maybe<Scalars['String']>;
};

export type VideoBoxConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: VideoBoxWhereUniqueInput;
};

/** A connection to a list of items. */
export type VideoBoxConnection = {
  __typename?: 'VideoBoxConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<VideoBoxEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type VideoBoxCreateInput = {
  videoTitle?: InputMaybe<Scalars['String']>;
  vimeoVideoId?: InputMaybe<Scalars['String']>;
  youtubePlaylistId?: InputMaybe<Scalars['String']>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
};

export type VideoBoxCreateManyInlineInput = {
  /** Create and connect multiple existing VideoBox documents */
  create?: InputMaybe<Array<VideoBoxCreateInput>>;
};

export type VideoBoxCreateOneInlineInput = {
  /** Create and connect one VideoBox document */
  create?: InputMaybe<VideoBoxCreateInput>;
};

export type VideoBoxCreateWithPositionInput = {
  /** Document to create */
  data: VideoBoxCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type VideoBoxEdge = {
  __typename?: 'VideoBoxEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: VideoBox;
};

/** Identifies documents */
export type VideoBoxManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoBoxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoBoxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoBoxWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  videoTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  videoTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  videoTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  videoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  videoTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoTitle_starts_with?: InputMaybe<Scalars['String']>;
  vimeoVideoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vimeoVideoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vimeoVideoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vimeoVideoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  vimeoVideoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vimeoVideoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vimeoVideoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vimeoVideoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vimeoVideoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vimeoVideoId_starts_with?: InputMaybe<Scalars['String']>;
  youtubePlaylistId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubePlaylistId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubePlaylistId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubePlaylistId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubePlaylistId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubePlaylistId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubePlaylistId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubePlaylistId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubePlaylistId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubePlaylistId_starts_with?: InputMaybe<Scalars['String']>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeVideoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeVideoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeVideoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeVideoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeVideoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeVideoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeVideoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeVideoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeVideoId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum VideoBoxOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  VideoTitleAsc = 'videoTitle_ASC',
  VideoTitleDesc = 'videoTitle_DESC',
  VimeoVideoIdAsc = 'vimeoVideoId_ASC',
  VimeoVideoIdDesc = 'vimeoVideoId_DESC',
  YoutubePlaylistIdAsc = 'youtubePlaylistId_ASC',
  YoutubePlaylistIdDesc = 'youtubePlaylistId_DESC',
  YoutubeVideoIdAsc = 'youtubeVideoId_ASC',
  YoutubeVideoIdDesc = 'youtubeVideoId_DESC'
}

export type VideoBoxParent = Accordion | Album | Blog | Event | LayoutBlockColumn | Profile;

export type VideoBoxParentConnectInput = {
  Accordion?: InputMaybe<AccordionConnectInput>;
  Album?: InputMaybe<AlbumConnectInput>;
  Blog?: InputMaybe<BlogConnectInput>;
  Event?: InputMaybe<EventConnectInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnConnectInput>;
  Profile?: InputMaybe<ProfileConnectInput>;
};

export type VideoBoxParentCreateInput = {
  Accordion?: InputMaybe<AccordionCreateInput>;
  Album?: InputMaybe<AlbumCreateInput>;
  Blog?: InputMaybe<BlogCreateInput>;
  Event?: InputMaybe<EventCreateInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnCreateInput>;
  Profile?: InputMaybe<ProfileCreateInput>;
};

export type VideoBoxParentCreateManyInlineInput = {
  /** Connect multiple existing VideoBoxParent documents */
  connect?: InputMaybe<Array<VideoBoxParentWhereUniqueInput>>;
  /** Create and connect multiple existing VideoBoxParent documents */
  create?: InputMaybe<Array<VideoBoxParentCreateInput>>;
};

export type VideoBoxParentCreateOneInlineInput = {
  /** Connect one existing VideoBoxParent document */
  connect?: InputMaybe<VideoBoxParentWhereUniqueInput>;
  /** Create and connect one VideoBoxParent document */
  create?: InputMaybe<VideoBoxParentCreateInput>;
};

export type VideoBoxParentUpdateInput = {
  Accordion?: InputMaybe<AccordionUpdateInput>;
  Album?: InputMaybe<AlbumUpdateInput>;
  Blog?: InputMaybe<BlogUpdateInput>;
  Event?: InputMaybe<EventUpdateInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateInput>;
  Profile?: InputMaybe<ProfileUpdateInput>;
};

export type VideoBoxParentUpdateManyInlineInput = {
  /** Connect multiple existing VideoBoxParent documents */
  connect?: InputMaybe<Array<VideoBoxParentConnectInput>>;
  /** Create and connect multiple VideoBoxParent documents */
  create?: InputMaybe<Array<VideoBoxParentCreateInput>>;
  /** Delete multiple VideoBoxParent documents */
  delete?: InputMaybe<Array<VideoBoxParentWhereUniqueInput>>;
  /** Disconnect multiple VideoBoxParent documents */
  disconnect?: InputMaybe<Array<VideoBoxParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing VideoBoxParent documents */
  set?: InputMaybe<Array<VideoBoxParentWhereUniqueInput>>;
  /** Update multiple VideoBoxParent documents */
  update?: InputMaybe<Array<VideoBoxParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple VideoBoxParent documents */
  upsert?: InputMaybe<Array<VideoBoxParentUpsertWithNestedWhereUniqueInput>>;
};

export type VideoBoxParentUpdateManyWithNestedWhereInput = {
  Accordion?: InputMaybe<AccordionUpdateManyWithNestedWhereInput>;
  Album?: InputMaybe<AlbumUpdateManyWithNestedWhereInput>;
  Blog?: InputMaybe<BlogUpdateManyWithNestedWhereInput>;
  Event?: InputMaybe<EventUpdateManyWithNestedWhereInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateManyWithNestedWhereInput>;
  Profile?: InputMaybe<ProfileUpdateManyWithNestedWhereInput>;
};

export type VideoBoxParentUpdateOneInlineInput = {
  /** Connect existing VideoBoxParent document */
  connect?: InputMaybe<VideoBoxParentWhereUniqueInput>;
  /** Create and connect one VideoBoxParent document */
  create?: InputMaybe<VideoBoxParentCreateInput>;
  /** Delete currently connected VideoBoxParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected VideoBoxParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single VideoBoxParent document */
  update?: InputMaybe<VideoBoxParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single VideoBoxParent document */
  upsert?: InputMaybe<VideoBoxParentUpsertWithNestedWhereUniqueInput>;
};

export type VideoBoxParentUpdateWithNestedWhereUniqueInput = {
  Accordion?: InputMaybe<AccordionUpdateWithNestedWhereUniqueInput>;
  Album?: InputMaybe<AlbumUpdateWithNestedWhereUniqueInput>;
  Blog?: InputMaybe<BlogUpdateWithNestedWhereUniqueInput>;
  Event?: InputMaybe<EventUpdateWithNestedWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpdateWithNestedWhereUniqueInput>;
  Profile?: InputMaybe<ProfileUpdateWithNestedWhereUniqueInput>;
};

export type VideoBoxParentUpsertWithNestedWhereUniqueInput = {
  Accordion?: InputMaybe<AccordionUpsertWithNestedWhereUniqueInput>;
  Album?: InputMaybe<AlbumUpsertWithNestedWhereUniqueInput>;
  Blog?: InputMaybe<BlogUpsertWithNestedWhereUniqueInput>;
  Event?: InputMaybe<EventUpsertWithNestedWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnUpsertWithNestedWhereUniqueInput>;
  Profile?: InputMaybe<ProfileUpsertWithNestedWhereUniqueInput>;
};

export type VideoBoxParentWhereInput = {
  Accordion?: InputMaybe<AccordionWhereInput>;
  Album?: InputMaybe<AlbumWhereInput>;
  Blog?: InputMaybe<BlogWhereInput>;
  Event?: InputMaybe<EventWhereInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereInput>;
  Profile?: InputMaybe<ProfileWhereInput>;
};

export type VideoBoxParentWhereUniqueInput = {
  Accordion?: InputMaybe<AccordionWhereUniqueInput>;
  Album?: InputMaybe<AlbumWhereUniqueInput>;
  Blog?: InputMaybe<BlogWhereUniqueInput>;
  Event?: InputMaybe<EventWhereUniqueInput>;
  LayoutBlockColumn?: InputMaybe<LayoutBlockColumnWhereUniqueInput>;
  Profile?: InputMaybe<ProfileWhereUniqueInput>;
};

export type VideoBoxUpdateInput = {
  videoTitle?: InputMaybe<Scalars['String']>;
  vimeoVideoId?: InputMaybe<Scalars['String']>;
  youtubePlaylistId?: InputMaybe<Scalars['String']>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
};

export type VideoBoxUpdateManyInlineInput = {
  /** Create and connect multiple VideoBox component instances */
  create?: InputMaybe<Array<VideoBoxCreateWithPositionInput>>;
  /** Delete multiple VideoBox documents */
  delete?: InputMaybe<Array<VideoBoxWhereUniqueInput>>;
  /** Update multiple VideoBox component instances */
  update?: InputMaybe<Array<VideoBoxUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple VideoBox component instances */
  upsert?: InputMaybe<Array<VideoBoxUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type VideoBoxUpdateManyInput = {
  videoTitle?: InputMaybe<Scalars['String']>;
  vimeoVideoId?: InputMaybe<Scalars['String']>;
  youtubePlaylistId?: InputMaybe<Scalars['String']>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
};

export type VideoBoxUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: VideoBoxUpdateManyInput;
  /** Document search */
  where: VideoBoxWhereInput;
};

export type VideoBoxUpdateOneInlineInput = {
  /** Create and connect one VideoBox document */
  create?: InputMaybe<VideoBoxCreateInput>;
  /** Delete currently connected VideoBox document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single VideoBox document */
  update?: InputMaybe<VideoBoxUpdateWithNestedWhereUniqueInput>;
  /** Upsert single VideoBox document */
  upsert?: InputMaybe<VideoBoxUpsertWithNestedWhereUniqueInput>;
};

export type VideoBoxUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<VideoBoxUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: VideoBoxWhereUniqueInput;
};

export type VideoBoxUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: VideoBoxUpdateInput;
  /** Unique document search */
  where: VideoBoxWhereUniqueInput;
};

export type VideoBoxUpsertInput = {
  /** Create document if it didn't exist */
  create: VideoBoxCreateInput;
  /** Update document if it exists */
  update: VideoBoxUpdateInput;
};

export type VideoBoxUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<VideoBoxUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: VideoBoxWhereUniqueInput;
};

export type VideoBoxUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: VideoBoxUpsertInput;
  /** Unique document search */
  where: VideoBoxWhereUniqueInput;
};

/** Identifies documents */
export type VideoBoxWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VideoBoxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VideoBoxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VideoBoxWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  videoTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  videoTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  videoTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  videoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  videoTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoTitle_starts_with?: InputMaybe<Scalars['String']>;
  vimeoVideoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vimeoVideoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vimeoVideoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vimeoVideoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  vimeoVideoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vimeoVideoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vimeoVideoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vimeoVideoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vimeoVideoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vimeoVideoId_starts_with?: InputMaybe<Scalars['String']>;
  youtubePlaylistId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubePlaylistId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubePlaylistId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubePlaylistId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubePlaylistId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubePlaylistId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubePlaylistId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubePlaylistId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubePlaylistId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubePlaylistId_starts_with?: InputMaybe<Scalars['String']>;
  youtubeVideoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  youtubeVideoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  youtubeVideoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  youtubeVideoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  youtubeVideoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  youtubeVideoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  youtubeVideoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  youtubeVideoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  youtubeVideoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  youtubeVideoId_starts_with?: InputMaybe<Scalars['String']>;
};

/** References VideoBox record uniquely */
export type VideoBoxWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type AlbumFieldsFragment = { __typename?: 'Album', id: string, albumSlug?: string | null, title?: string | null, releaseDate?: any | null, albumBuyLink?: string | null, featureHomePage?: boolean | null, albumJsonData?: any | null, iFramePlayer?: string | null, albumCover?: { __typename?: 'Asset', id: string, url: string } | null, description?: { __typename?: 'RichText', raw: any, html: string, markdown: string, text: string } | null, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }> };

export type BlogFieldsFragment = { __typename?: 'Blog', id: string, blogSlug?: string | null, blogCategory?: BlogTags | null, title?: string | null, excerpt?: string | null, blogCallToActionText?: string | null, blogJson?: any | null, date?: any | null, blogCallToActionLink?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null, content?: { __typename?: 'RichText', raw: any, html: string, markdown: string, text: string } | null, blogGallery: Array<{ __typename?: 'Asset', url: string }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }> };

export type SiteLibraryFieldsFragment = { __typename?: 'SiteLibrary', id: string, title?: string | null, isSpanish?: boolean | null, facebookLink?: string | null, tikTokLink?: string | null, instagramLink?: string | null, spotifyLink?: string | null, threadsLink?: string | null, twitterLink?: string | null, youtubeLink?: string | null, pandoraLink?: string | null, appleMusicLink?: string | null, soundcloudLink?: string | null, pinterestLink?: string | null, githubLink?: string | null, linkedinLink?: string | null, siteCssBodyClass?: string | null, mailchimp?: string | null, contactEmail?: string | null, contactPhone?: string | null, contactName?: string | null, analyticsId?: string | null, siteLibraryJson?: any | null, secondaryName?: string | null, secondaryLink?: string | null, paypalClientId?: string | null, metaGoogleConsoleVerification?: string | null, metaDescription?: string | null, metaDomain?: string | null, youtubeApiKey: string, logo?: { __typename?: 'Asset', id: string, url: string } | null, secondaryLogo?: { __typename?: 'Asset', id: string, url: string } | null, themeColor?: { __typename?: 'RootColor', dark?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primary?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryHover?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryFade?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryFadeOpacity?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, white?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null } | null, favicon?: { __typename?: 'Asset', url: string } | null, metaOgImage?: { __typename?: 'Asset', url: string } | null, metaAppleTouchIcon?: { __typename?: 'Asset', url: string } | null };

export type EventFieldsFragment = { __typename?: 'Event', eventAddress?: string | null, eventAddressGoogleMapLink?: string | null, eventCityState?: string | null, eventEndDateTime?: any | null, eventFeatured?: boolean | null, eventLinkButtonText?: string | null, eventShortDescription?: string | null, eventSlug?: string | null, eventStartDateTime?: any | null, eventTicketLinkDestination?: string | null, eventTitle?: string | null, eventVenueName?: string | null, eventDescription?: { __typename?: 'RichText', html: string, raw: any } | null, eventFlyer?: { __typename?: 'Asset', id: string, url: string } | null, eventGallery: Array<{ __typename?: 'Asset', url: string, id: string }> };

export type TestimonialFieldsFragment = { __typename?: 'Testimonial', id: string, updatedAt: any, testimonialName?: string | null, testimonialJobTitle?: string | null, testimonialType?: TestimonialType | null, testimonialAvatar?: { __typename?: 'Asset', url: string } | null, testimonialText?: { __typename?: 'RichText', html: string, raw: any } | null };

export type LogoTableFieldsFragment = { __typename?: 'LogoTable', logoName?: string | null, logoLink?: string | null, logoType?: LogoTableItem | null, logoImage?: { __typename?: 'Asset', url: string } | null };

export type PagesSlugListFieldsFragment = { __typename?: 'Page', pageSlug?: string | null };

export type PageFieldsFragment = { __typename?: 'Page', id: string, pageSlug?: string | null, title?: string | null, subtitle?: string | null, pageWidthStyle?: PageWidthStyle | null, contentPageJson?: any | null, hideNav?: boolean | null, hideFooter?: boolean | null, hideHeader?: boolean | null, setHomePage?: boolean | null, whatsAppContactNumberFloatingButton?: string | null, heroImage?: { __typename?: 'Asset', url: string } | null, layoutBlocks: Array<{ __typename?: 'LayoutBlock', id: string, cssClass?: string | null, backgroundColor?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, backgroundImage?: { __typename?: 'Asset', url: string } | null, layoutBlockColumns: Array<{ __typename?: 'LayoutBlockColumn', id: string, htmlId?: string | null, cssClass?: string | null, hideBlockColumn?: boolean | null, logoTableQuery?: LogoTableItem | null, testimonialsQuery?: TestimonialType | null, galleryLayout?: GalleryLayout | null, eventDisplayLayout?: EventDisplayType | null, standOutText?: string | null, blogSectionTitle?: string | null, blogCategory?: BlogTags | null, profileSectionTitle?: string | null, profilesQuery?: ProfilesSelect | null, profileLayoutStyle?: ProfileLayoutStyle | null, displayFeaturedMusic?: boolean | null, displayAllMusic?: boolean | null, mailchimpLink?: string | null, mailchimpTitle?: string | null, mailchimpSubtitle?: string | null, iFrameTitle?: string | null, iFrameCode?: string | null, heroMediaSlider: Array<{ __typename?: 'HeroMediaSlider', id: string, mediaType?: MediaType | null, sliderCssWrapper?: string | null, displaySocialMedia?: boolean | null, sliderMediaBackground?: { __typename?: 'Asset', url: string } | null, textContent?: { __typename?: 'TextContent', contentAlign?: ContentAlign | null, link?: string | null, imageStyle: Array<ImageStyle>, textContentWidth?: PageWidthStyle | null, linkImage?: boolean | null, cssClass?: string | null, contentImage?: { __typename?: 'Asset', url: string } | null, header?: { __typename?: 'RichText', html: string, raw: any } | null, subHeader?: { __typename?: 'RichText', html: string, raw: any } | null, content?: { __typename?: 'RichText', html: string, raw: any } | null } | null, callToAction: Array<{ __typename?: 'CallToAction', ctaLink?: string | null, ctaLabel?: string | null, ctaClass?: string | null, ctaPrimary?: boolean | null, contentAlign?: ContentAlign | null }> }>, textContent: Array<{ __typename?: 'TextContent', id: string, contentAlign?: ContentAlign | null, link?: string | null, imageStyle: Array<ImageStyle>, textContentWidth?: PageWidthStyle | null, linkImage?: boolean | null, cssClass?: string | null, contentImage?: { __typename?: 'Asset', url: string } | null, header?: { __typename?: 'RichText', html: string, raw: any } | null, subHeader?: { __typename?: 'RichText', html: string, raw: any } | null, content?: { __typename?: 'RichText', html: string, raw: any } | null }>, callToAction: Array<{ __typename?: 'CallToAction', ctaLink?: string | null, ctaLabel?: string | null, ctaClass?: string | null, ctaPrimary?: boolean | null, contentAlign?: ContentAlign | null }>, backgroundImage?: { __typename?: 'Asset', url: string } | null, parallaxImage?: { __typename?: 'Asset', url: string } | null, gridBox: Array<{ __typename?: 'GridBox', boxTitle?: string | null, boxLink?: string | null, boxDescription?: { __typename?: 'RichText', html: string, raw: any } | null, boxImage?: { __typename?: 'Asset', url: string } | null }>, contactForm: Array<{ __typename?: 'ContactForm', contactFormTitle?: string | null, netlifyContactForm?: boolean | null, cssClass?: string | null, netlifyFormFields: Array<NetlifyFormFields>, jotformUrl?: string | null, hubspotFormId?: string | null, hubspotPortalId?: string | null, contactFormDescription?: { __typename?: 'RichText', html: string, raw: any } | null }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }>, gallery: Array<{ __typename?: 'Asset', url: string }>, accordions: Array<{ __typename?: 'Accordion', id: string, contentHeader?: { __typename?: 'RichText', html: string, raw: any } | null, contentDescription?: { __typename?: 'RichText', html: string, raw: any } | null, videoBox?: { __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null } | null, contentImage?: { __typename?: 'Asset', url: string } | null }> }> }> };

export type NavigationFieldsFragment = { __typename?: 'Navigation', navigationLayoutStyle?: NavigationLayout | null, pageNavigationSelection?: PageNavigationSelection | null, navigationLogo?: { __typename?: 'Asset', url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, primaryItem?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }>, footerColumns: Array<{ __typename?: 'FooterColumn', footerIframe?: string | null, footerTitle?: string | null, wideColumn?: boolean | null, recentBlogByCategory?: BlogTags | null, footerColumnCssWrapper?: string | null, footerImage?: { __typename?: 'Asset', url: string } | null, footerText?: { __typename?: 'RichText', html: string, raw: any } | null, footerLink: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> }>, footerItems: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> };

export type ProfileFieldsFragment = { __typename?: 'Profile', createdAt: any, updatedAt: any, appleMusicLink?: string | null, calendlyLink?: string | null, email?: string | null, epkLink?: string | null, facebookLink?: string | null, iFrame?: string | null, instagramLink?: string | null, role?: string | null, linkedinLink?: string | null, profileType?: ProfilesSelect | null, miniBio?: string | null, name?: string | null, order?: number | null, pandoraLink?: string | null, phoneNumber?: string | null, primaryProfile?: boolean | null, soundcloudLink?: string | null, spotifyLink?: string | null, profileSlug?: string | null, tikTokLink?: string | null, tourWidgetiFrame?: string | null, threadsLink?: string | null, twitterLink?: string | null, websiteLink?: string | null, youtubeLink?: string | null, profileJson?: any | null, fullBio?: { __typename?: 'RichText', html: string, raw: any } | null, avatarImage?: { __typename?: 'Asset', url: string } | null, imageGallery: Array<{ __typename?: 'Asset', url: string }>, portfolioGallery: Array<{ __typename?: 'Asset', url: string }>, contactList: Array<{ __typename?: 'ContactList', contactName?: string | null, contactEmail?: string | null, contactTitle?: string | null, contactPhone?: string | null, contactAddress?: string | null, contactGoogleAddressLink?: string | null, contactAvatar?: { __typename?: 'Asset', id: string, url: string } | null }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }>, heroImage?: { __typename?: 'Asset', url: string } | null, profileLogo?: { __typename?: 'Asset', url: string } | null };

export type LayoutQueryVariables = Exact<{
  eventFirst?: InputMaybe<Scalars['Int']>;
  blogFirst?: InputMaybe<Scalars['Int']>;
  eventOrderBy?: InputMaybe<EventOrderByInput>;
  blogOrderBy?: InputMaybe<BlogOrderByInput>;
  albumFirst?: InputMaybe<Scalars['Int']>;
  albumOrderBy?: InputMaybe<AlbumOrderByInput>;
  testimonialOrderBy?: InputMaybe<TestimonialOrderByInput>;
  testimonialFirst?: InputMaybe<Scalars['Int']>;
  profilesFirst?: InputMaybe<Scalars['Int']>;
  pageSlug: Scalars['String'];
  logoTableFirst?: InputMaybe<Scalars['Int']>;
  logoTableOrderBy?: InputMaybe<LogoTableOrderByInput>;
}>;


export type LayoutQuery = { __typename?: 'Query', siteLibrary?: { __typename?: 'SiteLibrary', id: string, title?: string | null, isSpanish?: boolean | null, facebookLink?: string | null, tikTokLink?: string | null, instagramLink?: string | null, spotifyLink?: string | null, threadsLink?: string | null, twitterLink?: string | null, youtubeLink?: string | null, pandoraLink?: string | null, appleMusicLink?: string | null, soundcloudLink?: string | null, pinterestLink?: string | null, githubLink?: string | null, linkedinLink?: string | null, siteCssBodyClass?: string | null, mailchimp?: string | null, contactEmail?: string | null, contactPhone?: string | null, contactName?: string | null, analyticsId?: string | null, siteLibraryJson?: any | null, secondaryName?: string | null, secondaryLink?: string | null, paypalClientId?: string | null, metaGoogleConsoleVerification?: string | null, metaDescription?: string | null, metaDomain?: string | null, youtubeApiKey: string, logo?: { __typename?: 'Asset', id: string, url: string } | null, secondaryLogo?: { __typename?: 'Asset', id: string, url: string } | null, themeColor?: { __typename?: 'RootColor', dark?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primary?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryHover?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryFade?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryFadeOpacity?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, white?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null } | null, favicon?: { __typename?: 'Asset', url: string } | null, metaOgImage?: { __typename?: 'Asset', url: string } | null, metaAppleTouchIcon?: { __typename?: 'Asset', url: string } | null } | null, events: Array<{ __typename?: 'Event', eventAddress?: string | null, eventAddressGoogleMapLink?: string | null, eventCityState?: string | null, eventEndDateTime?: any | null, eventFeatured?: boolean | null, eventLinkButtonText?: string | null, eventShortDescription?: string | null, eventSlug?: string | null, eventStartDateTime?: any | null, eventTicketLinkDestination?: string | null, eventTitle?: string | null, eventVenueName?: string | null, eventDescription?: { __typename?: 'RichText', html: string, raw: any } | null, eventFlyer?: { __typename?: 'Asset', id: string, url: string } | null, eventGallery: Array<{ __typename?: 'Asset', url: string, id: string }> }>, albums: Array<{ __typename?: 'Album', id: string, albumSlug?: string | null, title?: string | null, releaseDate?: any | null, albumBuyLink?: string | null, featureHomePage?: boolean | null, albumJsonData?: any | null, iFramePlayer?: string | null, albumCover?: { __typename?: 'Asset', id: string, url: string } | null, description?: { __typename?: 'RichText', raw: any, html: string, markdown: string, text: string } | null, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }> }>, testimonials: Array<{ __typename?: 'Testimonial', id: string, updatedAt: any, testimonialName?: string | null, testimonialJobTitle?: string | null, testimonialType?: TestimonialType | null, testimonialAvatar?: { __typename?: 'Asset', url: string } | null, testimonialText?: { __typename?: 'RichText', html: string, raw: any } | null }>, blogs: Array<{ __typename?: 'Blog', id: string, blogSlug?: string | null, blogCategory?: BlogTags | null, title?: string | null, excerpt?: string | null, blogCallToActionText?: string | null, blogJson?: any | null, date?: any | null, blogCallToActionLink?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null, content?: { __typename?: 'RichText', raw: any, html: string, markdown: string, text: string } | null, blogGallery: Array<{ __typename?: 'Asset', url: string }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }> }>, profiles: Array<{ __typename?: 'Profile', createdAt: any, updatedAt: any, appleMusicLink?: string | null, calendlyLink?: string | null, email?: string | null, epkLink?: string | null, facebookLink?: string | null, iFrame?: string | null, instagramLink?: string | null, role?: string | null, linkedinLink?: string | null, profileType?: ProfilesSelect | null, miniBio?: string | null, name?: string | null, order?: number | null, pandoraLink?: string | null, phoneNumber?: string | null, primaryProfile?: boolean | null, soundcloudLink?: string | null, spotifyLink?: string | null, profileSlug?: string | null, tikTokLink?: string | null, tourWidgetiFrame?: string | null, threadsLink?: string | null, twitterLink?: string | null, websiteLink?: string | null, youtubeLink?: string | null, profileJson?: any | null, fullBio?: { __typename?: 'RichText', html: string, raw: any } | null, avatarImage?: { __typename?: 'Asset', url: string } | null, imageGallery: Array<{ __typename?: 'Asset', url: string }>, portfolioGallery: Array<{ __typename?: 'Asset', url: string }>, contactList: Array<{ __typename?: 'ContactList', contactName?: string | null, contactEmail?: string | null, contactTitle?: string | null, contactPhone?: string | null, contactAddress?: string | null, contactGoogleAddressLink?: string | null, contactAvatar?: { __typename?: 'Asset', id: string, url: string } | null }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }>, heroImage?: { __typename?: 'Asset', url: string } | null, profileLogo?: { __typename?: 'Asset', url: string } | null }>, page?: { __typename?: 'Page', id: string, pageSlug?: string | null, title?: string | null, subtitle?: string | null, pageWidthStyle?: PageWidthStyle | null, contentPageJson?: any | null, hideNav?: boolean | null, hideFooter?: boolean | null, hideHeader?: boolean | null, setHomePage?: boolean | null, whatsAppContactNumberFloatingButton?: string | null, heroImage?: { __typename?: 'Asset', url: string } | null, layoutBlocks: Array<{ __typename?: 'LayoutBlock', id: string, cssClass?: string | null, backgroundColor?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, backgroundImage?: { __typename?: 'Asset', url: string } | null, layoutBlockColumns: Array<{ __typename?: 'LayoutBlockColumn', id: string, htmlId?: string | null, cssClass?: string | null, hideBlockColumn?: boolean | null, logoTableQuery?: LogoTableItem | null, testimonialsQuery?: TestimonialType | null, galleryLayout?: GalleryLayout | null, eventDisplayLayout?: EventDisplayType | null, standOutText?: string | null, blogSectionTitle?: string | null, blogCategory?: BlogTags | null, profileSectionTitle?: string | null, profilesQuery?: ProfilesSelect | null, profileLayoutStyle?: ProfileLayoutStyle | null, displayFeaturedMusic?: boolean | null, displayAllMusic?: boolean | null, mailchimpLink?: string | null, mailchimpTitle?: string | null, mailchimpSubtitle?: string | null, iFrameTitle?: string | null, iFrameCode?: string | null, heroMediaSlider: Array<{ __typename?: 'HeroMediaSlider', id: string, mediaType?: MediaType | null, sliderCssWrapper?: string | null, displaySocialMedia?: boolean | null, sliderMediaBackground?: { __typename?: 'Asset', url: string } | null, textContent?: { __typename?: 'TextContent', contentAlign?: ContentAlign | null, link?: string | null, imageStyle: Array<ImageStyle>, textContentWidth?: PageWidthStyle | null, linkImage?: boolean | null, cssClass?: string | null, contentImage?: { __typename?: 'Asset', url: string } | null, header?: { __typename?: 'RichText', html: string, raw: any } | null, subHeader?: { __typename?: 'RichText', html: string, raw: any } | null, content?: { __typename?: 'RichText', html: string, raw: any } | null } | null, callToAction: Array<{ __typename?: 'CallToAction', ctaLink?: string | null, ctaLabel?: string | null, ctaClass?: string | null, ctaPrimary?: boolean | null, contentAlign?: ContentAlign | null }> }>, textContent: Array<{ __typename?: 'TextContent', id: string, contentAlign?: ContentAlign | null, link?: string | null, imageStyle: Array<ImageStyle>, textContentWidth?: PageWidthStyle | null, linkImage?: boolean | null, cssClass?: string | null, contentImage?: { __typename?: 'Asset', url: string } | null, header?: { __typename?: 'RichText', html: string, raw: any } | null, subHeader?: { __typename?: 'RichText', html: string, raw: any } | null, content?: { __typename?: 'RichText', html: string, raw: any } | null }>, callToAction: Array<{ __typename?: 'CallToAction', ctaLink?: string | null, ctaLabel?: string | null, ctaClass?: string | null, ctaPrimary?: boolean | null, contentAlign?: ContentAlign | null }>, backgroundImage?: { __typename?: 'Asset', url: string } | null, parallaxImage?: { __typename?: 'Asset', url: string } | null, gridBox: Array<{ __typename?: 'GridBox', boxTitle?: string | null, boxLink?: string | null, boxDescription?: { __typename?: 'RichText', html: string, raw: any } | null, boxImage?: { __typename?: 'Asset', url: string } | null }>, contactForm: Array<{ __typename?: 'ContactForm', contactFormTitle?: string | null, netlifyContactForm?: boolean | null, cssClass?: string | null, netlifyFormFields: Array<NetlifyFormFields>, jotformUrl?: string | null, hubspotFormId?: string | null, hubspotPortalId?: string | null, contactFormDescription?: { __typename?: 'RichText', html: string, raw: any } | null }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }>, gallery: Array<{ __typename?: 'Asset', url: string }>, accordions: Array<{ __typename?: 'Accordion', id: string, contentHeader?: { __typename?: 'RichText', html: string, raw: any } | null, contentDescription?: { __typename?: 'RichText', html: string, raw: any } | null, videoBox?: { __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null } | null, contentImage?: { __typename?: 'Asset', url: string } | null }> }> }> } | null, navigations: Array<{ __typename?: 'Navigation', navigationLayoutStyle?: NavigationLayout | null, pageNavigationSelection?: PageNavigationSelection | null, navigationLogo?: { __typename?: 'Asset', url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, primaryItem?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }>, footerColumns: Array<{ __typename?: 'FooterColumn', footerIframe?: string | null, footerTitle?: string | null, wideColumn?: boolean | null, recentBlogByCategory?: BlogTags | null, footerColumnCssWrapper?: string | null, footerImage?: { __typename?: 'Asset', url: string } | null, footerText?: { __typename?: 'RichText', html: string, raw: any } | null, footerLink: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> }>, footerItems: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> }>, logoTables: Array<{ __typename?: 'LogoTable', logoName?: string | null, logoLink?: string | null, logoType?: LogoTableItem | null, logoImage?: { __typename?: 'Asset', url: string } | null }> };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', id: string, pageSlug?: string | null, title?: string | null, subtitle?: string | null, pageWidthStyle?: PageWidthStyle | null, contentPageJson?: any | null, hideNav?: boolean | null, hideFooter?: boolean | null, hideHeader?: boolean | null, setHomePage?: boolean | null, whatsAppContactNumberFloatingButton?: string | null, heroImage?: { __typename?: 'Asset', url: string } | null, layoutBlocks: Array<{ __typename?: 'LayoutBlock', id: string, cssClass?: string | null, backgroundColor?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, backgroundImage?: { __typename?: 'Asset', url: string } | null, layoutBlockColumns: Array<{ __typename?: 'LayoutBlockColumn', id: string, htmlId?: string | null, cssClass?: string | null, hideBlockColumn?: boolean | null, logoTableQuery?: LogoTableItem | null, testimonialsQuery?: TestimonialType | null, galleryLayout?: GalleryLayout | null, eventDisplayLayout?: EventDisplayType | null, standOutText?: string | null, blogSectionTitle?: string | null, blogCategory?: BlogTags | null, profileSectionTitle?: string | null, profilesQuery?: ProfilesSelect | null, profileLayoutStyle?: ProfileLayoutStyle | null, displayFeaturedMusic?: boolean | null, displayAllMusic?: boolean | null, mailchimpLink?: string | null, mailchimpTitle?: string | null, mailchimpSubtitle?: string | null, iFrameTitle?: string | null, iFrameCode?: string | null, heroMediaSlider: Array<{ __typename?: 'HeroMediaSlider', id: string, mediaType?: MediaType | null, sliderCssWrapper?: string | null, displaySocialMedia?: boolean | null, sliderMediaBackground?: { __typename?: 'Asset', url: string } | null, textContent?: { __typename?: 'TextContent', contentAlign?: ContentAlign | null, link?: string | null, imageStyle: Array<ImageStyle>, textContentWidth?: PageWidthStyle | null, linkImage?: boolean | null, cssClass?: string | null, contentImage?: { __typename?: 'Asset', url: string } | null, header?: { __typename?: 'RichText', html: string, raw: any } | null, subHeader?: { __typename?: 'RichText', html: string, raw: any } | null, content?: { __typename?: 'RichText', html: string, raw: any } | null } | null, callToAction: Array<{ __typename?: 'CallToAction', ctaLink?: string | null, ctaLabel?: string | null, ctaClass?: string | null, ctaPrimary?: boolean | null, contentAlign?: ContentAlign | null }> }>, textContent: Array<{ __typename?: 'TextContent', id: string, contentAlign?: ContentAlign | null, link?: string | null, imageStyle: Array<ImageStyle>, textContentWidth?: PageWidthStyle | null, linkImage?: boolean | null, cssClass?: string | null, contentImage?: { __typename?: 'Asset', url: string } | null, header?: { __typename?: 'RichText', html: string, raw: any } | null, subHeader?: { __typename?: 'RichText', html: string, raw: any } | null, content?: { __typename?: 'RichText', html: string, raw: any } | null }>, callToAction: Array<{ __typename?: 'CallToAction', ctaLink?: string | null, ctaLabel?: string | null, ctaClass?: string | null, ctaPrimary?: boolean | null, contentAlign?: ContentAlign | null }>, backgroundImage?: { __typename?: 'Asset', url: string } | null, parallaxImage?: { __typename?: 'Asset', url: string } | null, gridBox: Array<{ __typename?: 'GridBox', boxTitle?: string | null, boxLink?: string | null, boxDescription?: { __typename?: 'RichText', html: string, raw: any } | null, boxImage?: { __typename?: 'Asset', url: string } | null }>, contactForm: Array<{ __typename?: 'ContactForm', contactFormTitle?: string | null, netlifyContactForm?: boolean | null, cssClass?: string | null, netlifyFormFields: Array<NetlifyFormFields>, jotformUrl?: string | null, hubspotFormId?: string | null, hubspotPortalId?: string | null, contactFormDescription?: { __typename?: 'RichText', html: string, raw: any } | null }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }>, gallery: Array<{ __typename?: 'Asset', url: string }>, accordions: Array<{ __typename?: 'Accordion', id: string, contentHeader?: { __typename?: 'RichText', html: string, raw: any } | null, contentDescription?: { __typename?: 'RichText', html: string, raw: any } | null, videoBox?: { __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null } | null, contentImage?: { __typename?: 'Asset', url: string } | null }> }> }> }> };

export type PagesSlugListQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesSlugListQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', pageSlug?: string | null }> };

export type BlogQueryVariables = Exact<{
  blogSlug: Scalars['String'];
}>;


export type BlogQuery = { __typename?: 'Query', blog?: { __typename?: 'Blog', id: string, blogSlug?: string | null, blogCategory?: BlogTags | null, title?: string | null, excerpt?: string | null, blogCallToActionText?: string | null, blogJson?: any | null, date?: any | null, blogCallToActionLink?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null, content?: { __typename?: 'RichText', raw: any, html: string, markdown: string, text: string } | null, blogGallery: Array<{ __typename?: 'Asset', url: string }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }> } | null };

export type BlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogsQuery = { __typename?: 'Query', blogs: Array<{ __typename?: 'Blog', id: string, blogSlug?: string | null, blogCategory?: BlogTags | null, title?: string | null, excerpt?: string | null, blogCallToActionText?: string | null, blogJson?: any | null, date?: any | null, blogCallToActionLink?: string | null, image?: { __typename?: 'Asset', id: string, url: string } | null, content?: { __typename?: 'RichText', raw: any, html: string, markdown: string, text: string } | null, blogGallery: Array<{ __typename?: 'Asset', url: string }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }> }> };

export type SiteLibraryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteLibraryQuery = { __typename?: 'Query', siteLibrary?: { __typename?: 'SiteLibrary', id: string, title?: string | null, isSpanish?: boolean | null, facebookLink?: string | null, tikTokLink?: string | null, instagramLink?: string | null, spotifyLink?: string | null, threadsLink?: string | null, twitterLink?: string | null, youtubeLink?: string | null, pandoraLink?: string | null, appleMusicLink?: string | null, soundcloudLink?: string | null, pinterestLink?: string | null, githubLink?: string | null, linkedinLink?: string | null, siteCssBodyClass?: string | null, mailchimp?: string | null, contactEmail?: string | null, contactPhone?: string | null, contactName?: string | null, analyticsId?: string | null, siteLibraryJson?: any | null, secondaryName?: string | null, secondaryLink?: string | null, paypalClientId?: string | null, metaGoogleConsoleVerification?: string | null, metaDescription?: string | null, metaDomain?: string | null, youtubeApiKey: string, logo?: { __typename?: 'Asset', id: string, url: string } | null, secondaryLogo?: { __typename?: 'Asset', id: string, url: string } | null, themeColor?: { __typename?: 'RootColor', dark?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primary?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryHover?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryFade?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, primaryFadeOpacity?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null, white?: { __typename?: 'Color', hex: any, css: string, rgba: { __typename?: 'RGBA', r: any, g: any, b: any, a: any } } | null } | null, favicon?: { __typename?: 'Asset', url: string } | null, metaOgImage?: { __typename?: 'Asset', url: string } | null, metaAppleTouchIcon?: { __typename?: 'Asset', url: string } | null } | null };

export type NavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationQuery = { __typename?: 'Query', navigations: Array<{ __typename?: 'Navigation', navigationLayoutStyle?: NavigationLayout | null, pageNavigationSelection?: PageNavigationSelection | null, navigationLogo?: { __typename?: 'Asset', url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, primaryItem?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }>, footerColumns: Array<{ __typename?: 'FooterColumn', footerIframe?: string | null, footerTitle?: string | null, wideColumn?: boolean | null, recentBlogByCategory?: BlogTags | null, footerColumnCssWrapper?: string | null, footerImage?: { __typename?: 'Asset', url: string } | null, footerText?: { __typename?: 'RichText', html: string, raw: any } | null, footerLink: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> }>, footerItems: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null, items: Array<{ __typename?: 'NavigationItem', link?: string | null, label?: string | null, cssClass?: string | null, sameTab?: boolean | null, image?: { __typename?: 'Asset', id: string, url: string } | null }> }> }> };

export type EventQueryVariables = Exact<{
  eventSlug: Scalars['String'];
}>;


export type EventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', eventAddress?: string | null, eventAddressGoogleMapLink?: string | null, eventCityState?: string | null, eventEndDateTime?: any | null, eventFeatured?: boolean | null, eventLinkButtonText?: string | null, eventShortDescription?: string | null, eventSlug?: string | null, eventStartDateTime?: any | null, eventTicketLinkDestination?: string | null, eventTitle?: string | null, eventVenueName?: string | null, eventDescription?: { __typename?: 'RichText', html: string, raw: any } | null, eventFlyer?: { __typename?: 'Asset', id: string, url: string } | null, eventGallery: Array<{ __typename?: 'Asset', url: string, id: string }> } | null };

export type AlbumQueryVariables = Exact<{
  albumSlug: Scalars['String'];
}>;


export type AlbumQuery = { __typename?: 'Query', album?: { __typename?: 'Album', id: string, albumSlug?: string | null, title?: string | null, releaseDate?: any | null, albumBuyLink?: string | null, featureHomePage?: boolean | null, albumJsonData?: any | null, iFramePlayer?: string | null, albumCover?: { __typename?: 'Asset', id: string, url: string } | null, description?: { __typename?: 'RichText', raw: any, html: string, markdown: string, text: string } | null, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }> } | null };

export type ProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfilesQuery = { __typename?: 'Query', profiles: Array<{ __typename?: 'Profile', createdAt: any, updatedAt: any, appleMusicLink?: string | null, calendlyLink?: string | null, email?: string | null, epkLink?: string | null, facebookLink?: string | null, iFrame?: string | null, instagramLink?: string | null, role?: string | null, linkedinLink?: string | null, profileType?: ProfilesSelect | null, miniBio?: string | null, name?: string | null, order?: number | null, pandoraLink?: string | null, phoneNumber?: string | null, primaryProfile?: boolean | null, soundcloudLink?: string | null, spotifyLink?: string | null, profileSlug?: string | null, tikTokLink?: string | null, tourWidgetiFrame?: string | null, threadsLink?: string | null, twitterLink?: string | null, websiteLink?: string | null, youtubeLink?: string | null, profileJson?: any | null, fullBio?: { __typename?: 'RichText', html: string, raw: any } | null, avatarImage?: { __typename?: 'Asset', url: string } | null, imageGallery: Array<{ __typename?: 'Asset', url: string }>, portfolioGallery: Array<{ __typename?: 'Asset', url: string }>, contactList: Array<{ __typename?: 'ContactList', contactName?: string | null, contactEmail?: string | null, contactTitle?: string | null, contactPhone?: string | null, contactAddress?: string | null, contactGoogleAddressLink?: string | null, contactAvatar?: { __typename?: 'Asset', id: string, url: string } | null }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }>, heroImage?: { __typename?: 'Asset', url: string } | null, profileLogo?: { __typename?: 'Asset', url: string } | null }> };

export type TestimonialsQueryVariables = Exact<{ [key: string]: never; }>;


export type TestimonialsQuery = { __typename?: 'Query', testimonials: Array<{ __typename?: 'Testimonial', id: string, updatedAt: any, testimonialName?: string | null, testimonialJobTitle?: string | null, testimonialType?: TestimonialType | null, testimonialAvatar?: { __typename?: 'Asset', url: string } | null, testimonialText?: { __typename?: 'RichText', html: string, raw: any } | null }> };

export type ProfileQueryVariables = Exact<{
  profileSlug: Scalars['String'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', createdAt: any, updatedAt: any, appleMusicLink?: string | null, calendlyLink?: string | null, email?: string | null, epkLink?: string | null, facebookLink?: string | null, iFrame?: string | null, instagramLink?: string | null, role?: string | null, linkedinLink?: string | null, profileType?: ProfilesSelect | null, miniBio?: string | null, name?: string | null, order?: number | null, pandoraLink?: string | null, phoneNumber?: string | null, primaryProfile?: boolean | null, soundcloudLink?: string | null, spotifyLink?: string | null, profileSlug?: string | null, tikTokLink?: string | null, tourWidgetiFrame?: string | null, threadsLink?: string | null, twitterLink?: string | null, websiteLink?: string | null, youtubeLink?: string | null, profileJson?: any | null, fullBio?: { __typename?: 'RichText', html: string, raw: any } | null, avatarImage?: { __typename?: 'Asset', url: string } | null, imageGallery: Array<{ __typename?: 'Asset', url: string }>, portfolioGallery: Array<{ __typename?: 'Asset', url: string }>, contactList: Array<{ __typename?: 'ContactList', contactName?: string | null, contactEmail?: string | null, contactTitle?: string | null, contactPhone?: string | null, contactAddress?: string | null, contactGoogleAddressLink?: string | null, contactAvatar?: { __typename?: 'Asset', id: string, url: string } | null }>, videoBox: Array<{ __typename?: 'VideoBox', videoTitle?: string | null, youtubeVideoId?: string | null, vimeoVideoId?: string | null, youtubePlaylistId?: string | null }>, heroImage?: { __typename?: 'Asset', url: string } | null, profileLogo?: { __typename?: 'Asset', url: string } | null } | null };

export const AlbumFieldsFragmentDoc = gql`
    fragment albumFields on Album {
  id
  albumSlug
  title
  releaseDate
  albumBuyLink
  featureHomePage
  albumCover {
    id
    url
  }
  description {
    raw
    html
    raw
    markdown
    text
  }
  albumJsonData
  iFramePlayer
  videoBox {
    videoTitle
    youtubeVideoId
    vimeoVideoId
    youtubePlaylistId
  }
}
    `;
export const BlogFieldsFragmentDoc = gql`
    fragment blogFields on Blog {
  id
  blogSlug
  blogCategory
  title
  excerpt
  image {
    id
    url
  }
  content {
    raw
    html
    markdown
    text
  }
  blogCallToActionText
  blogCategory
  blogJson
  date
  blogCallToActionLink
  blogGallery {
    url
  }
  videoBox {
    videoTitle
    youtubeVideoId
    vimeoVideoId
    youtubePlaylistId
  }
}
    `;
export const SiteLibraryFieldsFragmentDoc = gql`
    fragment siteLibraryFields on SiteLibrary {
  id
  title
  isSpanish
  facebookLink
  tikTokLink
  instagramLink
  spotifyLink
  threadsLink
  twitterLink
  youtubeLink
  pandoraLink
  appleMusicLink
  soundcloudLink
  pinterestLink
  githubLink
  linkedinLink
  siteCssBodyClass
  mailchimp
  logo {
    id
    url
  }
  contactEmail
  contactPhone
  contactName
  analyticsId
  siteLibraryJson
  secondaryName
  secondaryLink
  secondaryLogo {
    id
    url
  }
  paypalClientId
  themeColor {
    dark {
      hex
      rgba {
        r
        g
        b
        a
      }
      css
    }
    primary {
      hex
      rgba {
        r
        g
        b
        a
      }
      css
    }
    primaryHover {
      hex
      rgba {
        r
        g
        b
        a
      }
      css
    }
    primaryFade {
      hex
      rgba {
        r
        g
        b
        a
      }
      css
    }
    primaryFadeOpacity {
      hex
      rgba {
        r
        g
        b
        a
      }
      css
    }
    white {
      hex
      rgba {
        r
        g
        b
        a
      }
      css
    }
  }
  metaGoogleConsoleVerification
  metaDescription
  favicon {
    url
  }
  metaOgImage {
    url
  }
  metaAppleTouchIcon {
    url
  }
  metaDomain
  youtubeApiKey
}
    `;
export const EventFieldsFragmentDoc = gql`
    fragment eventFields on Event {
  eventAddress
  eventAddressGoogleMapLink
  eventCityState
  eventEndDateTime
  eventDescription {
    html
    raw
  }
  eventFeatured
  eventFlyer {
    id
    url
  }
  eventLinkButtonText
  eventShortDescription
  eventSlug
  eventStartDateTime
  eventTicketLinkDestination
  eventTitle
  eventVenueName
  eventGallery {
    url
    id
  }
}
    `;
export const TestimonialFieldsFragmentDoc = gql`
    fragment testimonialFields on Testimonial {
  id
  updatedAt
  testimonialName
  testimonialAvatar {
    url
  }
  testimonialJobTitle
  testimonialText {
    html
    raw
  }
  testimonialType
}
    `;
export const LogoTableFieldsFragmentDoc = gql`
    fragment logoTableFields on LogoTable {
  logoName
  logoLink
  logoImage {
    url
  }
  logoType
}
    `;
export const PagesSlugListFieldsFragmentDoc = gql`
    fragment pagesSlugListFields on Page {
  pageSlug
}
    `;
export const PageFieldsFragmentDoc = gql`
    fragment pageFields on Page {
  id
  pageSlug
  title
  subtitle
  pageWidthStyle
  contentPageJson
  hideNav
  hideFooter
  hideHeader
  setHomePage
  whatsAppContactNumberFloatingButton
  heroImage {
    url
  }
  layoutBlocks(first: 100) {
    id
    cssClass
    backgroundColor {
      hex
      rgba {
        r
        g
        b
        a
      }
      css
    }
    backgroundImage {
      url
    }
    layoutBlockColumns(first: 100) {
      id
      htmlId
      cssClass
      hideBlockColumn
      heroMediaSlider(orderBy: id_ASC, first: 100) {
        id
        mediaType
        sliderCssWrapper
        displaySocialMedia
        sliderMediaBackground {
          url
        }
        textContent {
          contentImage {
            url
          }
          header {
            html
            raw
          }
          subHeader {
            html
            raw
          }
          content {
            html
            raw
          }
          contentAlign
          link
          imageStyle
          textContentWidth
          linkImage
          cssClass
        }
        callToAction {
          ctaLink
          ctaLabel
          ctaClass
          ctaPrimary
          contentAlign
        }
      }
      textContent {
        id
        contentImage {
          url
        }
        header {
          html
          raw
        }
        subHeader {
          html
          raw
        }
        content {
          html
          raw
        }
        contentAlign
        link
        imageStyle
        textContentWidth
        linkImage
        cssClass
      }
      callToAction {
        ctaLink
        ctaLabel
        ctaClass
        ctaPrimary
        contentAlign
      }
      backgroundImage {
        url
      }
      parallaxImage {
        url
      }
      gridBox {
        boxTitle
        boxLink
        boxDescription {
          html
          raw
        }
        boxImage {
          url
        }
      }
      logoTableQuery
      contactForm {
        contactFormTitle
        netlifyContactForm
        cssClass
        netlifyFormFields
        contactFormDescription {
          html
          raw
        }
        jotformUrl
        hubspotFormId
        hubspotPortalId
      }
      videoBox {
        videoTitle
        youtubeVideoId
        vimeoVideoId
        youtubePlaylistId
      }
      testimonialsQuery
      galleryLayout
      gallery(first: 500) {
        url
      }
      eventDisplayLayout
      standOutText
      blogSectionTitle
      blogCategory
      profileSectionTitle
      profilesQuery
      profileLayoutStyle
      displayFeaturedMusic
      displayAllMusic
      mailchimpLink
      mailchimpTitle
      mailchimpSubtitle
      iFrameTitle
      iFrameCode
      parallaxImage {
        url
      }
      accordions(orderBy: id_ASC) {
        id
        contentHeader {
          html
          raw
        }
        contentDescription {
          html
          raw
        }
        videoBox {
          videoTitle
          youtubeVideoId
          vimeoVideoId
          youtubePlaylistId
        }
        contentImage {
          url
        }
      }
    }
  }
}
    `;
export const NavigationFieldsFragmentDoc = gql`
    fragment navigationFields on Navigation {
  navigationLayoutStyle
  pageNavigationSelection
  navigationLogo {
    url
  }
  items {
    image {
      id
      url
    }
    link
    label
    cssClass
    sameTab
    primaryItem
    items {
      image {
        id
        url
      }
      link
      label
      cssClass
      sameTab
    }
  }
  footerColumns {
    footerImage {
      url
    }
    footerText {
      html
      raw
    }
    footerIframe
    footerTitle
    wideColumn
    recentBlogByCategory
    footerColumnCssWrapper
    footerLink {
      image {
        id
        url
      }
      link
      label
      cssClass
      sameTab
      items {
        image {
          id
          url
        }
        link
        label
        cssClass
        sameTab
      }
    }
  }
  footerItems {
    image {
      id
      url
    }
    link
    label
    cssClass
    sameTab
    items {
      image {
        id
        url
      }
      link
      label
      cssClass
      sameTab
    }
  }
}
    `;
export const ProfileFieldsFragmentDoc = gql`
    fragment profileFields on Profile {
  createdAt
  updatedAt
  appleMusicLink
  calendlyLink
  email
  epkLink
  facebookLink
  iFrame
  instagramLink
  role
  linkedinLink
  profileType
  miniBio
  name
  order
  pandoraLink
  phoneNumber
  primaryProfile
  soundcloudLink
  spotifyLink
  profileSlug
  tikTokLink
  tourWidgetiFrame
  threadsLink
  twitterLink
  websiteLink
  youtubeLink
  fullBio {
    html
    raw
  }
  avatarImage {
    url
  }
  imageGallery(first: 100) {
    url
  }
  portfolioGallery(first: 100) {
    url
  }
  profileJson
  contactList {
    contactName
    contactEmail
    contactTitle
    contactPhone
    contactAddress
    contactGoogleAddressLink
    contactAvatar {
      id
      url
    }
  }
  videoBox {
    videoTitle
    youtubeVideoId
    vimeoVideoId
    youtubePlaylistId
  }
  heroImage {
    url
  }
  profileLogo {
    url
  }
}
    `;
export const LayoutDocument = gql`
    query layout($eventFirst: Int = 500, $blogFirst: Int = 500, $eventOrderBy: EventOrderByInput = eventStartDateTime_DESC, $blogOrderBy: BlogOrderByInput = date_DESC, $albumFirst: Int = 100, $albumOrderBy: AlbumOrderByInput = releaseDate_DESC, $testimonialOrderBy: TestimonialOrderByInput = updatedAt_DESC, $testimonialFirst: Int = 100, $profilesFirst: Int = 100, $pageSlug: String!, $logoTableFirst: Int = 100, $logoTableOrderBy: LogoTableOrderByInput = logoName_ASC) {
  siteLibrary(where: {signature: "lnzame"}) {
    ...siteLibraryFields
  }
  events(first: $eventFirst, orderBy: $eventOrderBy) {
    ...eventFields
  }
  albums(first: $albumFirst, orderBy: $albumOrderBy) {
    ...albumFields
  }
  testimonials(first: $testimonialFirst, orderBy: $testimonialOrderBy) {
    ...testimonialFields
  }
  blogs(first: $blogFirst, orderBy: $blogOrderBy) {
    ...blogFields
  }
  profiles(first: $profilesFirst) {
    ...profileFields
  }
  page(where: {pageSlug: $pageSlug}) {
    ...pageFields
  }
  navigations {
    ...navigationFields
  }
  logoTables(first: $logoTableFirst, orderBy: $logoTableOrderBy) {
    ...logoTableFields
  }
}
    ${SiteLibraryFieldsFragmentDoc}
${EventFieldsFragmentDoc}
${AlbumFieldsFragmentDoc}
${TestimonialFieldsFragmentDoc}
${BlogFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${PageFieldsFragmentDoc}
${NavigationFieldsFragmentDoc}
${LogoTableFieldsFragmentDoc}`;
export const PagesDocument = gql`
    query pages {
  pages(first: 500) {
    ...pageFields
  }
}
    ${PageFieldsFragmentDoc}`;
export const PagesSlugListDocument = gql`
    query pagesSlugList {
  pages {
    ...pagesSlugListFields
  }
}
    ${PagesSlugListFieldsFragmentDoc}`;
export const BlogDocument = gql`
    query blog($blogSlug: String!) {
  blog(where: {blogSlug: $blogSlug}) {
    ...blogFields
  }
}
    ${BlogFieldsFragmentDoc}`;
export const BlogsDocument = gql`
    query blogs {
  blogs(first: 200) {
    ...blogFields
  }
}
    ${BlogFieldsFragmentDoc}`;
export const SiteLibraryDocument = gql`
    query siteLibrary {
  siteLibrary(where: {signature: "lnzame"}) {
    ...siteLibraryFields
  }
}
    ${SiteLibraryFieldsFragmentDoc}`;
export const NavigationDocument = gql`
    query Navigation {
  navigations {
    ...navigationFields
  }
}
    ${NavigationFieldsFragmentDoc}`;
export const EventDocument = gql`
    query event($eventSlug: String!) {
  event(where: {eventSlug: $eventSlug}) {
    ...eventFields
  }
}
    ${EventFieldsFragmentDoc}`;
export const AlbumDocument = gql`
    query album($albumSlug: String!) {
  album(where: {albumSlug: $albumSlug}) {
    ...albumFields
  }
}
    ${AlbumFieldsFragmentDoc}`;
export const ProfilesDocument = gql`
    query profiles {
  profiles(first: 100) {
    ...profileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const TestimonialsDocument = gql`
    query testimonials {
  testimonials(first: 100) {
    ...testimonialFields
  }
}
    ${TestimonialFieldsFragmentDoc}`;
export const ProfileDocument = gql`
    query profile($profileSlug: String!) {
  profile(where: {profileSlug: $profileSlug}) {
    ...profileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    layout(variables: LayoutQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LayoutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LayoutQuery>(LayoutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'layout', 'query');
    },
    pages(variables?: PagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesQuery>(PagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pages', 'query');
    },
    pagesSlugList(variables?: PagesSlugListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PagesSlugListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesSlugListQuery>(PagesSlugListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pagesSlugList', 'query');
    },
    blog(variables: BlogQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogQuery>(BlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'blog', 'query');
    },
    blogs(variables?: BlogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BlogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BlogsQuery>(BlogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'blogs', 'query');
    },
    siteLibrary(variables?: SiteLibraryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SiteLibraryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SiteLibraryQuery>(SiteLibraryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'siteLibrary', 'query');
    },
    Navigation(variables?: NavigationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NavigationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NavigationQuery>(NavigationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Navigation', 'query');
    },
    event(variables: EventQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventQuery>(EventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'event', 'query');
    },
    album(variables: AlbumQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AlbumQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AlbumQuery>(AlbumDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'album', 'query');
    },
    profiles(variables?: ProfilesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProfilesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfilesQuery>(ProfilesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'profiles', 'query');
    },
    testimonials(variables?: TestimonialsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TestimonialsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TestimonialsQuery>(TestimonialsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'testimonials', 'query');
    },
    profile(variables: ProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>(ProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'profile', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;