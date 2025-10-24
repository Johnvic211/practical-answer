<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;

class EventController extends Controller
{
    public function index()
    {
        $eventData = Storage::disk('public')->get('event.json');

        $event = json_decode($eventData);

        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        return response()->json($event);
    }
}
