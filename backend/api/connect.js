import {MongoClient} from "mongodb";

const URI =
    "mongodb+srv://vinisp:w7pj98xbUQxEDLf@spotifyreplica.eafhr.mongodb.net/?retryWrites=true&w=majority&appName=spotifyReplica";

const client = new MongoClient(URI)

export const db = client.db("SpotifyReplica")
