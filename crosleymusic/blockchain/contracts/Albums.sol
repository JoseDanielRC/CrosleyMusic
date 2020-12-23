// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Albums {
    struct Album {
        string idAlbum;
        string name;
        string artista;
    }

    // Constructor
    constructor() public {}

    //Mapping to fetch songs
    mapping(uint256 => Album) public albums;

    //Store Song Count
    uint256 public albumsCount;

    function addAlbum(
        string memory _idAlbum,
        string memory _name,
        string memory _artista
    ) public {
        albumsCount++;
        albums[albumsCount] = Album(_idAlbum, _name, _artista);
    }
}
