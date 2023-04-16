const DATEOPTIONS = { 
  dateStyle: 'medium' 
};
const TIMEOPTIONS = {
  timeStyle: 'short'
};

export const convertDate = (date) => {
  const d = new Date(date);

  return `${ d.toLocaleDateString( "en-GB", DATEOPTIONS ) } ${ d.toLocaleTimeString( "en-GB", TIMEOPTIONS ) }`
}

export const getStatus = ( fixture ) => {
  const date = new Date();
  const matchTime = new Date( fixture.date );

  console.log( date.toLocaleDateString("en-GB", DATEOPTIONS) )
  console.log( matchTime.toLocaleDateString("en-GB", DATEOPTIONS) )

  if ( date.toLocaleDateString("en-GB", DATEOPTIONS) === matchTime.toDateString("en-GB", DATEOPTIONS) ) {
    console.log( "test" )
  }
  

  if ( fixture.hightlights !== null ) {
    return 'Completed'
  }
}