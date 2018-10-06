@extends('layouts.main')


@section('title')
Laravel - React About
@endsection

@section('content')
    <div class="page-about">
        <div class="page page-bg">
            <div class="page-about-text text-center m-auto">
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse quidem odit repudiandae cupiditate ut iure doloribus laborum,
                    perspiciatis rem ullam dolorem perferendis at officia, itaque ducimus illo nesciunt sed fugit!
                    Esse quidem odit repudiandae cupiditate ut iure doloribus laborum,
                    perspiciatis rem ullam dolorem perferendis at officia, itaque ducimus illo nesciunt sed fugit!
                </p>
            </div>
        </div>

        <div class="py-5">
            <h2 class="text-center pb-3">Used Tools</h2>
            <div class="d-flex justify-content-around align-items-center">

                @component('components.card',['title'=>'Laravel','link'=>'https://laravel.com/','img'=> asset('img/laravel.png'),'body'=>'Value elegance, simplicity, and readability? You’ll fit right in. Laravel is designed for people just like you. If you need help getting started, check out Laracasts and our great documentation.'])
                @endcomponent

                @component('components.card',['title'=>'Ratchet','link'=>'http://socketo.me/','img'=> asset('img/ratchet.png'),'body'=>'Ratchet is a loosely coupled PHP library providing developers with tools to create real time, bi-directional applications between clients and servers over WebSockets. This is not your Grandfather\'s Internet.'])
                @endcomponent

                @component('components.card',['title'=>'React.js','link'=>'https://reactjs.org/','img'=> asset('img/react.png'),'body'=>'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'])
                @endcomponent

            </div>
        </div>

        <div class="page-bg">
                <div class="page-about-text text-center m-auto">
                    <h2>A little words about author</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Esse quidem odit repudiandae cupiditate ut iure doloribus laborum,
                        perspiciatis rem ullam dolorem perferendis at officia, itaque ducimus illo nesciunt sed fugit!
                        Esse quidem odit repudiandae cupiditate ut iure doloribus laborum,
                        perspiciatis rem ullam dolorem perferendis at officia, itaque ducimus illo nesciunt sed fugit!
                    </p>
                </div>
            </div>
    </div>

@endsection
