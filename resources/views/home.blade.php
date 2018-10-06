@extends('layouts.main')


@section('title')
Laravel - React
@endsection

@section('content')

    <div class="home-page">
        <div id="particles-js">
        </div>
    </div>

@endsection

@section('scripts')
    <script src="{{ asset('js/particles.min.js') }}"></script>
    <script>
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {});
    </script>
@endsection

