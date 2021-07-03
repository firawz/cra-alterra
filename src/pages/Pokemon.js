import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon() {
    const [pokemonList, setPokemonList] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [check, setCheck] = useState(-1);
    const [name, setName] = useState('');

    useEffect(() => {
        const getPokemon = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            const { results } = data;
            setPokemonList(results);
        };
        getPokemon();
    }, []);

    const handlePokemonClick = async id => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data.abilities);
        return setAbilities(data.abilities);
    };

    return (
        <div className="container">
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/calculator">Calculator</Link>
                </li>
            </ul>
            <h1> Detail {name || 'Pokemon'}</h1>
            <h2>Abilities: </h2>
            <ol className="list-group">
                {abilities &&
                    abilities.map((abilities, id) => {
                        return (
                            <li className="list-group-item" key={id}>
                                {abilities.ability.name}
                            </li>
                        );
                    })}
            </ol>
            <h2>List Pokemon</h2>
            <ol className="list-group">
                {pokemonList?.map((pokemon, id) => {
                    return id == check ? (
                        <li
                            className="list-group-item active"
                            key={pokemon.url}
                            onClick={() => {
                                handlePokemonClick(pokemon.name);
                            }}
                        >
                            {pokemon.name}
                        </li>
                    ) : (
                        <li
                            className="list-group-item"
                            key={pokemon.url}
                            onClick={() => {
                                handlePokemonClick(pokemon.name);
                                setCheck(id);
                                setName(pokemon.name);
                            }}
                        >
                            {pokemon.name}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
