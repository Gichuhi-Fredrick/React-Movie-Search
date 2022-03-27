### Clone this repo

1 Run npm install
2 Run npm start
3 You must add your own API key in the src/App.js

### GET API KEY

1 Signin or Register at https://www.themoviedb.org/signup
2 Under the Account icon, click Settings
3 On the API page, click on the link under the Request an API Key section.
4 Register an API key as a Developer
5 Agree to the terms of use and fill in the required information:
6 You will see an API key displayed under API Key (v3 auth). Copy the key and
paste it to the APIKEY field in src/App.js.

### Links

- GitHub URL: (https://github.com/Gichuhi-Fredrick/React-Movie-Search)
- Live Site URL:(https://searchmoviewithreactjs.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
<!-- - [Netlify] and [GitHub] pages for continous deployment -->

### What I learned. React Js

- How to use useEffect to render changes when a state updates:

```React js
    const [trending, setTrending] = useState([])

	useEffect(() => {
		const data = async () => {
			...
			setTrending(data.results)
		}
		data()
	}, [setTrending])

```

- using async/await to fetch data from an api asynchronously:

```React js

  const data = async () => {
			const trendingUrl = `...`

			let response = await fetch(trendingUrl)
			let data = await response.json()

			setTrending(data.results)
  }
  ..
```

-

### Continued development

-Use React Router to add more pages
-Filter the incoming data so you can search to tv shows or movies
-Refactor the naming of the componets to make them more re-usable

## Author

- Twitter - [@FredStorm](https://www.twitter.com/stormFred)
