import React from 'react';
import ReactDOM from 'react-dom';
import Madlib from './components/Madlib';
import renderer from 'react-test-renderer';

const defaultWords = {
    word1: 'dark',
    word2: 'stormy',
    word3: 'shot',
    word4: 'door',
    word5: 'The maid',
    word6: 'a pirate ship'
};

const changedWords = {
    word1: 'hot',
    word2: 'foul-smelling',
    word3: 'Kanye West Song',
    word4: 'tanning lotion bottle lid',
    word5: 'Stormy Daniels',
    word6: 'an orange walrus'
};

test('Default words return expected text', () => {
    // Render the Madlib with default props and make sure it matches snapshot
    const component = renderer.create(
        <Madlib word1={defaultWords.word1} 
        word2={defaultWords.word2} 
        word3={defaultWords.word3} 
        word4={defaultWords.word4} 
        word5={defaultWords.word5} 
        word6={defaultWords.word6}
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Change one of the props and make sure it no longer matches the snapshot
    tree.props.word1 = "sunny";
    expect(tree).toThrowErrorMatchingSnapshot();
});

test('Changed words return expected text', () => {
    // Render the Madlib with words changed and make sure it matches snapshot
    const component = renderer.create(
        <Madlib word1={changedWords.word1} 
        word2={changedWords.word2} 
        word3={changedWords.word3} 
        word4={changedWords.word4} 
        word5={changedWords.word5} 
        word6={changedWords.word6}
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Change one of the props and make sure it no longer matches the snapshot
    tree.props.word1 = "cold";
    expect(tree).toThrowErrorMatchingSnapshot();
});