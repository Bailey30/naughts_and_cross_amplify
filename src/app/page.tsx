/* pages/index.js */

import Head from "next/head";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import BreedList from "./components/breedList";
import GameContainer from "./components/gameContainer";

export default async function Home({ breeds = [] }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Amplify Hosting Test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <br />

                <GameContainer />
            </main>
        </div>
    );
}
