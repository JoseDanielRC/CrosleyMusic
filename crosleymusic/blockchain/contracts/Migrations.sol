// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
    string public album;
    string public artist;
    string public imageurl;
    string public contador;

    struct Song {
        string idAlbum;
        string name;
        string duration;
        string genre;
    }

    // Constructor
    constructor() public {
        album = "";
        artist = "";
    }

    function setData(
        string memory _name,
        string memory _artist,
        string memory _url
    ) public {
        album = _name;
        artist = _artist;
        imageurl = _url;
    }

    //Mapping to fetch songs
    mapping(uint256 => Song) public songs;

    //Store Song Count
    uint256 public songsCount;

    function addSong(
        string memory _idAlbum,
        string memory _name,
        string memory _duration,
        string memory _genre
    ) public {
        songsCount++;
        songs[songsCount] = Song(_idAlbum, _name, _duration, _genre);
    }
}
