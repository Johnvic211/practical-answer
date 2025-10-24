<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $product = [
            [
                'id' => 19221,
                'name' => 'Strwaberry Ice Cream',
                'price' => 250,
                'created_at' => '2025-03-17 14:26:32',
            ],
            [
                'id' => 19222,
                'name' => 'Vanilla Yoghurt',
                'price' => 120,
                'created_at' => '2025-03-17 14:28:09',
            ],
            [
                'id' => 19223,
                'name' => 'Blue Cheese',
                'price' => 230,
                'created_at' => '2025-03-17 14:30:29',
            ],
            [
                'id' => 19225,
                'name' => 'Unsalted Butter',
                'price' => 180,
                'created_at' => '2025-03-18 10:02:18',
            ],
            [
                'id' => 19227,
                'name' => 'Whipped Cream',
                'price' => 85,
                'created_at' => '2025-03-18 12:16:27',
            ],
        ];

        $purchases = [
            [
                'user_id' => 1,
                'total_amount' => 400,
                'purchased_at' => '2025-03-17 14:26:32',
            ]
        ];

        $hot_product = [
            [
                'id' => 99001,
                'product_id' => 19225,
                'position' => 3,
            ],
            [
                'id' => 99002,
                'product_id' => 19227,
                'position' => 1,
            ],
            [
                'id' => 99003,
                'product_id' => 19223,
                'position' => 2,
            ],
            [
                'id' => 99004,
                'product_id' => 19221,
                'position' => 5,
            ],
            [
                'id' => 99005,
                'product_id' => 19222,
                'position' => 4,
            ]
        ];

        $customer = [
            [
                'id' => 1,
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
                'created_at' => '2025-03-17 14:26:32',
            ]
        ];

        DB::table('customer')->insert($customer);
        DB::table('product')->insert($product);
        DB::table('purchase')->insert($purchases);
        DB::table('hot_product')->insert($hot_product);
    }
}
