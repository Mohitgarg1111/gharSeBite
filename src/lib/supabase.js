// import { createClient } from '@supabase/supabase-js'

// // Read credentials from .env (Vite exposes VITE_* variables to the browser)
// const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// // Warn in development if the variables are missing
// if (!supabaseUrl || !supabaseAnonKey) {
//   console.warn(
//     '⚠️  Supabase env variables not found.\n' +
//     '   Copy .env.example → .env and fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
//   )
// }

// // Create and export the Supabase client
// export const supabase = createClient(
//   supabaseUrl     ?? '',
//   supabaseAnonKey ?? ''
// )

// /**
//  * Insert a new customer order into the `orders` table.
//  *
//  * @param {Object} orderData
//  * @param {string} orderData.customerName
//  * @param {string} orderData.phone
//  * @param {string} orderData.address
//  * @param {string} orderData.selectedMeal
//  * @param {string} orderData.quantity        - will be parsed to integer
//  * @param {string} orderData.deliveryTime
//  * @param {string} [orderData.specialInstructions]
//  *
//  * @returns {{ data: Object[]|null, error: Object|null }}
//  */
// export async function insertOrder(orderData) {
//   const { data, error } = await supabase
//     .from('orders')
//     .insert([
//       {
//         customer_name:        orderData.customerName,
//         phone:                orderData.phone,
//         address:              orderData.address,
//         selected_meal:        orderData.selectedMeal,
//         quantity:             parseInt(orderData.quantity, 10),
//         delivery_time:        orderData.deliveryTime,
//         special_instructions: orderData.specialInstructions || null,
//       },
//     ])
//     .select()   // returns the inserted row so we can extract the id

//   return { data, error }
// }








import { createClient } from '@supabase/supabase-js'

const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create client only if credentials exist, otherwise use a dummy client
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function insertOrder(orderData) {
  // If Supabase is not configured, simulate a successful order for demo/testing
  if (!supabase) {
    console.warn('Supabase not configured — running in demo mode')
    return { data: null, error: null }
  }

  const { data, error } = await supabase
    .from('orders')
    .insert([
      {
        customer_name:        orderData.customerName,
        phone:                orderData.phone,
        address:              orderData.address,
        selected_meal:        orderData.selectedMeal,
        quantity:             parseInt(orderData.quantity, 10),
        delivery_time:        orderData.deliveryTime,
        special_instructions: orderData.specialInstructions || null,
      },
    ])
    .select()

  return { data, error }
}


//yeh ek demo hai bass upar wala asli hai