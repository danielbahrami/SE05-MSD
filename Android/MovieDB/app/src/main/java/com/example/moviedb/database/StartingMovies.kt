package com.example.moviedb.database

import android.content.Context
import androidx.room.RoomDatabase
import androidx.sqlite.db.SupportSQLiteDatabase
import com.example.moviedb.R
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONArray
import org.json.JSONException
import java.io.BufferedReader

class StartingMovies(private val context: Context) : RoomDatabase.Callback() {
    private fun loadJSONArray(context: Context): JSONArray {
        val inputStream = context.resources.openRawResource(R.raw.moviedata)
        BufferedReader(inputStream.reader()).use {
            return JSONArray(it.readText())
        }
    }

    private suspend fun fillWithStartingMovies(context: Context) {
        val dao = MovieDatabase.getInstance(context)?.dao
        try {
            val movies = loadJSONArray(context)
            for (i in 0 until movies.length()) {
                val item = movies.getJSONObject(i)
                val movieTitle = item.getString("title")
                val movieReleaseYear = item.getString("release_year")
                val movieDirector = item.getString("director")
                val movieEntity = MovieEntity(
                    movieTitle, movieReleaseYear, movieDirector
                )
                dao?.insertMovie(movieEntity)
            }
        } catch (_: JSONException) {
        }
    }

    override fun onCreate(db: SupportSQLiteDatabase) {
        super.onCreate(db)
        CoroutineScope(Dispatchers.IO).launch { fillWithStartingMovies(context) }
    }
}
