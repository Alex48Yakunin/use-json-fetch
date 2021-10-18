import { useFetchJson } from "../customHooks";

export default function Loading(){
  const [data, loading, error] = useFetchJson("http://localhost:7070/loading",{});
  return (
    <div style={{margin: '20px'}}>
       {loading && 'Загрузка...'}
    </div>
  );
}