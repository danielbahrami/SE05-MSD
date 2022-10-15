package com.example.moviedb

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.moviedb.database.MovieEntity

class MovieDetailsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_movie_details)

        val movie = intent.getSerializableExtra("movies") as MovieEntity


        val movieTitle = findViewById<TextView>(R.id.movieReleaseYear).apply {
            text = movie.movieTitle
        }

        val movieReleaseYear = findViewById<TextView>(R.id.movieTitle).apply {
            text = movie.movieReleaseYear
        }


    }
}
