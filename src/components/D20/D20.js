import React from "react";
import $ from "jquery";
import "./D20Styles.scss";

export default function D20() {
  // Die settings
  var $die = $(".die"),
    sides = 20,
    initialSide = 1,
    lastFace,
    timeoutId,
    animationDuration = 3000;

  // Roll button on click
  $("ul > li > a").on("click", function () {
    reset();
    rollTo($(this).attr("href"));

    return false;
  });

  // sets random number as face
  function randomFace() {
    var face = Math.floor(Math.random() * sides) + initialSide;
    lastFace = face === lastFace ? randomFace() : face;
    return face;
  }

  // rolls dice to given face value
  function rollTo(face) {
    clearTimeout(timeoutId);

    $("ul > li > a").removeClass("active");
    $("[href=" + face + "]").addClass("active");

    $die.attr("data-face", face);

    // Finds current face
    const dieFace = $("div").find("[data-face=" + face + "]");

    // stores current face as a string
    let netFace = dieFace[0].dataset.face;

    if (netFace > 19) {
      console.log("You rolled a Nat 20!");
    } else if (netFace < 2) {
      console.log("You rolled a crticial miss!");
    } else {
      console.log("You rolled a " + netFace);
    }
  }

  function reset() {
    $die.attr("data-face", null).removeClass("rolling");
  }

  $(".randomize, .die").on("click", function () {
    $die.addClass("rolling");
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      $die.removeClass("rolling");

      rollTo(randomFace());
    }, animationDuration);

    return false;
  });

  return (
    <>
      <div className='content'>
        <div className='die'>
          <figure className='face face-1'></figure>
          <figure className='face face-2'></figure>
          <figure className='face face-3'></figure>
          <figure className='face face-4'></figure>
          <figure className='face face-5'></figure>
          <figure className='face face-6'></figure>
          <figure className='face face-7'></figure>
          <figure className='face face-8'></figure>
          <figure className='face face-9'></figure>
          <figure className='face face-10'></figure>
          <figure className='face face-11'></figure>
          <figure className='face face-12'></figure>
          <figure className='face face-13'></figure>
          <figure className='face face-14'></figure>
          <figure className='face face-15'></figure>
          <figure className='face face-16'></figure>
          <figure className='face face-17'></figure>
          <figure className='face face-18'></figure>
          <figure className='face face-19'></figure>
          <figure className='face face-20'></figure>
        </div>
      </div>
      <a href='' className='randomize'>
        Roll!
      </a>
    </>
  );
}
