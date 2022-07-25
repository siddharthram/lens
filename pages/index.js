import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import  Link   from "next/link"
import { client, recommendProfiles } from "../api";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendProfiles).toPromise();
      setProfiles(response.data.recommendedProfiles);

      console.log({ response });
    } catch (err) {
      console.log({ err });
    }
  }
  return (
    <Layout>
    <div>
      {profiles.map((profile, index) => (
        <Link href={`/profile/${profile.id}`}>
          <a>
           
              {profile.picture ?
               <img src={profile.picture.original.url} width="60px" height="60px"/> :
                 <img src="/pokemon9.jpeg" width="60px" height="60px" /> }
              <h4> {profile.handle}</h4>
              <p> {profile.bio} </p>
       
          </a>
        </Link>
      ))}
    </div>
         </Layout>
  );
}
