import Layout from "../modules/layouts/Layout"

const Home = ({data}) => {
    return (
        <Layout data={data}/>        
    )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.mcsrvstat.us/2/play.mineway.org');
  
  try {
    const json = await res.json();
    
	if (!json.ok) {
		return {data: undefined}
	}
	
    return {data: json}

  } catch(error) {

    return {data: undefined}

  }
}

export default Home;