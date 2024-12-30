import React from "react";
import "../styles/about.scss";
// import horse from "/assets/images/horse-care.jpg";
// import nature from "/assets/images/nature.jpg";
import beth from "/assets/images/beth.png"
import gang from "/assets/images/about-image-two.png"
import girl from "/assets/images/about-image-three.png"

export const AboutOne: React.FC = () => {
  return (
    <section id="about" className="about-top">
      <div className="about-top-right">
        <div>
          <figure>
            <img src={beth} alt="#" />
          </figure>
          <figure>
            <img src={girl} alt="#" />
          </figure>
        </div>
      </div>
      <div className="about-top-left">
        <h1>About Pegasus Ranch</h1>
        <p>
          Hello Everyone👋🏻, My name is Beth Sharkody. I am the owner and founder
          of the Pegasus Ranch. I established the ranch in 1999 as a rescue
          ranch for horses. I began teaching riding lessons in 2000. Many of my
          students and families wanted me to extend my program during the
          summers so in 2005 I started the Pegasus Ranch Saddle Up Summer Youth
          Camp. It was a day camp at first, but the parents and children all
          loved it so much that they convinced me to do an overnight camp. So in
          2005 we became a week long, overnight camp. The families who began
          with me, and are still with me today and have watched this ranch and
          the Saddle Up Summer Youth Camp blossom and grow into the successful
          program it is today.
          <br />
          <br />
          THE PEGASUS RANCH SADDLE UP SUMMER YOUTH CAMP
          <br />
          <br />
          The summer camp is for 6-14 year olds who are passionate about horses.
          The children learn to ride in Western Pleasure, pole bending, barrel
          racing, obstacle course and trail riding. They also participate in the
          overall care of the horse that is assigned to them. The horses they
          use are all horses that have been adopted, rehabilitated and retrained
          by me for at least a year. Our main focus is to teach children to work
          with horses in a loving manner. Another focus of the program is to
          encourage children to be the best that they can be in everything they
          do. To build confidence, teamwork, good sportsmanship and skills that
          they will carry with them for a lifetime.
          <br />
          <br />
          We started with two horses and are now up to 18. Some of these horses
          have been abused, neglected, seized by law enforcement, unwanted or
          donated by people who needed a good loving home for their horse. Aside
          from horses, the summer camp also includes other fun activities such
          as archery, swimming, nature hikes and nature class, arts and crafts,
          pioneer practices, games, talents shows, camp fires and sing alongs.
        </p>
      </div>
    </section>
  );
};

export const AboutTwo = () => {
  return (
    <section className="about-bottom">
      <div className="about-bottom-left">
        <p>
          The staff are all trusted, previous students who have surpassed the
          age of coming as a camper and who participate in a three year summer
          training program in order to become counselors.
          <br />
          <br />
          In an effort to offer the VERY BEST instruction and care for our
          campers, I only allow 12 children to attend the camp each week. The
          camp runs for a total of 8 weeks and the dates each year are in
          conjunction with the school schedules and summer release dates. The
          cost of the camp is $650.00 per child, per week.
          <br />
          <br />
          Every penny brought in from our summer camps goes toward the rescue,
          rehabilitation, retraining and care of these horses. I am not
          subsidized by the government and I rely heavily on word of mouth from
          my children and families who have been here and continue to come back
          year after year. I feel very blessed that God has entrusted me with
          this life and I feel that every child and horse that sets foot on this
          ranch were put here for one reason or another by God.
          <br />
          <br />I will continue to strive to be the best teacher/trainer I can
          be. I will continue to strive to offer the VERY BEST care and
          instruction to the children who come here and I will continue to
          follow the path that God has put me on. May God bless each and
          everyone of you and may you all be as blessed to do what you love and
          love what you do as I am.
        </p>
      </div>
      <div className="about-bottom-right">
        <div>
          <figure>
            <img src={gang} alt="#" />
          </figure>
        </div>
      </div>
    </section>
  );
};
