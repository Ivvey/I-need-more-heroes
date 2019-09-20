//load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Materials = require('Materials');


// #region Declarations
var left = Scene.root.find('Arrow_left');
var right = Scene.root.find('Arrow_right');
var TopText = Scene.root.find('Class');
var Frame = Scene.root.find('Frame');
var state = 0;
var Barbarian_Helmet = Scene.root.find('Barbarian_Helmet');
var Face = Scene.root.find('Face');
var Notes = Scene.root.find('Notes');
var Background = Scene.root.find('Background');
var Fighter_Helmet = Scene.root.find('Fighter_Helmet');
var Paladin_Helmet = Scene.root.find('Paladin_Helmet');
var Flame = Scene.root.find('Flame');
var Eyes = Scene.root.find('Eyes');
var Wizard_Hat = Scene.root.find('Wizard_Hat');
var d20 = Scene.root.find('d20');
var BG = Scene.root.find('BG');
// #endregion

// #region HIDE OBJECTS
Barbarian_Helmet.hidden = true;
Notes.hidden = true;
Fighter_Helmet.hidden = true;
Paladin_Helmet.hidden = true;
Flame.hidden = true;
Eyes.hidden = true;
Wizard_Hat.hidden = true;
d20.hidden = true;
BG.hidden = true;
// #endregion


TouchGestures.onTap(right).subscribe(forward);
TouchGestures.onTap(left).subscribe(back);

function forward(){
state++;
if(state==13){
    state=0
}
// #region BARBARIAN
if(state==0){
    TopText.material = Materials.get('txt_barbarian');
    Frame.material = Materials.get('fr_barbarian');
    Face.material = Materials.get('barbarian_face');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = false;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region BARD
else if(state==1){
    TopText.material = Materials.get('txt_bard');
    Frame.material = Materials.get('fr_bard');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = false;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region CLERIC
else if(state==2){
    TopText.material = Materials.get('txt_cleric');
    Frame.material = Materials.get('fr_cleric');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('Shine');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = false;

}
// #endregion

// #region DRUID
else if(state==3){
    TopText.material = Materials.get('txt_druid');
    Frame.material = Materials.get('fr_druid');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;
}
// #endregion

// #region Fighter
else if(state==4){
    TopText.material = Materials.get('txt_fighter');
    Frame.material = Materials.get('fr_fighter');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = false;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region Monk
else if(state==5){
    TopText.material = Materials.get('txt_monk');
    Frame.material = Materials.get('fr_monk');
    Face.material = Materials.get('monk_face');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region Paladin
else if(state==6){
    TopText.material = Materials.get('txt_paladin');
    Frame.material = Materials.get('fr_paladin');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = false;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region Ranger
else if(state==7){
    TopText.material = Materials.get('txt_ranger');
    Frame.material = Materials.get('fr_ranger');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('forest');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = false;

}
// #endregion

// #region Rogue
else if(state==8){
    TopText.material = Materials.get('txt_rogue');
    Frame.material = Materials.get('fr_rogue');
    Face.material = Materials.get('rogue_face');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region Sorcerer
else if(state==9){
    TopText.material = Materials.get('txt_sorcerer');
    Frame.material = Materials.get('fr_sorcerer');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = false;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region Warlock
else if(state==10){
    TopText.material = Materials.get('txt_warlock');
    Frame.material = Materials.get('fr_warlock');
    Face.material = Materials.get('warlock_face');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = false;
    Wizard_Hat.hidden = true;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region Wizard
else if(state==11){
    TopText.material = Materials.get('txt_wizard');
    Frame.material = Materials.get('fr_wizard');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = false;
    d20.hidden = true;
    BG.hidden = true;

}
// #endregion

// #region DM
else{
    TopText.material = Materials.get('txt_dm');
    Frame.material = Materials.get('fr_dm');
    Face.material = Materials.get('transparent');
    Background.material = Materials.get('transparent');
    Barbarian_Helmet.hidden = true;
    Notes.hidden = true;
    Fighter_Helmet.hidden = true;
    Paladin_Helmet.hidden = true;
    Flame.hidden = true;
    Eyes.hidden = true;
    Wizard_Hat.hidden = true;
    d20.hidden = false;
    BG.hidden = true;
}
// #endregion
}
function back(){
    state--;
    if(state==-1){
        state==12;
    }
    // #region BARBARIAN
    if(state==0){
        TopText.material = Materials.get('txt_barbarian');
        Frame.material = Materials.get('fr_barbarian');
        Face.material = Materials.get('barbarian_face');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = false;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region BARD
    else if(state==1){
        TopText.material = Materials.get('txt_bard');
        Frame.material = Materials.get('fr_bard');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = false;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region CLERIC
    else if(state==2){
        TopText.material = Materials.get('txt_cleric');
        Frame.material = Materials.get('fr_cleric');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('Shine');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region DRUID
    else if(state==3){
        TopText.material = Materials.get('txt_druid');
        Frame.material = Materials.get('fr_druid');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
        Squirrel.hidden = false;
        Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region Fighter
    else if(state==4){
        TopText.material = Materials.get('txt_fighter');
        Frame.material = Materials.get('fr_fighter');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = false;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region Monk
    else if(state==5){
        TopText.material = Materials.get('txt_monk');
        Frame.material = Materials.get('fr_monk');
        Face.material = Materials.get('monk_face');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region Paladin
    else if(state==6){
        TopText.material = Materials.get('txt_paladin');
        Frame.material = Materials.get('fr_paladin');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = false;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region Ranger
    else if(state==7){
        TopText.material = Materials.get('txt_ranger');
        Frame.material = Materials.get('fr_ranger');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('forest');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region Rogue
    else if(state==8){
        TopText.material = Materials.get('txt_rogue');
        Frame.material = Materials.get('fr_rogue');
        Face.material = Materials.get('rogue_face');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region Sorcerer
    else if(state==9){
        TopText.material = Materials.get('txt_sorcerer');
        Frame.material = Materials.get('fr_sorcerer');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = false;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region Warlock
    else if(state==10){
        TopText.material = Materials.get('txt_warlock');
        Frame.material = Materials.get('fr_warlock');
        Face.material = Materials.get('warlock_face');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = false;
        Wizard_Hat.hidden = true;
        d20.hidden = true;
    }
    // #endregion
    
    // #region Wizard
    else if(state==11){
        TopText.material = Materials.get('txt_wizard');
        Frame.material = Materials.get('fr_wizard');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = false;
        d20.hidden = true;
    }
    // #endregion
    
    // #region DM
    else{
        TopText.material = Materials.get('txt_dm');
        Frame.material = Materials.get('fr_dm');
        Face.material = Materials.get('transparent');
        Background.material = Materials.get('transparent');
        Barbarian_Helmet.hidden = true;
        Notes.hidden = true;
            Fighter_Helmet.hidden = true;
        Paladin_Helmet.hidden = true;
        Flame.hidden = true;
        Eyes.hidden = true;
        Wizard_Hat.hidden = true;
        d20.hidden = false;
    }
    // #endregion
    }


