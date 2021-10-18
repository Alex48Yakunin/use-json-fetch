import { useFetchJson } from "../customHooks";

export default function Data(){
  const [data, loading, error] = useFetchJson("http://localhost:7070/data", {});

  return (
    <div style={{margin: '20px', background: 'green', padding: '15px'}}>
      <div>
        <div style={{fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Data - компонент</div>
        <div style={{fontSize: '14px', color: 'white'}}>{data ? 'Данные успешно загружены' : 'Что-то пошло не так...'}</div>
      </div>
    </div>
  );
};