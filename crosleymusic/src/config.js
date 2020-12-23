export const TODO_LIST_ADDRESS = "0xDD94B007C727457294f01f6225B81ba522014BaD";
export const TODO_LIST_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "songs",
    outputs: [
      {
        internalType: "string",
        name: "idAlbum",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "duration",
        type: "string",
      },
      {
        internalType: "string",
        name: "genre",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "songsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_idAlbum",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_duration",
        type: "string",
      },
      {
        internalType: "string",
        name: "_genre",
        type: "string",
      },
    ],
    name: "addSong",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
