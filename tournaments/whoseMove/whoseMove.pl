#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub whoseMove {
    my ($lastPlayer, $win) = @_;

    if ('white' eq $lastPlayer) {
        if ($win) {
            return 'white';
        } else {
            return 'black';
        }
    } else {
        if ($win) {
            return 'black';
        } else {
            return 'white';
        }
    }
}
