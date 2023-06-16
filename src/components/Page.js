import Bar from './Bar';
import './Page.css';
import Notes from '../common/Notes'
import clef from '../icons/violin-clef.png'

function Page() {


  return (

    <div className="page">
        <Bar clef={clef} notes={[Notes.f, Notes.a, Notes.c, Notes.e1]}></Bar>
    </div>

  );


}

export default Page;