import axios from 'axios';

/* Important:  The nice thing about axios is that you can set up
     a pre-configured instance of the axios client that has
     default properties set for where it's going to make a request
      to or headers, even params if you wanted to, as well.
    note: The .create() method is going to create an instance of
      the Axios client with a couple of defaulted properties.  So, axios.create() just allows us to create a
       customizable copy of it that is customized towards making requests to some specific URL with just these headers:
       output:
					 const response = await axios
					 .get('https://api.unsplash.com/search/photos',
					  {
							 params: {query: term},
							 headers: {
								 Authorization: 'Client-ID AhUc6NEUinXjgam1yrbjhrSG50ZS-yPXoWct0-HgAxs',
					  }
						 })

      */
axios.create({

})



