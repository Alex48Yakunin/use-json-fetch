import { useFetchJson } from "../customHooks";

export default function Error(){
  const [data, loading, error] = useFetchJson("http://localhost:7070/error",{});

  return (
    <div style={{margin: '20px', color: 'red'}}>
       {error && {error}}
    </div>
  );
}