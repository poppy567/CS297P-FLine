import React from 'react'
import Head from 'next/head'
import Nav from 'components/nav'
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
// core components
import NavPills from "components/NavPills/NavPills.js";
import Clock from "components/Clock.js";

const Home = () => {
  return (
    <div>
      <Nav />

      <div className='hero'>
        <h1 className='title'>Welcome to Fline!</h1>
      </div>

      <NavPills
        color="primary"
        horizontal={{
          tabsGrid: { xs: 12, sm: 4, md: 4 },
          contentGrid: { xs: 12, sm: 8, md: 8 }
        }}
        tabs={[
          {
            tabButton: "News",
            tabIcon: Dashboard,
            tabContent: (
              <Clock ></Clock>
            )
          },
          {
            tabButton: "Schedule",
            tabIcon: Schedule,
            tabContent: (
              <span>
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely
                  deliverables for real-time schemas.
                </p>
                <br />
                <p>
                  Dramatically maintain clicks-and-mortar solutions
                  without functional solutions. Dramatically visualize
                  customer directed convergence without revolutionary
                  ROI. Collaboratively administrate empowered markets
                  via plug-and-play networks. Dynamically procrastinate
                  B2C users after installed base benefits.
                </p>
              </span>
            )
          }
        ]}
      />

      <style jsx>{`
        title{
          margin: 0;
        }
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
}
export default Home
