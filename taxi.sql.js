import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue() {
    // console.log('join queue')
    const sql = `update taxi_queue set passenger_queue_count = passenger_queue_count+  1;`
    await db.run(sql)

}

export async function leaveQueue() {
    const sql = `update taxi_queue set passenger_queue_count = passenger_queue_count-1`;
    await db.run(sql)
    console.log('itu is d1');
    
    
}

export async function joinTaxiQueue() {
    const sql = `update taxi_queue set taxi_queue_count = taxi_queue_count+1`
    await db.run(sql)
    
    
   
}

export async function queueLength() {
    //   passenger_queue 
    const result = await db.all(`select passenger_queue_count from taxi_queue`);
    console.log(result);
    return result[0].passenger_queue_count;
}

export async function taxiQueueLength() {
// taxi_queue
const sql = await db.all(`select taxi_queue_count from taxi_queue`)
return sql[0].taxi_queue_count;
}

export function taxiDepart() {

}