
export async function GET(){

    const TELEGRAM_BOT_TOKEN = process.env.TOKEN


    if(!TELEGRAM_BOT_TOKEN){
       return new Response(JSON.stringify({error: 'token not found'}),{status: 500}
    );
    }else{
        return new Response(JSON.stringify(TELEGRAM_BOT_TOKEN), { status: 200 });
    }

   
}

export async function POST(req) {
    try {
      const { chatId, message } = await req.json();
 
      const users = [
                      {
                        name:'bahadir',
                        id:535716676
                       },
                      {
                        name:'serkhan',
                        id:688804750
                      }
      ];

      const TELEGRAM_BOT_TOKEN = process.env.TOKEN;
      const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
     
      users.forEach((value) => {

      })         

      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: users[2].id,
          text: message,
        }),
      });
     
      const data = await response.json();
       
      if (!response.ok) {
        return new Response(JSON.stringify({ error: data.description }), { status: response.status });
      }
       
      return new Response(JSON.stringify({ success: true, data }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
   
   
