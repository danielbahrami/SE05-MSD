package com.example.moviedb

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import com.example.moviedb.database.MovieEntity

class MovieDetailsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_movie_details)

        val movie = intent.getSerializableExtra("movies") as MovieEntity


        val titleTextView = findViewById<TextView>(R.id.movieReleaseYear).apply {
            text = movie.movieTitle
        }

        val releaseYearTextView = findViewById<TextView>(R.id.movieTitle).apply {
            text = movie.movieReleaseYear
        }


    }
}
