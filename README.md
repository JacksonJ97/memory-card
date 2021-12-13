# Memory Card

A memory game where a user's score is increased depending on the number of unique pokemons clicked. If users click on the same pokemon their score is resetted. The user's best score is tracked and displayed alongside with the current score.

## My process

### Built with

- React
- Styled Components
- PokéAPI

### What I learned

In this project, I learned how to use the useEffect and useState hooks. I used the useEffect hook to shuffle a set of data received from the PokéAPI when the App component is first mounted. This useEffect is ran everytime the data received from the PokéAPI changes. I used the useState hook to create state inside the App component which was implemented as a functional component. The useState hook kept track of the states such as shuffled data, current score, best score, etc. I also created a custom hook that fetched the data from the PokéAPI. In the fetch hook, the useEffect hook was used to fetch the initial amount of pokemons and then it fetches again if the amount of pokemons changes. It also cleans up the async requests.

### Live URL

https://jacksonj97.github.io/memory-card/
