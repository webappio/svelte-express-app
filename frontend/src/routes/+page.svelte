<script lang="ts">
    import { ClientServerResponse } from "client-models/build/frontend/ClientMessage.js";
    import type { ClientMessageType } from "client-models/build/frontend/ClientMessage.js";

    let obj : ClientMessageType = {
        FirstName: "",
        CompanyName: "",
    };

    let serverResponse : string = "";
    let submitted : boolean = false;

    const sendMessage = async () => {
        try {
            const rawResponse = await fetch("http://localhost:5000/message", {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
            const content = await rawResponse.json();
            const response = ClientServerResponse.parse(content);
            serverResponse = response.ServerMessage;
            submitted = true;
        } catch (e) {
            console.error(e);
        }
    }
</script>

<div class="home">
    <h1>Svelte, Express JS, Typesafety Tutorial</h1>
    <h3 style="max-width:600px; font-weight:300;">Create a full-stack application with a Svelte frontend (compiled with vite), Express JS, and ZOD for typesafety across your entire stack.</h3>
    <div>
        <h3>What's your name and where do you work?</h3>
    </div>
    <div>
        <label>
            Name:
            <input bind:value={obj.FirstName} />
        </label>
        <label>
            Company Name:
            <input bind:value={obj.CompanyName} />
        </label>
    </div>
    <div>
        <button
            on:click={sendMessage}
        >
            Submit
        </button>
    </div>
    {#if submitted}
        <div>
            {serverResponse}
        </div>
    {/if}
    <p>Tutorial by <a href="https://webapp.io" target="_blank">webapp.io</a></p>
</div>

<style>
    .home {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: monospace;
    }
</style>