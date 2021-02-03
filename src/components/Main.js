"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_bootstrap_1 = require("react-bootstrap");
var Board_1 = __importDefault(require("./Board"));
var Rook_1 = __importDefault(require("./Rook"));
var King_1 = __importDefault(require("./King"));
var Queen_1 = __importDefault(require("./Queen"));
var Bishop_1 = __importDefault(require("./Bishop"));
var Pawn_1 = __importDefault(require("./Pawn"));
var Knight_1 = __importDefault(require("./Knight"));
var TurnDisplay_1 = __importDefault(require("./TurnDisplay"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var RookMovement_1 = __importDefault(require("./movement/RookMovement"));
var PawnMovement_1 = __importDefault(require("./movement/PawnMovement"));
var QueenMovement_1 = __importDefault(require("./movement/QueenMovement"));
var KingMovement_1 = __importDefault(require("./movement/KingMovement"));
var KnightMovement_1 = __importDefault(require("./movement/KnightMovement"));
var BishopMovement_1 = __importDefault(require("./movement/BishopMovement"));
var react_redux_1 = require("react-redux");
var boardSlice_1 = require("../redux/boardSlice");
var MovementAlert_1 = __importDefault(require("./MovementAlert"));
function Main() {
    var _a = react_1.useState([]), spaceArray = _a[0], setSpaceArray = _a[1];
    var _b = react_1.useState(react_1["default"].createElement(TurnDisplay_1["default"], null, "White turn")), turnDisp = _b[0], setTurnDisp = _b[1];
    var _c = react_1.useState(false), blackTurn = _c[0], setBlackTurn = _c[1];
    var dispatch = react_redux_1.useDispatch();
    var _d = react_1.useState(react_1["default"].createElement(react_1["default"].Fragment, null)), board = _d[0], setBoard = _d[1];
    var _e = react_1.useState('White'), turn = _e[0], setTurn = _e[1];
    var _f = react_1.useState(0), alertOpacity = _f[0], setAlertOpacity = _f[1];
    var _g = react_1.useState(''), alertMessage = _g[0], setAlertMessage = _g[1];
    var pickingEnd = react_redux_1.useSelector(boardSlice_1.selectPickingEnd);
    var rows = 8;
    var columns = 8;
    // intitializes the board array. Sets pieces in their initial positions
    var boardInit = function () {
        var newArr = [];
        for (var i = 0; i < rows; i++) {
            newArr.push([]);
            for (var j = 0; j < columns; j++) {
                newArr[i].push(null);
            }
        }
        // select a row from new array, then splice the appropriate piece into the target column
        newArr[0].splice(7, 1, react_1["default"].createElement(Rook_1["default"], { black: false }));
        newArr[0].splice(0, 1, react_1["default"].createElement(Rook_1["default"], { black: false }));
        newArr[7].splice(7, 1, react_1["default"].createElement(Rook_1["default"], { black: true }));
        newArr[7].splice(0, 1, react_1["default"].createElement(Rook_1["default"], { black: true }));
        newArr[7].splice(2, 1, react_1["default"].createElement(Bishop_1["default"], { black: true }));
        newArr[7].splice(5, 1, react_1["default"].createElement(Bishop_1["default"], { black: true }));
        newArr[0].splice(2, 1, react_1["default"].createElement(Bishop_1["default"], { black: false }));
        newArr[0].splice(5, 1, react_1["default"].createElement(Bishop_1["default"], { black: false }));
        newArr[7].splice(4, 1, react_1["default"].createElement(King_1["default"], { black: true }));
        newArr[0].splice(4, 1, react_1["default"].createElement(King_1["default"], { black: false }));
        newArr[7].splice(3, 1, react_1["default"].createElement(Queen_1["default"], { black: true }));
        newArr[0].splice(3, 1, react_1["default"].createElement(Queen_1["default"], { black: false }));
        newArr[7].splice(1, 1, react_1["default"].createElement(Knight_1["default"], { black: true }));
        newArr[7].splice(6, 1, react_1["default"].createElement(Knight_1["default"], { black: true }));
        newArr[0].splice(1, 1, react_1["default"].createElement(Knight_1["default"], { black: false }));
        newArr[0].splice(6, 1, react_1["default"].createElement(Knight_1["default"], { black: false }));
        for (var i = 0; i < columns; i++) {
            newArr[1].splice(i, 1, react_1["default"].createElement(Pawn_1["default"], { black: false }));
            newArr[6].splice(i, 1, react_1["default"].createElement(Pawn_1["default"], { black: true }));
        }
        setSpaceArray(newArr);
    };
    var handleSelection = function (row, col) {
        console.log("handling move");
        console.log('the space you selected contains:', spaceArray[row][col]);
        if (spaceArray[row][col] !== null) {
            console.log('black turn? ', spaceArray[row][col].props.black);
            if (spaceArray[row][col].props.black === blackTurn) {
                // check for validity. setPieceToMove back to null, if not valid
                console.log('move piece to where?');
                dispatch(boardSlice_1.setPickingEnd(true));
            }
        }
        return false;
    };
    // have to pass in piece to move from the child, since otherwise 
    // this function with the original pieceToMove(empty object)
    // is passed back from the child
    var pickEnd = function (row, col, pieceToMove) {
        var startRow = pieceToMove['row'];
        var startCol = pieceToMove['col'];
        var currentPiece = spaceArray[startRow][startCol];
        var validMove = false;
        // get the name of the current piece, and run the appropriate movement function
        switch (currentPiece.type.name) {
            case 'Rook':
                validMove = (RookMovement_1["default"](startCol, startRow, col, row, spaceArray));
                break;
            case 'Pawn':
                validMove = (PawnMovement_1["default"](startCol, startRow, col, row, spaceArray));
                break;
            case 'Bishop':
                validMove = (BishopMovement_1["default"](startCol, startRow, col, row, spaceArray));
                break;
            case 'King':
                validMove = (KingMovement_1["default"](startCol, startRow, col, row, spaceArray));
                break;
            case 'Queen':
                validMove = (QueenMovement_1["default"](startCol, startRow, col, row, spaceArray));
                break;
            case 'Knight':
                validMove = (KnightMovement_1["default"](startCol, startRow, col, row, spaceArray));
                break;
            default:
                break;
        }
        if (validMove) {
            // if valid, no longer picking an end location
            dispatch(boardSlice_1.setPickingEnd(false));
            var newArr = spaceArray.map(function (x) {
                return x;
            });
            // get the piece in the original location, then move to end location
            newArr[startRow].splice(startCol, 1, null);
            newArr[row].splice(col, 1, currentPiece);
            setSpaceArray(newArr);
            // set to next player's turn.
            if (turn === 'White') {
                setTurnDisp(react_1["default"].createElement(TurnDisplay_1["default"], null, "Black turn"));
                setTurn('Black');
            }
            else {
                setTurnDisp(react_1["default"].createElement(TurnDisplay_1["default"], null, "White turn"));
                setTurn('White');
            }
            setBlackTurn(!blackTurn);
        }
        else {
            // handle non-valid move here
            console.log('nonvalid');
            setAlertOpacity(1);
            setAlertMessage('Invalid Movement! Select another piece to move.');
            dispatch(boardSlice_1.setPickingEnd(false));
            dispatch(boardSlice_1.setPieceToMove({}));
        }
    };
    // initialize board to start a new game
    react_1.useEffect(function () {
        boardInit();
        setTurnDisp(react_1["default"].createElement(TurnDisplay_1["default"], null, turn + " turn"));
    }, []);
    react_1.useEffect(function () {
        // set board so that it updates when space array updates
        setBoard(react_1["default"].createElement(Board_1["default"], { spaceArray: spaceArray, rows: 8, columns: 8, handleSelection: handleSelection, pickEnd: pickEnd }));
    }, [spaceArray]);
    if (spaceArray.length > 0) {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_bootstrap_1.Container, { fluid: true },
                react_1["default"].createElement(Row_1["default"], null,
                    turnDisp,
                    react_1["default"].createElement(MovementAlert_1["default"], { alertOpacity: alertOpacity, setAlertOpacity: setAlertOpacity }, alertMessage)),
                react_1["default"].createElement(react_bootstrap_1.Container, null, board))));
    }
    else {
        return (react_1["default"].createElement(react_1["default"].Fragment, null));
    }
}
exports["default"] = Main;
