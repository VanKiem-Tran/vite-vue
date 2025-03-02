import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "@vue/composition-api";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Character = {
  __typename?: "Character";
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars["String"]>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars["String"]>;
  /** The id of the character. */
  id?: Maybe<Scalars["ID"]>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars["String"]>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars["String"]>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars["String"]>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars["String"]>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars["String"]>;
};

export type Characters = {
  __typename?: "Characters";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: "Episode";
  /** The air date of the episode. */
  air_date?: Maybe<Scalars["String"]>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars["String"]>;
  /** The code of the episode. */
  episode?: Maybe<Scalars["String"]>;
  /** The id of the episode. */
  id?: Maybe<Scalars["ID"]>;
  /** The name of the episode. */
  name?: Maybe<Scalars["String"]>;
};

export type Episodes = {
  __typename?: "Episodes";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type Info = {
  __typename?: "Info";
  /** The length of the response. */
  count?: Maybe<Scalars["Int"]>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars["Int"]>;
  /** The amount of pages. */
  pages?: Maybe<Scalars["Int"]>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars["Int"]>;
};

export type Location = {
  __typename?: "Location";
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars["String"]>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars["String"]>;
  /** The id of the location. */
  id?: Maybe<Scalars["ID"]>;
  /** The name of the location. */
  name?: Maybe<Scalars["String"]>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars["String"]>;
};

export type Locations = {
  __typename?: "Locations";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: "Query";
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"];
};

export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryEpisodeArgs = {
  id: Scalars["ID"];
};

export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryLocationArgs = {
  id: Scalars["ID"];
};

export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export const GetCharactersDocument = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
      }
      results {
        status
        id
        name
      }
    }
  }
`;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a Vue component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetCharactersQuery({
 *   page: // value for 'page'
 *   filter: // value for 'filter'
 * });
 */
export function useGetCharactersQuery(
  variables:
    | GetCharactersQueryVariables
    | VueCompositionApi.Ref<GetCharactersQueryVariables>
    | ReactiveFunction<GetCharactersQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        GetCharactersQuery,
        GetCharactersQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetCharactersQuery,
          GetCharactersQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetCharactersQuery,
          GetCharactersQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useQuery<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >(GetCharactersDocument, variables, options);
}
export function useGetCharactersLazyQuery(
  variables:
    | GetCharactersQueryVariables
    | VueCompositionApi.Ref<GetCharactersQueryVariables>
    | ReactiveFunction<GetCharactersQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        GetCharactersQuery,
        GetCharactersQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetCharactersQuery,
          GetCharactersQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetCharactersQuery,
          GetCharactersQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useLazyQuery<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >(GetCharactersDocument, variables, options);
}
export type GetCharactersQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >;
export type GetCharactersQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]>;
  filter?: InputMaybe<FilterCharacter>;
}>;

export type GetCharactersQuery = {
  __typename?: "Query";
  characters?: {
    __typename?: "Characters";
    info?: { __typename?: "Info"; count?: number | null } | null;
    results?: Array<{
      __typename?: "Character";
      status?: string | null;
      id?: string | null;
      name?: string | null;
    } | null> | null;
  } | null;
};
