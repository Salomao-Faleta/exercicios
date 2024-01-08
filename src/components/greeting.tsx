export function Greeting (){

    const fullTime = new Intl.DateTimeFormat('pt-BR',{
        timeStyle: 'short',
        hour12: false,
    }).format();


    const hour = new Date().getHours();
    let greeting = '';

    if(hour >= 0 && hour < 12){
        greeting = 'Good Morning';
    }else if(hour >= 12 && hour < 18){
        greeting = 'Good Afternoon';
    }else if(hour >= 18 && hour <= 23){
        greeting = 'Good Night';
    }

    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center text-white
            bg-gradient-to-r from-cyan-500 to-blue-500">
            
            <div className="text-9xl">{fullTime}</div>
            <div className="text-5xl font-bold">{greeting}</div>

        </div>
    );
}