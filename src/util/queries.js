import { gql } from 'apollo-boost';

export const GET_MEMBERDATA = gql`
  query members($contractAddr: String!) {
    members(where: { molochAddress: $contractAddr }) {
      id
      delegateKey
      molochAddress
      shares
      memberId @client
    }
  }
`;

export const GET_MEMBERDATA_LEGACY = {
  query: 'query members { members { id delegateKey shares }}',
};

export const GET_MOLOCHES_POST = {
  query: `query {
    factories(orderBy: count) {
      id
    }
  }`,
};

export const GET_MOLOCHES = gql`
  query factories($skip: Int) {
    factories(orderBy: count, first: 100, skip: $skip) {
      apiData @client
      id
      title
      moloch
      summoner
      tokenInfo @client
    }
  }
`;

export const GET_MOLOCHES_V2 = gql`
  query molochV2S($skip: Int) {
    molochV2S(orderBy: count, first: 100, skip: $skip) {
      apiData @client
      id
      index
      count
      moloch
      summoner
      newContract
      version
      title
      tokenInfo @client
    }
  }
`;

export const GET_MOLOCH = gql`
  query factories($contractAddr: String!) {
    factories(where: { id: $contractAddr }) {
      apiData @client
      id
      title
      moloch
      summoner
      newContract
      tokenInfo @client
      totalShares @client
    }
  }
`;

export const GET_MOLOCH_V2 = gql`
  query molochV2S($contractAddr: String!) {
    molochV2S(where: { id: $contractAddr }) {
      apiData @client
      id
      title
      moloch
      summoner
      newContract
      version
      tokenInfo @client
      totalShares @client
    }
  }
`;

export const GET_MOLOCHES_STATS = gql`
  query {
    factories(orderBy: count) {
      apiDataStats @client
      title
      moloch
      newContract
      tokenInfo @client
      totalShares @client
      newContractMembers @client
      newContractProposals @client
    }
  }
`;

export const GET_PROPOSALS = gql`
  query proposals($contractAddr: String!) {
    proposals(where: { molochAddress: $contractAddr }) {
      id
      votes {
        id
      }
    }
  }
`;

export const GET_PROPOSALS_LEGACY = {
  query: 'query proposals { proposals { id, votes { id } }}',
};
