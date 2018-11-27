<?php

function TO_scripts() 
{
    // stylesheets
    wp_enqueue_style('Fonts','https://fonts.googleapis.com/css?family=Poppins:800|Roboto:300,700');
    wp_enqueue_style( 'slick1', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css' );
    wp_enqueue_style( 'slick2', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css' );
    wp_enqueue_style( 'TO-styles', get_stylesheet_uri() );

    // scripts  

    wp_deregister_script('jquery'); 
    wp_enqueue_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), false, true);
    wp_enqueue_script( 'slickjs' , 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.js', array('jquery'),false,true);
    wp_enqueue_script( 'scrollMagic1' , 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.js', array('jquery'),false,true);
    wp_enqueue_script( 'js' , get_stylesheet_directory_uri().'/js.js', array('jquery'),false,true);

}
add_action( 'wp_enqueue_scripts', 'TO_scripts' );


function support()
{
  add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'support' );


/**
 * Other general settings
 */
function init_sync()
{
    // add theme support for images
    add_theme_support( 'post-thumbnails' );
  
    add_image_size( 'main-image', 600, 350, true );
    add_image_size( 'square-image',500, 500, true );

}
add_action( 'after_setup_theme', 'init_sync' );
