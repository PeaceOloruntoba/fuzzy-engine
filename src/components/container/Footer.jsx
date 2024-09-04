import React from "react";

export default function Footer() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2">
      <div className="flex items-center gap-4">
        <img src="" alt="" />
        <div className="flex flex-col gap-2">
          <span>Easy Ride</span>
          <span>Making movements easy</span>
          <div className="flex flex-col">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Easing+Life+group+of+companies/@5.9607473,-1.7783867,20.02z/data=!4m14!1m7!3m6!1s0xfdc59af2d50d633:0x61addf4d72ca957d!2sDUNKWA+ON+OFFIN+OFFICE!8m2!3d5.9608813!4d-1.7780946!16s%2Fg%2F11nx235ctw!3m5!1s0xfdc59270482f6b3:0x149260464d63fb95!8m2!3d5.9610047!4d-1.7784332!16s%2Fg%2F11rr31p74f?entry=ttu"
              className="flex gap-2 items-center"
            >
              <span>icon</span>
              <span>PMB 249, Post Office Building, Dunkwa, Ghana.</span>
            </a>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Easing+Life+group+of+companies/@5.9607473,-1.7783867,20.02z/data=!4m14!1m7!3m6!1s0xfdc59af2d50d633:0x61addf4d72ca957d!2sDUNKWA+ON+OFFIN+OFFICE!8m2!3d5.9608813!4d-1.7780946!16s%2Fg%2F11nx235ctw!3m5!1s0xfdc59270482f6b3:0x149260464d63fb95!8m2!3d5.9610047!4d-1.7784332!16s%2Fg%2F11rr31p74f?entry=ttu"
              className="flex gap-2 items-center"
            >
              <span>icon</span>
              <span>+233240095360</span>
            </a>
            <a
              target="_blank"
              href="mailto:easinglife95@gmail.com"
              className="flex gap-2 items-center"
            >
              <span>icon</span>
              <span>easinglife95@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
