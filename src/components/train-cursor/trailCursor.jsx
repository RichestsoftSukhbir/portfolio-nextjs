import { useEffect } from "react";
// import styles from './trailCursor.module.css'

export default function TrailCursor() {

    useEffect(() => {
        let trailCursor = document.querySelector("#trail-cursor");
        let circles = trailCursor.getAttribute("data-circle");
        let coords = {
            x: 0,
            y: 0
        };

        for (let i = 0; i < circles; i++) {
            let div = document.createElement("div");
            div.className = "circle";
            trailCursor.appendChild(div);
        }

        let allCricles = document.querySelectorAll(".circle");
        allCricles.forEach((el) => {
            el.x = 0;
            el.y = 0;
        });

        window.addEventListener("mousemove", function (e) {
            coords.x = e.clientX;
            coords.y = e.clientY;
        });

        function animeCircle() {
            let x = coords.x;
            let y = coords.y;

            allCricles.forEach((el, index) => {
                el.style.left = x - el.clientHeight / 2 + "px";
                el.style.top = y - el.clientHeight / 2 + "px";

                el.style.scale = (allCricles.length - index) / allCricles.length;

                el.x = x;
                el.y = y;

                let nxtCrcl = allCricles[index + 1] || allCricles[0];
                x += (nxtCrcl.x - x) * 0.3;
                y += (nxtCrcl.y - y) * 0.3;
            });

            requestAnimationFrame(animeCircle);
        }

        animeCircle();
    }, []);

    return (
        <>
            <div id={`trail-cursor`} data-circle="20"></div>
        </>
    )
}