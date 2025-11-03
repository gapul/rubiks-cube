use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy, PartialEq, Debug)]
pub enum Face {
    Front = 0,
    Back = 1,
    Right = 2,
    Left = 3,
    Up = 4,
    Down = 5,
}

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
pub enum Move {
    F, FPrime, F2,
    R, RPrime, R2,
    U, UPrime, U2,
    B, BPrime, B2,
    L, LPrime, L2,
    D, DPrime, D2,
}

#[wasm_bindgen]
pub struct RubiksCube {
    state: [[u8; 9]; 6],
}

#[wasm_bindgen]
impl RubiksCube {
    #[wasm_bindgen(constructor)]
    pub fn new() -> RubiksCube {
        let mut cube = RubiksCube {
            state: [[0; 9]; 6],
        };
        
        // Initialize solved state: each face has its own color (0-5)
        for face in 0..6 {
            for cell in 0..9 {
                cube.state[face][cell] = face as u8;
            }
        }
        
        cube
    }

    #[wasm_bindgen]
    pub fn get_state(&self) -> Vec<u8> {
        self.state.iter().flat_map(|row| row.iter().copied()).collect()
    }

    #[wasm_bindgen]
    pub fn apply_move(&mut self, mov: Move) {
        match mov {
            Move::F => self.rotate_face_clockwise(0),
            Move::FPrime => self.rotate_face_counterclockwise(0),
            Move::F2 => {
                self.rotate_face_clockwise(0);
                self.rotate_face_clockwise(0);
            },
            Move::R => self.rotate_face_clockwise(2),
            Move::RPrime => self.rotate_face_counterclockwise(2),
            Move::R2 => {
                self.rotate_face_clockwise(2);
                self.rotate_face_clockwise(2);
            },
            Move::U => self.rotate_face_clockwise(4),
            Move::UPrime => self.rotate_face_counterclockwise(4),
            Move::U2 => {
                self.rotate_face_clockwise(4);
                self.rotate_face_clockwise(4);
            },
            Move::B => self.rotate_face_clockwise(1),
            Move::BPrime => self.rotate_face_counterclockwise(1),
            Move::B2 => {
                self.rotate_face_clockwise(1);
                self.rotate_face_clockwise(1);
            },
            Move::L => self.rotate_face_clockwise(3),
            Move::LPrime => self.rotate_face_counterclockwise(3),
            Move::L2 => {
                self.rotate_face_clockwise(3);
                self.rotate_face_clockwise(3);
            },
            Move::D => self.rotate_face_clockwise(5),
            Move::DPrime => self.rotate_face_counterclockwise(5),
            Move::D2 => {
                self.rotate_face_clockwise(5);
                self.rotate_face_clockwise(5);
            },
        }
    }

