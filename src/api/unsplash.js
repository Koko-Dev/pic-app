import axios from 'axios';

/*
	 TODO:  Set up a pre-configured instance of the axios client
		 that has default set requests for:
		 1. Where it is making a request to, 2. Headers, 3. Params

    NOTE: The .create() method is going to create an instance of
      the Axios client with custom defaulted properties set.
        So, axios.create() just allows us to create a
       customizable copy of it that is customized towards making
        requests to some specific URL with just these headers:
      */
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID AhUc6NEUinXjgam1yrbjhrSG50ZS-yPXoWct0-HgAxs',
	}
})





