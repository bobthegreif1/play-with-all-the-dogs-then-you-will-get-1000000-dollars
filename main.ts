namespace SpriteKind {
    export const Dog = SpriteKind.create()
    export const HappyDog = SpriteKind.create()
    export const CORGUY = SpriteKind.create()
    export const Camera = SpriteKind.create()
}
function introSequence() {
    let invisibleCamera = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Camera)
    scene.cameraFollowSprite(invisibleCamera)
    tiles.placeOnTile(invisibleCamera, tiles.getTileLocation(25, 8))
}

let corGuyImg = img`
    .............................fff....
    ..fff......................ffaaf....
    ..faafff.................ffaaaaf....
    ...faaaff................faa33af....
    ...fa3aaff...ffffff.....faaa3aaf....
    ...fa33aafffffaaaaaffff.fa333aaf....
    ...faa33affaaaaaaaaaaafffaa3aaff....
    ...ffaaaaaaaaaaaaaaaaaaafaaaaf......
    ....ffaaaaaaaaaaaaaaaaaaaaaaf.......
    .....ffaaaaaaaaaaaaaaaaaaaaff.......
    .....faaaaaafaaaaaafaaaaaaaf........
    .....faaaaaafaaaaaafaaaaaaaf........
    .....faa333aaaaaaaaaa333aaf.........
    .....faa3333aaaaaaaa3333aaff........
    .....faa333333fff33333333aaf........
    ...fffaa3333333f333333333aaff.......
    ...faaaa3333ff3333ff33333aaaf.......
    ...faaa333333ffffff333333aaff.......
    ....faa333333333333333333aaf........
    ....fa333333333333333333aaaf........
    ...faa333333333333333333aaaf........
    ...fa3333333333333333333aaaff.......
    ...fa33333333333333333aa3aaaff......
    ...faa3333333333333333aa3aaaafff....
    ...faa3333333333333333aaa3aaaaaff...
    ...ffaa33333333333333aaaaa3aaaaaaff.
    ....faaf333333333f33aaafaa3aaaaaaaff
    ....faaff3333333f333aaffaaaaaaaaaaaf
    ....ffaaf333333f333aaafaaaaaaaaaa3ff
    .....faaff33333f3aaaafaaaaaafaaa33f.
    ....fffa3fffffff3aafffaaaaaffaa333f.
    ....faaaff.....f3affffffffff3333fff.
    ....fffff......ffff........ffffff...
    `
let tumbleWeedImg = img`
    . . 3 3 3 6 6 3 3 . . . . . . . 
    . 6 6 3 3 3 6 6 3 3 6 3 3 . . . 
    . 3 6 6 3 3 3 6 3 3 3 6 3 3 . . 
    3 3 3 3 3 3 3 3 6 3 3 6 3 3 6 . 
    3 6 6 6 3 3 3 3 6 3 3 6 3 3 6 3 
    6 6 3 6 6 3 3 3 6 3 3 3 3 3 6 3 
    3 3 3 3 3 3 3 3 6 3 6 3 3 6 6 3 
    3 3 3 3 3 3 3 3 3 3 6 3 3 3 3 3 
    3 6 6 3 3 3 3 3 6 6 6 3 6 3 3 6 
    3 6 3 3 3 6 3 3 6 6 3 6 6 3 3 6 
    3 6 3 3 3 6 3 3 3 3 3 3 3 3 6 6 
    6 6 3 3 3 6 3 3 3 3 3 3 3 6 6 3 
    6 3 3 3 3 6 6 3 3 3 3 3 6 6 3 3 
    . 3 6 3 3 3 6 6 6 6 6 3 3 3 3 . 
    . . 6 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 6 6 6 3 3 3 3 3 6 6 6 6 6 . 
    `
tiles.setTilemap(tilemap`level`)
let dogImgs = [
img`
    . . . . 1 . . . . 1 . . . . . . 
    . . . . 1 1 . . 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 f f 1 . . . . . . 
    . . . . f 1 f 1 f . . . . f . . 
    . . . . 1 1 f f f . . . . . f . 
    . . . . f 1 1 1 1 1 . . . . f . 
    . . . . . . 1 1 1 1 1 . . . f . 
    . . . . . . 1 1 1 1 1 1 . f f . 
    . . . . . . 1 1 1 1 1 1 1 f f . 
    . . . . . f 1 1 1 1 1 1 1 1 f . 
    . . . . f 1 1 1 1 1 f f 1 1 1 . 
    . . . f 1 1 1 1 1 1 f 1 1 1 1 . 
    . . . f 1 1 1 1 1 f 1 1 1 1 f . 
    . . . f 1 1 1 1 1 f 1 1 1 1 f . 
    . . f 1 1 1 1 f f f 1 1 1 1 f . 
    `,
img`
    . . . . . . . . . . . . f f e . . . 
    . . . . . . . . . . . . f f 1 e . . 
    . . . . . . . . . . . . e e e e e f 
    . . . . . . . . . . . . e e e e e e 
    . . . . . . . . . . . . e e e . . . 
    . . e e e e e e e e e e e e e . . . 
    . e e e e e e e e e e e e e e . . . 
    e . e e e e e e e e e e e e e . . . 
    . . e e e e e e e e e e e e . . . . 
    . . e c . . . . . . . c . e . . . . 
    . . e e c . . . . . . c c e e . . . 
    `,
img`
    . . . . . . . . . . . e . . . . 
    . e . . . . . . . . . e e e . . 
    e . . . . . . . . . e e 1 f e e 
    e . . . . . . . . . e e e c c . 
    . e e e e e e e e e e e c . . . 
    . . . e e . . c c e e e . . . . 
    . . . e c . . d d c e e . . . . 
    . . . e . . . . . d c e . . . . 
    . . . e . . . . . . . e . . . . 
    . . . c e . . . . . . c e . . . 
    `,
img`
    . . . . . . . . 1 1 1 1 1 1 1 . 
    . . . . . . . 1 1 d 1 1 1 1 1 . 
    . . . . . . . 1 1 d 1 b 1 b 1 . 
    . . . . . . . . . 1 1 1 1 1 1 3 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 
    . 1 1 1 1 1 1 1 1 1 1 1 d d d . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 d d . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 d d . 
    1 . 1 1 1 1 1 1 1 1 1 1 1 1 d . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 b . 
    . . . 1 1 1 b . . . . 1 1 b . . 
    . . . 1 . b . . . . . 1 . b . . 
    `,
img`
    ....................
    ....................
    ....................
    ............eeeee...
    ...........eddddde..
    ...........eddddde..
    eeeeeeeeeeeeddfdfee.
    ddddddddddddddddddde
    eeedddddddddddddddde
    ..edddddddddddddddde
    ..eddddddddddddd3ee.
    ..edddddddddddde....
    ..eddddddddddde.....
    ..eedede.edede......
    ..eedede.edede......
    ..eeeeee.eeeee......
    `,
img`
    ..dddddd........
    .d111111d.......
    d11111111d......
    d1f11f1d1d......
    d111111d1d......
    d11d1111d.......
    df1d111d........
    .dd1111d........
    d1111111d.......
    d11111111d......
    d111111111d.....
    d1111111111d....
    d111111d111d....
    .d1111d1111d....
    .d1111d11111d.dd
    ..d111d11111d..d
    ..d11d1d11111d.d
    ..d11d1dd1111dd.
    ..d1d11dd1111d..
    ..d1d11d1d1111d.
    .d11d1dd11d111d.
    `
]
introSequence()