    fn rotate_face_clockwise(&mut self, face: usize) {
        // Rotate the face itself
        let temp = self.state[face][0];
        self.state[face][0] = self.state[face][6];
        self.state[face][6] = self.state[face][8];
        self.state[face][8] = self.state[face][2];
        self.state[face][2] = temp;
        
        let temp = self.state[face][1];
        self.state[face][1] = self.state[face][3];
        self.state[face][3] = self.state[face][7];
        self.state[face][7] = self.state[face][5];
        self.state[face][5] = temp;

        // Rotate adjacent edges
        match face {
            0 => { // Front
                let temp1 = self.state[4][6];
                let temp2 = self.state[4][7];
                let temp3 = self.state[4][8];
                
                self.state[4][6] = self.state[3][8];
                self.state[4][7] = self.state[3][5];
                self.state[4][8] = self.state[3][2];
                
                self.state[3][8] = self.state[5][2];
                self.state[3][5] = self.state[5][1];
                self.state[3][2] = self.state[5][0];
                
                self.state[5][2] = self.state[2][0];
                self.state[5][1] = self.state[2][3];
                self.state[5][0] = self.state[2][6];
                
                self.state[2][0] = temp1;
                self.state[2][3] = temp2;
                self.state[2][6] = temp3;
            },
            2 => { // Right
                let temp1 = self.state[4][2];
                let temp2 = self.state[4][5];
                let temp3 = self.state[4][8];
                
                self.state[4][2] = self.state[0][2];
                self.state[4][5] = self.state[0][5];
                self.state[4][8] = self.state[0][8];
                
                self.state[0][2] = self.state[5][2];
                self.state[0][5] = self.state[5][5];
                self.state[0][8] = self.state[5][8];
                
                self.state[5][2] = self.state[1][6];
                self.state[5][5] = self.state[1][3];
                self.state[5][8] = self.state[1][0];
                
                self.state[1][6] = temp1;
                self.state[1][3] = temp2;
                self.state[1][0] = temp3;
            },
            4 => { // Up
                let temp1 = self.state[1][0];
                let temp2 = self.state[1][1];
                let temp3 = self.state[1][2];
                
                self.state[1][0] = self.state[2][0];
                self.state[1][1] = self.state[2][1];
                self.state[1][2] = self.state[2][2];
                
                self.state[2][0] = self.state[0][0];
                self.state[2][1] = self.state[0][1];
                self.state[2][2] = self.state[0][2];
                
                self.state[0][0] = self.state[3][0];
                self.state[0][1] = self.state[3][1];
                self.state[0][2] = self.state[3][2];
                
                self.state[3][0] = temp1;
                self.state[3][1] = temp2;
                self.state[3][2] = temp3;
            },
            1 => { // Back
                let temp1 = self.state[4][0];
                let temp2 = self.state[4][1];
                let temp3 = self.state[4][2];
                
                self.state[4][0] = self.state[2][8];
                self.state[4][1] = self.state[2][5];
                self.state[4][2] = self.state[2][2];
                
                self.state[2][8] = self.state[5][8];
                self.state[2][5] = self.state[5][7];
                self.state[2][2] = self.state[5][6];
                
                self.state[5][8] = self.state[3][0];
                self.state[5][7] = self.state[3][3];
                self.state[5][6] = self.state[3][6];
                
                self.state[3][0] = temp1;
                self.state[3][3] = temp2;
                self.state[3][6] = temp3;
            },
            3 => { // Left
                let temp1 = self.state[4][0];
                let temp2 = self.state[4][3];
                let temp3 = self.state[4][6];
                
                self.state[4][0] = self.state[1][8];
                self.state[4][3] = self.state[1][5];
                self.state[4][6] = self.state[1][2];
                
                self.state[1][8] = self.state[5][0];
                self.state[1][5] = self.state[5][3];
                self.state[1][2] = self.state[5][6];
                
                self.state[5][0] = self.state[0][0];
                self.state[5][3] = self.state[0][3];
                self.state[5][6] = self.state[0][6];
                
                self.state[0][0] = temp1;
                self.state[0][3] = temp2;
                self.state[0][6] = temp3;
            },
            5 => { // Down
                let temp1 = self.state[0][6];
                let temp2 = self.state[0][7];
                let temp3 = self.state[0][8];
                
                self.state[0][6] = self.state[2][6];
                self.state[0][7] = self.state[2][7];
                self.state[0][8] = self.state[2][8];
                
                self.state[2][6] = self.state[1][6];
                self.state[2][7] = self.state[1][7];
                self.state[2][8] = self.state[1][8];
                
                self.state[1][6] = self.state[3][6];
                self.state[1][7] = self.state[3][7];
                self.state[1][8] = self.state[3][8];
                
                self.state[3][6] = temp1;
                self.state[3][7] = temp2;
                self.state[3][8] = temp3;
            },
            _ => {}
        }
    }

    fn rotate_face_counterclockwise(&mut self, face: usize) {
        // Counterclockwise is 3 clockwise rotations
        self.rotate_face_clockwise(face);
        self.rotate_face_clockwise(face);
        self.rotate_face_clockwise(face);
    }

    #[wasm_bindgen]
    pub fn reset(&mut self) {
        for face in 0..6 {
            for cell in 0..9 {
                self.state[face][cell] = face as u8;
            }
        }
    }

    #[wasm_bindgen]
    pub fn is_solved(&self) -> bool {
        for face in 0..6 {
            for cell in 0..9 {
                if self.state[face][cell] != face as u8 {
                    return false;
                }
            }
        }
        true
    }
}

