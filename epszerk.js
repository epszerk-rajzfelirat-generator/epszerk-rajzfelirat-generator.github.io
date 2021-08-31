

$('.main a').hover(function(){
		$(this).css({color: '#777'})
		},function(){$(this).css({color:'black'})});


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
	
		function theRndm(from,to)
{
    return Math.floor(Math.random()*(to-from-1)+from);
}	;
	
	
		var tul=new Array("hőszigetelő","koszorúval egyesített","kiegészítő","vakolható","rejtett","papucselemes","elemmagas","vakolaterősítő","kapart vagy dörzsölt","tárcsás","cementes","monolit","előregyártott","osztott keresztmetszetű","lelógó","kent","fagyálló","helyszíni","csúszásmentes","előfeszített","akusztikailag igényes","tartósan rugalmas","ragasztott","egyedi","méretezett","perforált","állókorcos","hézagosan rakott","pára és légzáró","koszorú előtti","falegyenre ültetett","zsaluzatba elhelyezett","lépésálló","önterülő","nútféderes","geotextíliával gyárilag kasírozott","dombornyomott","kopásálló","szigetelést védő","élmerevített","kibetonozott","félkemény","sajtolt","csőüreges","furnérozott","foldingtokos","burkolatváltó","bitumenbe itatott","térfogatkitöltő, nem feszítő","üvegszorító","műanyag alapvakolatba ágyazott","festhető","műgyanta adalékú","szűrőfátyollal kasírozott","öntapadó","homlokzati","burkolattartó","fekete üvegszövettel kasírozott","","hidrofobizált","porszórt","külső oldali","hőhídmentes","burkolattartó","elmozdulást gátló","légtömörséget fokozó","átszellőztetett","szerelt","dilatációs","nedvességkivezető","kiegyenlítő","klinker minőségű","függesztett","U alakban hajlított","kettősfalú","csúszásgátló","rugalmas","műanyag fátyollal kasírozott","lejtéstadó","kétvízorros","előpatinásított","ékbevágott","impregnált","láng- és gombamentesített","teljes felületű","üvegszáladalékos habarccsal vértezett","gömbölyűszemű","frakcionált","mosott","teljes keresztmetszetében víztaszító","két kőzetgyapot réteg közé fektetett");	
		var anyag=new Array("üvegtégla","polisztirol","gyalult fa","kerámia","cementrabic","műkő","zsalukő","vasbeton","keményfa","vázkerámia","terméskő","szilikon","habzsinór","köracél","modifikált bitumenes","PE","PS","XPS","EPS","horganylemez","üveggyapot","greslap","ásványi szálas","hideg bitumenmáz","fagyálló kerámia","homokoskavics","PVC","ipari filc","acéllemez","MDF","forgácslap","gumi","kenderkóc","PUR","bitumenes","EPDM szalag","porózus","gipszkarton","műanyag","korracél","tüzihorganyzott","gipszkarton","titáncink","préselt gumiőrlemény");
		var mi=new Array("blokktégla","hőszigetelés","rabicháló","könyöklő","minitok","bekötő kampó","rés","háló","redőnyszekrény","rögzítés","gúzolás","vakolat","burkolat","vízorr","aljzat","vakolóprofil","profil","béléstest","papucselem","kéregpanel","dilatáció","kitt","taréjszelemen","torokgerenda","rovarháló","ellenléc","kúpcseréprögzítő","rögzítőszegély","réteg","kellősítés","filcréteg","folyóka","háttámasz","faldörzsölés","fóliabádog","lezárás","felületkiegyenlítés","tokösszekötő","kampósszeg","horonyborítás","csappantyú","csupaszlemez","gurtnitartó","dűbel","lejtésképzés","küszöbprofil","felületszivárgó","stift","attikafedés","hüvely","pálca","csepptárcsa","vaktok","tömítőkarmantyú","füstcső bekötő elem","úsztatóréteg","gyorsfüggesztő","rögzítőszegély","lejtéskorrekció");
		var hogy=new Array("kétoldali vakolattal","flexibilis ragasztóval ragasztva","nyomatékbíró, rozsdamentes vasalással","kemény PS hőszigeteléssel","falazás során elhelyezve","rábetonozással","ablakkal egyszerre építendő be","koszorúlelógásba rejtve","azonnal terhelhető","utólag tárcsás dübellel rögzítve","válaszfalteher miatt","széthúzva","lépcsősen","ragasztva","diagonál kengyellel","szarufába süllyesztve","falra felvezetve","lángolvasztással ragasztva","vakolatba süllyesztve","húzott alu profillal","alul kettőzve","a fesztáv függvényében","besüllyesztve","ragasztott rögzítéssel","cementhabarcs tapaszágyban","szegecsekkel mechanikailag rögzítve","4cm szélességben","horganyzott acél rögzítő L profilhoz szegecselve","alsó éle mentén a horganyzott acéllemez merevítősávba akasztva","hőhídmegszakító alátéttel","a lábazati sávban","bebetonozva","csavarozva","lenyúlással","a samottcső toldásainál","kondenzvízelvezetővel","az aljzathoz csavarozással rögzítve","legalább 5%-os lejtéssel","a lábazati hőszigetelés megfogására","5-10mm ütközőhézaggal","diafragmákkal rögzítve");
		var tulnum=tul.length;
		var anyagnum=anyag.length;
		var minum=mi.length;
		var hogynum=hogy.length;
		
		
		
		$(document).ready(function () {
			$('.gen').click(function () {
				var ciklus=theRndm(0,3);

				$('.out').html('<br /><br />');
				$('.out').append(tul[theRndm(0,tulnum)].capitalize() + ', ')
				for (var i=0;i<ciklus;i++) {
					$('.out').append(tul[theRndm(0,tulnum)] + ', ');
				};
					$('.out').append(tul[theRndm(0,tulnum)] + ' ');
				ciklus=theRndm(0,5);		
				if (ciklus != 0 ) {
					$('.out').append(anyag[theRndm(0,anyagnum)] + ' ');
				};

					$('.out').append(mi[theRndm(0,minum)] + ', ');
					$('.out').append(hogy[theRndm(0,hogynum)]);
			});	//click end
		});	//ready end
